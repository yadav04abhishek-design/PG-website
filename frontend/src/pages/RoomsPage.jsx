import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home, Users, Maximize, MapPin,
  Phone, MessageCircle, Filter
} from 'lucide-react';
import { rooms, siteInfo } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function RoomsPage() {
  const [activeLocation, setActiveLocation] = useState('all');

  const filteredRooms =
    activeLocation === 'all'
      ? rooms
      : rooms.filter(room => room.location.toLowerCase() === activeLocation);

  return (
    <main className="pt-24">

      {/* HEADER */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">Rooms & Stay Options</span>
          </nav>

          <h1 className="heading-1 mb-4">Rooms & Thoughtful Stay Options</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            Whether you’re planning a peaceful homestay in Dehradun or looking for
            a disciplined, premium PG setup in Gurgaon, each room at Casa Garden
            is designed for comfort, cleanliness, and calm living.
          </p>
        </div>
      </section>

      {/* ROOMS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">

          {/* FILTER */}
          <div className="mb-8">
            <Tabs defaultValue="all" onValueChange={setActiveLocation}>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-[rgb(131,146,140)]">
                  <Filter className="w-4 h-4" />
                  Filter by location
                </div>
                <TabsList className="bg-[rgba(148,242,127,0.1)] border border-black/5">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="dehradun"
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white"
                  >
                    Dehradun
                  </TabsTrigger>
                  <TabsTrigger
                    value="gurgaon"
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white"
                  >
                    Gurgaon
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>

          {/* COUNT */}
          <p className="text-sm text-[rgb(131,146,140)] mb-6">
            Showing {filteredRooms.length}{' '}
            {filteredRooms.length === 1 ? 'stay option' : 'stay options'}
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map(room => (
              <Card
                key={room.id}
                className="border-black/5 card-hover bg-white overflow-hidden"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(148,242,127,0.2)] to-[rgba(148,242,127,0.05)] flex items-center justify-center relative">
                  <div className="text-center">
                    <Home className="w-14 h-14 text-[rgb(13,121,22)] opacity-40 mx-auto mb-2" />
                    <span className="text-sm text-[rgb(131,146,140)]">
                      {room.location}
                    </span>
                  </div>
                  {room.featured && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[rgb(13,121,22)] text-white text-xs font-medium rounded-full">
                      Popular Choice
                    </span>
                  )}
                </div>

                {/* CONTENT */}
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="heading-3 text-lg mb-1">{room.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-[rgb(131,146,140)]">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {room.capacity}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="w-4 h-4" />
                          {room.size}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[rgba(148,242,127,0.15)] text-[rgb(13,121,22)] text-xs font-medium rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {room.location}
                    </span>
                  </div>

                  <p className="body-small mb-4 line-clamp-2">
                    {room.description}
                  </p>

                  {/* AMENITIES */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-black/5 text-[rgb(131,146,140)] text-xs rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 4 && (
                      <span className="px-2 py-0.5 bg-black/5 text-[rgb(131,146,140)] text-xs rounded-full">
                        +{room.amenities.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* PRICE & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div>
                      <span className="text-2xl font-bold text-[rgb(0,55,32)]">
                        ₹{room.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-[rgb(131,146,140)]">
                        /{room.priceUnit}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/${siteInfo.whatsapp.replace(
                        /[^0-9]/g,
                        ''
                      )}?text=${encodeURIComponent(
                        `Hello! I am interested in ${room.name} at Casa Garden (${room.location}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm px-4 py-2"
                    >
                      Enquire
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* EMPTY */}
          {filteredRooms.length === 0 && (
            <div className="text-center py-14">
              <Home className="w-16 h-16 mx-auto mb-4 text-[rgb(131,146,140)] opacity-40" />
              <h3 className="heading-3 mb-2">No options available</h3>
              <p className="text-[rgb(131,146,140)]">
                Please adjust your filter or contact us for assistance.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="section-padding accent-bg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Need Help Choosing the Right Room?</h2>
          <p className="body-medium text-[rgb(131,146,140)] mb-8 max-w-xl mx-auto">
            Tell us your requirements and duration — we’ll help you find
            the most suitable option at Casa Garden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteInfo.phone}`} className="btn-primary">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${siteInfo.whatsapp.replace(
                /[^0-9]/g,
                ''
              )}?text=${encodeURIComponent(
                'Hello! I need help choosing a room at Casa Garden.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
