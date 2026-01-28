import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, Wind, Droplets, Sparkles, Car, Zap, Shield, Shirt,
  TreePine, ChefHat, Tv, Heart, Flame, User, Luggage, AlarmClock,
  Check
} from 'lucide-react';
import { amenities } from '../data/mock';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

const iconMap = {
  Wifi, Wind, Droplets, Sparkles, Car, Zap, Shield, Shirt,
  TreePine, ChefHat, Tv, Heart, Flame, User, Luggage, AlarmClock
};

const categories = [
  { id: 'all', name: 'All Amenities' },
  { id: 'essential', name: 'Essential' },
  { id: 'safety', name: 'Safety' },
  { id: 'convenience', name: 'Convenience' },
  { id: 'leisure', name: 'Leisure' },
  { id: 'service', name: 'Service' }
];

export default function AmenitiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredAmenities = activeCategory === 'all'
    ? amenities
    : amenities.filter(a => a.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">Amenities</span>
          </nav>
          
          <h1 className="heading-1 mb-4">Amenities & Facilities</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            Enjoy a wide range of amenities designed for your comfort, safety, and convenience. 
            Everything you need for a pleasant stay is included.
          </p>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8 overflow-x-auto pb-2">
            <Tabs defaultValue="all" onValueChange={setActiveCategory}>
              <TabsList className="bg-[rgba(148,242,127,0.1)] border border-black/5 inline-flex w-auto">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat.id}
                    value={cat.id}
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white whitespace-nowrap"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredAmenities.map((amenity) => {
              const IconComponent = iconMap[amenity.icon] || Sparkles;
              return (
                <Card key={amenity.id} className="border-black/5 card-hover bg-white">
                  <CardContent className="p-5">
                    <div className="w-12 h-12 rounded-2xl bg-[rgba(148,242,127,0.15)] flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-[rgb(13,121,22)]" />
                    </div>
                    <h3 className="font-semibold text-[rgb(0,55,32)] mb-2">{amenity.name}</h3>
                    <p className="text-sm text-[rgb(131,146,140)] leading-relaxed">
                      {amenity.description}
                    </p>
                    <div className="mt-3 pt-3 border-t border-black/5">
                      <span className="inline-flex items-center gap-1 text-xs text-[rgb(13,121,22)] font-medium capitalize">
                        <Check className="w-3 h-3" />
                        {amenity.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Included Benefits */}
      <section className="section-padding accent-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">What's Always Included</h2>
            <p className="body-medium text-[rgb(131,146,140)] max-w-2xl mx-auto">
              These essential amenities are standard across all our rooms and accommodations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Wifi, title: 'High-Speed WiFi' },
              { icon: Droplets, title: '24/7 Hot Water' },
              { icon: Sparkles, title: 'Daily Cleaning' },
              { icon: Zap, title: 'Power Backup' },
              { icon: Shield, title: 'CCTV Security' },
              { icon: Wind, title: 'Air Conditioning' },
              { icon: Car, title: 'Free Parking' },
              { icon: Heart, title: 'First Aid' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-black/5">
                <div className="w-10 h-10 rounded-full bg-[rgba(148,242,127,0.15)] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[rgb(13,121,22)]" />
                </div>
                <span className="text-sm font-medium text-[rgb(0,55,32)]">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
