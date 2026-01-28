import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Mountain, Building2, Train, Plane, Clock, Navigation } from 'lucide-react';
import { siteInfo, attractions } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

export default function LocationsPage() {
  const dehradunAttractions = attractions.filter(a => a.location === 'Dehradun');
  const gurgaonAttractions = attractions.filter(a => a.location === 'Gurgaon');

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">Locations</span>
          </nav>
          
          <h1 className="heading-1 mb-4">Our Locations</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            Casa Garden operates in two prime locations — a peaceful homestay in Dehradun's 
            scenic foothills and convenient PG accommodation in Gurgaon's corporate hub.
          </p>
        </div>
      </section>

      {/* Location Tabs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="dehradun">
            <TabsList className="bg-[rgba(148,242,127,0.1)] border border-black/5 mb-8">
              <TabsTrigger 
                value="dehradun"
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white gap-2"
              >
                <Mountain className="w-4 h-4" />
                Dehradun Homestay
              </TabsTrigger>
              <TabsTrigger 
                value="gurgaon"
                className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white gap-2"
              >
                <Building2 className="w-4 h-4" />
                Gurgaon PG
              </TabsTrigger>
            </TabsList>

            {/* Dehradun Content */}
            <TabsContent value="dehradun">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Map */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-[rgba(148,242,127,0.1)] border border-black/5">
                    <iframe
                      src={siteInfo.locations.dehradun.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Casa Garden Dehradun Location"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                      <Mountain className="w-6 h-6 text-[rgb(13,121,22)]" />
                    </div>
                    <div>
                      <h2 className="heading-3">{siteInfo.locations.dehradun.name}</h2>
                      <p className="text-sm text-[rgb(131,146,140)]">Homestay in the foothills</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[rgb(13,121,22)] mt-0.5 flex-shrink-0" />
                      <p className="text-[rgb(14,15,12)]">{siteInfo.locations.dehradun.address}</p>
                    </div>
                  </div>

                  {/* Quick Distance Info */}
                  <Card className="border-black/5 mb-6">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-[rgb(0,55,32)] mb-3 flex items-center gap-2">
                        <Navigation className="w-4 h-4" />
                        Distance from
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <Train className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Railway Station: 5 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Plane className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Airport: 25 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Clock Tower: 4 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mountain className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Mussoorie: 35 km</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${siteInfo.phone}`} className="btn-primary flex-1">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I want to know more about Casa Garden Dehradun.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="mt-12">
                <h3 className="heading-3 mb-6">Nearby Attractions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {dehradunAttractions.map((place) => (
                    <Card key={place.id} className="border-black/5 card-hover">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center flex-shrink-0">
                          <Mountain className="w-5 h-5 text-[rgb(13,121,22)]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[rgb(0,55,32)] mb-1">{place.name}</h4>
                          <p className="text-sm text-[rgb(131,146,140)] mb-1">{place.description}</p>
                          <span className="text-xs font-medium text-[rgb(13,121,22)]">{place.distance} away</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Gurgaon Content */}
            <TabsContent value="gurgaon">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Map */}
                <div className="order-2 lg:order-1">
                  <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-[rgba(148,242,127,0.1)] border border-black/5">
                    <iframe
                      src={siteInfo.locations.gurgaon.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Casa Garden Gurgaon Location"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="order-1 lg:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-[rgb(13,121,22)]" />
                    </div>
                    <div>
                      <h2 className="heading-3">{siteInfo.locations.gurgaon.name}</h2>
                      <p className="text-sm text-[rgb(131,146,140)]">PG in corporate hub</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[rgb(13,121,22)] mt-0.5 flex-shrink-0" />
                      <p className="text-[rgb(14,15,12)]">{siteInfo.locations.gurgaon.address}</p>
                    </div>
                  </div>

                  {/* Quick Distance Info */}
                  <Card className="border-black/5 mb-6">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-[rgb(0,55,32)] mb-3 flex items-center gap-2">
                        <Navigation className="w-4 h-4" />
                        Distance from
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <Train className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">HUDA Metro: 1 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Plane className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">IGI Airport: 18 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Cyber City: 6 km</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-[rgb(131,146,140)]" />
                          <span className="text-sm text-[rgb(131,146,140)]">Cyber Hub: 5 km</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`tel:${siteInfo.phone}`} className="btn-primary flex-1">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I want to know more about Casa Garden Gurgaon PG.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Nearby Attractions */}
              <div className="mt-12">
                <h3 className="heading-3 mb-6">Nearby Places</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {gurgaonAttractions.map((place) => (
                    <Card key={place.id} className="border-black/5 card-hover">
                      <CardContent className="p-4 flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 text-[rgb(13,121,22)]" />
                        </div>
                        <div>
                          <h4 className="font-medium text-[rgb(0,55,32)] mb-1">{place.name}</h4>
                          <p className="text-sm text-[rgb(131,146,140)] mb-1">{place.description}</p>
                          <span className="text-xs font-medium text-[rgb(13,121,22)]">{place.distance} away</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
