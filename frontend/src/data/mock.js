// ================================
// SITE INFO
// ================================
export const siteInfo = {
  name: "Stayplace 101",
  tagline: "Premium PG in Gurgaon for Working Professionals",
  description:
    "Stayplace 101 offers premium, fully furnished PG accommodation in Sector 38, Sector 46 and Sector 51, Gurgaon. Designed for professionals seeking comfort, privacy and a hassle-free stay.",
  phone: "+91 9871728541",
  whatsapp: "+91 9625451340",
  email: "info@stayplace101.com",
  locations: {
    dehradun: {
      name: "PG in Gurgaon",
      address:
        "Sector 38, Sector 46 & Sector 51, Gurgaon, Haryana",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883!2d76.9186!3d28.4594965"
    },
    gurgaon: {
      name: "PG in Gurgaon",
      address:
        "Sector 38, Sector 46 & Sector 51, Gurgaon, Haryana",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883!2d76.9186!3d28.4594965"
    }
  }
};

// ================================
// ROOMS (STRUCTURE UNCHANGED)
// ================================
export const rooms = [
  {
    id: 1,
    name: "Single Sharing PG Room",
    location: "Gurgaon",
    capacity: "1 Guest",
    size: "160 sq ft",
    price: 15000,
    priceUnit: "month",
    description:
      "Premium single sharing PG room for working professionals with high-speed WiFi, power backup and housekeeping.",
    amenities: ["AC", "WiFi", "TV", "Attached Bathroom"],
    image: "/images/room-1.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Double Sharing PG Room",
    location: "Gurgaon",
    capacity: "2 Guests",
    size: "200 sq ft",
    price: 9000,
    priceUnit: "month",
    description:
      "Comfortable double sharing PG accommodation offering premium facilities and hassle-free living.",
    amenities: ["AC", "WiFi", "TV", "Attached Bathroom"],
    image: "/images/room-2.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Executive Single PG",
    location: "Gurgaon",
    capacity: "1 Guest",
    size: "180 sq ft",
    price: 18000,
    priceUnit: "month",
    description:
      "High-end executive PG room with modern interiors and a calm professional environment.",
    amenities: ["AC", "WiFi", "TV", "Attached Bathroom"],
    image: "/images/room-3.jpg",
    featured: false
  }
];

// ================================
// AMENITIES (UNCHANGED STRUCTURE)
// ================================
export const amenities = [
  { id: 1, name: "Free WiFi", description: "High-speed internet", icon: "Wifi", category: "essential" },
  { id: 2, name: "Air Conditioning", description: "Climate controlled rooms", icon: "Wind", category: "essential" },
  { id: 3, name: "24/7 Power Backup", description: "Uninterrupted power supply", icon: "Zap", category: "essential" },
  { id: 4, name: "Daily Housekeeping", description: "Clean and hygienic living", icon: "Sparkles", category: "essential" },
  { id: 5, name: "Parking Available", description: "Two-wheeler & car parking", icon: "Car", category: "convenience" },
  { id: 6, name: "CCTV Security", description: "24/7 surveillance", icon: "Shield", category: "safety" }
];

// ================================
// HOUSE RULES (TEXT EDIT ONLY)
// ================================
export const houseRules = [
  {
    id: 1,
    rule: "Parking Available",
    description:
      "Convenient parking facilities available for residents.",
    icon: "Car",
    important: true
  },
  {
    id: 2,
    rule: "Hassle-Free Stay",
    description:
      "Smooth onboarding, clear policies and responsive management.",
    icon: "Sparkles",
    important: true
  },
  {
    id: 3,
    rule: "Premium Living Standards",
    description:
      "Well-maintained, clean and professionally managed PG accommodation.",
    icon: "Shield",
    important: true
  },
  {
    id: 4,
    rule: "Professional Environment",
    description:
      "Ideal for working professionals seeking comfort and privacy.",
    icon: "Users",
    important: true
  }
];

// ================================
// ATTRACTIONS (LEFT AS-IS FOR BUILD SAFETY)
// ================================
export const attractions = [
  { id: 1, name: "Cyber Hub", distance: "5 km", description: "Corporate and dining hub", location: "Gurgaon" },
  { id: 2, name: "HUDA City Centre", distance: "4 km", description: "Metro connectivity", location: "Gurgaon" }
];

// ================================
// REVIEWS (TEXT EDIT ONLY)
// ================================
export const reviews = [
  {
    id: 1,
    name: "Amit Kumar",
    location: "Gurgaon",
    rating: 5,
    review:
      "Excellent PG with premium facilities. Clean rooms, fast WiFi and very professional management.",
    date: "March 2025",
    stayType: "Working Professional"
  },
  {
    id: 2,
    name: "Neha Verma",
    location: "Gurgaon",
    rating: 5,
    review:
      "Very comfortable and hassle-free stay. Parking and cleanliness are a big plus.",
    date: "February 2025",
    stayType: "Long-Term Stay"
  }
];

// ================================
// WHY CHOOSE US (STRUCTURE SAME)
// ================================
export const whyChooseUs = [
  {
    id: 1,
    title: "Prime Gurgaon Locations",
    description: "Located in Sector 38, 46 and 51 with excellent connectivity.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "High-End PG Living",
    description: "Premium interiors and professional management.",
    icon: "Home"
  },
  {
    id: 3,
    title: "Safe & Secure",
    description: "CCTV surveillance and controlled access.",
    icon: "Shield"
  },
  {
    id: 4,
    title: "Hassle-Free Experience",
    description: "Designed for working professionals.",
    icon: "Sparkles"
  }
];

// ================================
// GALLERY (LEFT AS-IS FOR SAFETY)
// ================================
export const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "PG Room", category: "rooms" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Common Area", category: "amenities" }
];

// ================================
// NAVIGATION (UNCHANGED)
// ================================
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Amenities", path: "/amenities" },
  { name: "Locations", path: "/locations" },
  { name: "House Rules", path: "/house-rules" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];
