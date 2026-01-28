// ================================
// SITE INFO
// ================================
export const siteInfo = {
  name: "Stayplace 101",
  tagline: "Luxury PG in Gurgaon for Working Professionals",
  description:
    "Stayplace 101 offers high-end, fully furnished luxury PG accommodation in Gurgaon. Located in Sector 38, Sector 46 and Sector 51, designed for professionals seeking comfort, privacy and a hassle-free stay.",
  phone: "+91 9871728541",
  whatsapp: "+91 9625451340",
  email: "info@stayplace101.com",
  locations: {
    gurgaon: {
      name: "PG in Gurgaon",
      address:
        "Stayplace 101 – Premium PG accommodation in Sector 38, Sector 46 & Sector 51, Gurgaon, Haryana",
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
    price: "₹14,000 – ₹18,000",
    priceUnit: "month",
    description:
      "Premium single-occupancy PG room with modern interiors, high-speed WiFi, power backup and professional housekeeping. Ideal for corporate professionals.",
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
    price: "₹9,000 – ₹12,000",
    priceUnit: "month",
    description:
      "Well-planned double sharing PG accommodation offering comfort, hygiene and affordability without compromising on quality.",
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
      "Dedicated two-wheeler and car parking available for residents, subject to availability.",
    important: true
  },
  {
    id: 2,
    rule: "Hassle-Free Stay",
    description:
      "Smooth onboarding, transparent policies and responsive management ensure a stress-free living experience.",
    important: true
  },
  {
    id: 3,
    rule: "High-End Luxury Living",
    description:
      "Thoughtfully designed spaces with premium furnishings that reflect modern, high-end PG living.",
    important: true
  },
  {
    id: 4,
    rule: "Professional Environment",
    description:
      "A refined living atmosphere preferred by working professionals who value comfort and privacy.",
    important: true
  },
  {
    id: 5,
    rule: "Quality Services & Maintenance",
    description:
      "Reliable utilities, consistent housekeeping and well-maintained facilities for long-term comfort.",
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
      "Strategically located PGs in Sector 38, 46 and 51 with excellent connectivity to offices and markets.",
    icon: "MapPin"
  },
  {
    id: 2,
    title: "Luxury PG Experience",
    description:
      "Premium interiors, modern amenities and professional management.",
    icon: "Star"
  },
  {
    id: 3,
    title: "Safe & Secure Living",
    description:
      "24/7 CCTV surveillance and controlled access for complete peace of mind.",
    icon: "ShieldCheck"
  },
  {
    id: 4,
    title: "Designed for Professionals",
    description:
      "Ideal for corporate employees seeking a calm, comfortable and long-term stay.",
    icon: "Briefcase"
  },
  {
    id: 5,
    title: "Transparent & Affordable Pricing",
    description:
      "Clear monthly rent with no hidden charges.",
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
      "Stayed for 7 months. Very comfortable and hassle-free experience. Highly recommended.",
    date: "February 2025"
  },
  {
    id: 3,
    name: "Rohit Singh",
    location: "Sector 51, Gurgaon",
    rating: 4,
    review:
      "Good value for money with luxury feel. Parking availability is a big plus.",
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
