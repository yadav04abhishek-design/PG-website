import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, Home, Bed, Coffee, TreePine, Grid, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/mock';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';

const categories = [
  { id: 'all', name: 'All Photos', icon: Grid },
  { id: 'rooms', name: 'Rooms', icon: Bed },
  { id: 'amenities', name: 'Amenities', icon: Coffee },
  { id: 'exterior', name: 'Exterior', icon: TreePine }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setLightboxIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setLightboxIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="pt-24">
      {/* Page Header */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[rgb(131,146,140)] mb-6">
            <Link to="/" className="hover:text-[rgb(0,55,32)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[rgb(0,55,32)]">Gallery</span>
          </nav>
          
          <h1 className="heading-1 mb-4">Photo Gallery</h1>
          <p className="body-large text-[rgb(131,146,140)] max-w-2xl">
            Take a virtual tour of Casa Garden. Browse through our rooms, amenities, 
            and the beautiful surroundings at our properties.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
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
                    className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-[#8FEC78] data-[state=active]:to-[#81DD67] data-[state=active]:text-white whitespace-nowrap gap-2"
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Results Count */}
          <p className="text-sm text-[rgb(131,146,140)] mb-6">
            Showing {filteredImages.length} photos
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, idx) => (
              <button
                key={image.id}
                onClick={() => openLightbox(idx)}
                className="group aspect-square rounded-xl overflow-hidden bg-[rgba(148,242,127,0.1)] border border-black/5 relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8FEC78] focus:ring-offset-2"
              >
                {/* Placeholder Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[rgba(148,242,127,0.2)] to-[rgba(148,242,127,0.05)]">
                  <Home className="w-10 h-10 text-[rgb(13,121,22)] opacity-30 mb-2" />
                  <span className="text-xs text-[rgb(131,146,140)] text-center px-2">{image.alt}</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Image className="w-5 h-5 text-[rgb(0,55,32)]" />
                  </div>
                </div>

                {/* Category Badge */}
                <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 text-[rgb(0,55,32)] text-xs font-medium rounded-full capitalize">
                  {image.category}
                </span>
              </button>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Image className="w-16 h-16 text-[rgb(131,146,140)] mx-auto mb-4 opacity-40" />
              <h3 className="heading-3 mb-2">No photos found</h3>
              <p className="text-[rgb(131,146,140)]">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <button 
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="max-w-4xl max-h-[80vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder for actual image */}
            <div className="aspect-video bg-[rgba(148,242,127,0.1)] rounded-xl flex flex-col items-center justify-center min-w-[300px] md:min-w-[600px]">
              <Home className="w-20 h-20 text-[rgb(13,121,22)] opacity-30 mb-4" />
              <p className="text-white text-center px-4">{filteredImages[lightboxIndex]?.alt}</p>
              <span className="mt-2 text-white/60 text-sm capitalize">
                {filteredImages[lightboxIndex]?.category}
              </span>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full text-white text-sm">
            {lightboxIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
