// ================================
// SITE INFO
// ================================
export const siteInfo = {
  name: "Stayplace 101",
  tagline: "Luxury PG in Gurgaon for Working Professionals",
  description:
    "Stayplace 101 provides high-end, fully furnished PG accommodation in Gurgaon. Available in Sector 38, Sector 46 and Sector 51. Designed for professionals seeking comfort, privacy and a hassle-free stay.",
  phone: "+91 9871728541",
  whatsapp: "+91 9625451340",
  email: "info@stayplace101.com",
  locations: {
    gurgaon: {
      name: "PG in Gurgaon",
      address:
        "Stayplace 101 – Premium PG in Sector 38, Sector 46 & Sector 51, Gurgaon, Haryana",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883!2d76.9186!3d28.4594965"
    }
  }
};

// ================================
// ROOMS & PRICING (PG ONLY)
// ================================
export const rooms = [
  {
    id: 1,
    name: "Single Sharing Luxury PG Room",
    location: "Gurgaon",
    capacity: "1 Person",
    size: "150–180 sq ft",
    price: 15000,
    priceUnit: "month",
    description:
      "Premium single occupancy PG room with modern interiors, high-speed WiFi, power backup and daily housekeeping. Ideal for working professionals.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Attached Bathroom",
      "Daily Housekeeping",
      "Power Backup"
    ],
    image: "/images/pg-single.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Double Sharing Premium PG Room",
    location: "Gurgaon",
    capacity: "2 Persons",
    size: "200–220 sq ft",
    price: 9000,
    priceUnit: "month",
    description:
      "Comfortable double sharing PG accommodation offering hygiene, comfort and affordability with premium facilities.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Housekeeping",
      "RO Drinking Water",
      "Power Backup"
    ],
    image: "/images/pg-double.jpg",
    featured: true
  }
];

// ================================
// AMENITIES (LUXURY PG)
// ================================
export const amenities = [
  { id: 1, name: "Fully Furnished Rooms", icon: "Home" },
  { id: 2, name: "High-Speed WiFi", icon: "Wifi" },
  { id: 3, name: "Power Backup", icon: "Zap" },
  { id: 4, name: "Daily Housekeeping", icon: "Sparkles" },
  { id: 5, name: "RO Drinking Water", icon: "Droplets" },
  { id: 6, name: "Washing Machine", icon: "Shirt" },
  { id: 7, name: "CCTV Security", icon: "Shield" },
  { id: 8, name: "Parking Available", icon: "Car" }
];

// ================================
// HOUSE RULES / HIGHLIGHTS (PREMIUM)
// ================================
export const houseRules = [
  {
    id: 1,
    rule: "Parking Available",
    description:
      "Dedicated parking for two-wheelers and cars is available for residents (subject to availability).",
    important: true
  },
  {
    id: 2,
    rule: "Hassle-Free Stay",
    description:
      "Smooth onboarding, clear policies and responsive management ensure a stress-free living experience.",
    important: true
  },
  {
    id: 3,
    rule: "High-End Luxury Living",
    description:
      "Well-maintained spaces with premium furnishings designed for modern professional living.",
    important: true
  },
  {
    id: 4,
    rule: "Professional Environment",
    description:
      "A calm and respectful atmosphere preferred by working professionals.",
    important: true
  },
  {
    id: 5,
    rule: "Quality Services & Maintenance",
    description:
      "Reliable utilities, consistent housekeeping and regular maintenance.",
    important: true
  }
];

// ================================
// WHY CHOOSE STAYPLACE 101
// ================================
export const whyChooseUs = [
  {
    id: 1,
    title: "Prime Gurgaon Locations",
    description:
      "PGs located in Sector 38, 46 and 51 with excellent connectivity to offices and markets.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Luxury PG Experience",
    description:
      "Modern interiors, premium amenities and professional management.",
    icon: "Home"
  },
  {
    id: 3,
    title: "Safe & Secure Living",
    description:
      "24/7 CCTV surveillance and controlled access for peace of mind.",
    icon: "Shield"
  },
  {
    id: 4,
    title: "Designed for Professionals",
    description:
      "Perfect for corporate employees and long-term residents.",
    icon: "Users"
  },
  {
    id: 5,
    title: "Transparent Monthly Rent",
    description:
      "Clear pricing with no hidden charges.",
    icon: "BadgeIndianRupee"
  }
];

// ================================
// REVIEWS (PG ONLY)
// ================================
export const reviews = [
  {
    id: 1,
    name: "Amit Kumar",
    location: "Sector 46, Gurgaon",
    rating: 5,
    review:
      "Excellent PG with premium facilities. Clean rooms, fast WiFi and very professional management.",
    date: "March 2025"
  },
  {
    id: 2,
    name: "Neha Verma",
    location: "Sector 38, Gurgaon",
    rating: 5,
    review:
      "Stayed for more than 6 months. Very comfortable and completely hassle-free experience.",
    date: "February 2025"
  },
  {
    id: 3,
    name: "Rohit Singh",
    location: "Sector 51, Gurgaon",
    rating: 4,
    review:
      "Good value for money with a luxury feel. Parking and housekeeping are big positives.",
    date: "January 2025"
  }
];

// ================================
// NAVIGATION
// ================================
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms & Rent", path: "/rooms" },
  { name: "Amenities", path: "/amenities" },
  { name: "Locations", path: "/locations" },
  { name: "Why Stayplace 101", path: "/why-us" },
  { name: "Contact", path: "/contact" }
];
