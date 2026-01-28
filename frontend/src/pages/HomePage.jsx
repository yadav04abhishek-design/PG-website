import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, Star, ArrowRight, Leaf, Sparkles, 
  ShieldCheck, MapPin, Home, BadgeIndianRupee, Users, Mountain,
  CigaretteOff, Wine, VolumeX
} from 'lucide-react';
import { 
  siteInfo, rooms, whyChooseUs, amenities, houseRules, 
  attractions, reviews 
} from '../data/mock';
import { Card, CardContent } from '../components/ui/card';

const iconMap = {
  Leaf, Sparkles, ShieldCheck, MapPin, Home, BadgeIndianRupee
};

export default function HomePage() {
  const featuredRooms = rooms.filter(room => room.featured).slice(0, 3);
  const featuredAmenities = amenities.slice(0, 8);
  const importantRules = houseRules.filter(rule => rule.important).slice(0, 3);
  const dehradunAttractions = attractions.filter(a => a.location === 'Dehradun').slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-16 md:pt-40 md:pb-24 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-sm">
              <Leaf className="w-4 h-4 text-[rgb(13,121,22)]" />
              <span className="text-sm font-medium text-[rgb(0,55,32)]">Homestay in Dehradun • PG in Gurgaon</span>
            </div>
            
            <h1 className="heading-1 mb-6">
              Peaceful Stays for Families & Long-Term Guests
            </h1>
            
            <p className="body-large text-[rgb(131,146,140)] mb-8 max-w-2xl">
              Experience comfort, cleanliness, and safety at Casa Garden. 
              Your serene home away from home in the foothills of Dehradun 
              and the heart of Gurgaon.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${siteInfo.phone}`} className="btn-primary text-base">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I want to book a stay at Casa Garden.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-10 pt-10 border-t border-black/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-[rgb(131,146,140)]">
                  5.0 Rating from {reviews.length}+ Happy Guests
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-black/10" />
              <div className="flex items-center gap-2 text-sm text-[rgb(131,146,140)]">
                <ShieldCheck className="w-5 h-5 text-[rgb(13,121,22)]" />
                Family-Safe Environment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Casa Garden?</h2>
            <p className="body-medium text-[rgb(131,146,140)] max-w-2xl mx-auto">
              We provide more than just accommodation — we offer a peaceful sanctuary 
              where families and professionals feel at home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              return (
                <Card key={item.id} className="border-black/5 card-hover bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-[rgb(13,121,22)]" />}
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

      {/* Room Types */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="heading-2 mb-4">Rooms & Stay Options</h2>
              <p className="body-medium text-[rgb(131,146,140)] max-w-xl">
                From cozy rooms in Dehradun to comfortable PG accommodations in Gurgaon, 
                find your perfect stay.
              </p>
            </div>
            <Link to="/rooms" className="btn-secondary w-fit">
              View All Rooms
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <Card key={room.id} className="border-black/5 card-hover overflow-hidden bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-[rgba(148,242,127,0.2)] to-[rgba(148,242,127,0.05)] flex items-center justify-center">
                  <div className="text-center">
                    <Home className="w-12 h-12 text-[rgb(13,121,22)] mx-auto mb-2 opacity-50" />
                    <span className="text-sm text-[rgb(131,146,140)]">{room.location}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="heading-3 text-lg mb-1">{room.name}</h3>
                      <p className="text-sm text-[rgb(131,146,140)]">
                        {room.capacity} • {room.size}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[rgba(148,242,127,0.15)] text-[rgb(13,121,22)] text-xs font-medium rounded-full">
                      {room.location}
                    </span>
                  </div>
                  <p className="body-small mb-4 line-clamp-2">{room.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div>
                      <span className="text-2xl font-bold text-[rgb(0,55,32)]">₹{room.price.toLocaleString()}</span>
                      <span className="text-sm text-[rgb(131,146,140)]">
                        /{room.priceUnit}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi! I'm interested in ${room.name} at Casa Garden ${room.location}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2 px-4"
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

      {/* Amenities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="heading-2 mb-4">Amenities & Facilities</h2>
              <p className="body-medium text-[rgb(131,146,140)] max-w-xl">
                Everything you need for a comfortable stay, all included.
              </p>
            </div>
            <Link to="/amenities" className="btn-secondary w-fit">
              View All Amenities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredAmenities.map((amenity) => (
              <div key={amenity.id} className="p-4 rounded-xl border border-black/5 hover:border-[#8FEC78]/50 hover:bg-[rgba(148,242,127,0.05)] transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center mb-3">
                  <Sparkles className="w-5 h-5 text-[rgb(13,121,22)]" />
                </div>
                <h4 className="font-medium text-[rgb(0,55,32)] text-sm mb-1">{amenity.name}</h4>
                <p className="text-xs text-[rgb(131,146,140)] line-clamp-2">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House Rules Highlight */}
      <section className="section-padding bg-[rgb(0,55,32)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Peaceful Environment for All</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We maintain strict guidelines to ensure a tranquil and family-friendly atmosphere.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: CigaretteOff, title: 'No Smoking', desc: 'Smoke-free premises' },
              { icon: Wine, title: 'No Alcohol', desc: 'Dry property policy' },
              { icon: VolumeX, title: 'No Loud Music', desc: 'Peaceful environment' }
            ].map((rule, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <rule.icon className="w-7 h-7 text-[#8FEC78]" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{rule.title}</h3>
                <p className="text-white/60 text-sm">{rule.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/house-rules" className="inline-flex items-center gap-2 text-[#8FEC78] hover:underline font-medium">
              View All House Rules
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Explore Nearby Attractions</h2>
            <p className="body-medium text-[rgb(131,146,140)] max-w-2xl mx-auto">
              Our Dehradun location offers easy access to stunning natural wonders and popular destinations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dehradunAttractions.map((place) => (
              <div key={place.id} className="p-5 rounded-xl border border-black/5 hover:shadow-md transition-all duration-200 card-hover">
                <div className="w-10 h-10 rounded-xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center mb-3">
                  <Mountain className="w-5 h-5 text-[rgb(13,121,22)]" />
                </div>
                <h4 className="font-semibold text-[rgb(0,55,32)] mb-1">{place.name}</h4>
                <p className="text-sm text-[rgb(131,146,140)] mb-2">{place.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[rgb(13,121,22)]">
                  <MapPin className="w-3 h-3" />
                  {place.distance} away
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What Our Guests Say</h2>
            <p className="body-medium text-[rgb(131,146,140)] max-w-2xl mx-auto">
              Hear from families and professionals who made Casa Garden their home.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <Card key={review.id} className="border-black/5 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[rgb(14,15,12)] mb-4 leading-relaxed">"{review.review}"</p>
                  <div className="flex items-center justify-between pt-4 border-t border-black/5">
                    <div>
                      <p className="font-medium text-[rgb(0,55,32)]">{review.name}</p>
                      <p className="text-sm text-[rgb(131,146,140)]">{review.stayType}</p>
                    </div>
                    <span className="text-xs text-[rgb(131,146,140)]">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-4">Ready to Book Your Stay?</h2>
          <p className="body-medium text-[rgb(131,146,140)] mb-8 max-w-2xl mx-auto">
            Contact us today to check availability and make a reservation. 
            We look forward to hosting you at Casa Garden!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteInfo.phone}`} className="btn-primary text-base">
              <Phone className="w-5 h-5" />
              Call {siteInfo.phone}
            </a>
            <a
              href={`https://wa.me/${siteInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi! I want to book a stay at Casa Garden.')}`}
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
