import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, Star, ArrowRight, Leaf, Sparkles,
  ShieldCheck, MapPin, Home, BadgeIndianRupee, Mountain,
  CigaretteOff, Wine, VolumeX
} from 'lucide-react';
import {
  siteInfo, rooms, whyChooseUs, amenities,
  attractions, reviews
} from '../data/mock';
import { Card, CardContent } from '../components/ui/card';

const iconMap = {
  Leaf, Sparkles, ShieldCheck, MapPin, Home, BadgeIndianRupee
};

export default function HomePage() {
  const featuredRooms = rooms.filter(r => r.featured).slice(0, 3);
  const featuredAmenities = amenities.slice(0, 8);
  const dehradunAttractions = attractions.filter(a => a.location === 'Dehradun').slice(0, 4);

  return (
    <main>

      {/* HERO */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Leaf className="w-4 h-4 text-[rgb(13,121,22)]" />
              <span className="text-sm font-medium text-[rgb(0,55,32)]">
                Premium Homestay • Peaceful Living
              </span>
            </div>

            <h1 className="heading-1 mb-6">
              A Calm, Premium Homestay Designed for Peaceful Living
            </h1>

            <p className="body-large text-[rgb(131,146,140)] mb-8 max-w-2xl">
              Casa Garden is a thoughtfully curated homestay offering serenity,
              cleanliness, and comfort. Ideal for families, couples, and long-stay
              guests who value privacy, discipline, and a refined living environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteInfo.phone}`} className="btn-primary text-base">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello! I would like to enquire about staying at Casa Garden.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            {/* TRUST */}
            <div className="flex flex-wrap items-center gap-4 mt-10 pt-10 border-t border-black/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-[rgb(131,146,140)]">
                  5.0 Rated • Trusted by {reviews.length}+ Guests
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-black/10" />
              <div className="flex items-center gap-2 text-sm text-[rgb(131,146,140)]">
                <ShieldCheck className="w-5 h-5 text-[rgb(13,121,22)]" />
                Safe • Quiet • Family-Friendly
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CASA GARDEN */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="heading-2 mb-4">Why Guests Choose Casa Garden</h2>
            <p className="body-medium text-[rgb(131,146,140)] max-w-2xl mx-auto">
              Designed for guests who prefer calm surroundings,
              respectful living, and premium cleanliness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map(item => {
              const Icon = iconMap[item.icon];
              return (
                <Card key={item.id} className="border-black/5 card-hover bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-[rgb(13,121,22)]" />}
                    </div>
                    <h3 className="heading-3 text-lg mb-2">{item.title}</h3>
                    <p className="body-small">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="heading-2 mb-4">Rooms & Thoughtful Stay Options</h2>
              <p className="body-medium text-[rgb(131,146,140)] max-w-xl">
                Every room is designed to support rest, privacy,
                and long-term comfort.
              </p>
            </div>
            <Link to="/rooms" className="btn-secondary w-fit">
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map(room => (
              <Card key={room.id} className="border-black/5 card-hover bg-white overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(148,242,127,0.2)] to-[rgba(148,242,127,0.05)] flex items-center justify-center">
                  <Home className="w-12 h-12 text-[rgb(13,121,22)] opacity-40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="heading-3 text-lg mb-1">{room.name}</h3>
                  <p className="text-sm text-[rgb(131,146,140)] mb-3">
                    {room.capacity} • {room.size}
                  </p>
                  <p className="body-small mb-4 line-clamp-2">{room.description}</p>
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
                      href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g,'')}?text=${encodeURIComponent(`Hi! I am interested in ${room.name} at Casa Garden.`)}`}
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
        </div>
      </section>

      {/* RULES AS A FEATURE */}
      <section className="section-padding bg-[rgb(0,55,32)] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Peaceful, Disciplined Environment
          </h2>
          <p className="text-white/70 mb-10">
            Our house rules ensure comfort, safety, and peace for every guest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: CigaretteOff, title: 'No Smoking' },
              { icon: Wine, title: 'No Alcohol' },
              { icon: VolumeX, title: 'No Loud Music or Parties' }
            ].map((rule, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <rule.icon className="w-10 h-10 text-[#8FEC78] mx-auto mb-3" />
                <h3 className="font-semibold">{rule.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Explore Dehradun from Casa Garden</h2>
          <p className="body-medium text-[rgb(131,146,140)] mb-12 max-w-2xl mx-auto">
            Enjoy nature, hills, and scenic spots — then return to calm comfort.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dehradunAttractions.map(place => (
              <div key={place.id} className="p-5 rounded-xl border border-black/5 card-hover">
                <Mountain className="w-6 h-6 text-[rgb(13,121,22)] mb-3 mx-auto" />
                <h4 className="font-semibold text-[rgb(0,55,32)]">{place.name}</h4>
                <p className="text-sm text-[rgb(131,146,140)]">{place.distance} away</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Experience Calm Living at Casa Garden</h2>
          <p className="body-medium text-[rgb(131,146,140)] mb-8">
            Reach out to check availability or clarify any questions.
            We’ll be happy to host you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteInfo.phone}`} className="btn-primary text-base">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g,'')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
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
