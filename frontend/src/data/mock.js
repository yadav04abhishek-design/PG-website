// Casa Garden – Premium Homestay Mock Data
// Structure preserved | Content elevated for luxury & conversions

export const siteInfo = {
  name: "Casa Garden",
  tagline: "A Calm, Premium Homestay Surrounded by Nature",
  description:
    "Casa Garden is a thoughtfully curated luxury homestay offering peace, privacy, and comfort. Designed for families, couples, and long-stay guests who value cleanliness, safety, and a calm environment.",
  phone: "+91 94583 85762",
  whatsapp: "+91 94583 85762",
  email: "stay@casagarden.in",
  locations: {
    dehradun: {
      name: "Casa Garden Homestay – Dehradun",
      address:
        "Aamwala Uparla, Near Khalanga War Memorial, Dehradun, Uttarakhand – 248008",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110338.50977012!2d77.97297!3d30.3164945",
    },
    gurgaon: {
      name: "Casa Garden Premium PG – Gurgaon",
      address:
        "Sector 38 / 46 / 51 Cluster, Near HUDA City Centre Metro, Gurugram, Haryana",
      mapEmbed:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883!2d76.9186!3d28.4594965",
    },
  },
};

export const rooms = [
  {
    id: 1,
    name: "Sunbeam Family Room",
    location: "Dehradun",
    capacity: "Up to 4 Guests",
    size: "350 sq ft",
    price: 2800,
    priceUnit: "night",
    description:
      "A bright and spacious family room designed for comfort and relaxation. Ideal for families seeking peace, featuring large windows, premium bedding, and a calm garden-facing ambience.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Smart TV",
      "Attached Bathroom",
      "Balcony",
      "Garden View",
    ],
    image: "/images/room-1.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Comfort Double Room",
    location: "Dehradun",
    capacity: "2 Guests",
    size: "250 sq ft",
    price: 2000,
    priceUnit: "night",
    description:
      "Perfect for couples and solo travelers, this room offers a quiet retreat with elegant interiors, premium linen, and a soothing atmosphere for restful stays.",
    amenities: ["AC", "High-Speed WiFi", "Smart TV", "Attached Bathroom"],
    image: "/images/room-2.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Premium Single PG Room",
    location: "Gurgaon",
    capacity: "Single Occupancy",
    size: "160 sq ft",
    price: 14000,
    priceUnit: "month",
    description:
      "A thoughtfully designed private room for professionals who value privacy, cleanliness, and a disciplined living environment.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Attached Bathroom",
      "Housekeeping",
      "Study Desk",
    ],
    image: "/images/room-3.jpg",
    featured: true,
  },
  {
    id: 4,
    name: "Premium Double Sharing PG",
    location: "Gurgaon",
    capacity: "2 Guests",
    size: "220 sq ft",
    price: 9000,
    priceUnit: "month",
    description:
      "An affordable yet premium double-sharing option for professionals, maintaining Casa Garden’s standards of hygiene, safety, and calm living.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Common Bathroom",
      "Housekeeping",
    ],
    image: "/images/room-4.jpg",
    featured: false,
  },
  {
    id: 5,
    name: "Garden View Premium Suite",
    location: "Dehradun",
    capacity: "Up to 4 Guests",
    size: "500 sq ft",
    price: 4200,
    priceUnit: "night",
    description:
      "Our most exclusive accommodation featuring a separate living space, refined interiors, and serene garden views. Ideal for longer, indulgent stays.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Smart TV",
      "Attached Bathroom",
      "Living Area",
      "Mini Kitchen",
      "Garden View",
    ],
    image: "/images/room-5.jpg",
    featured: true,
  },
  {
    id: 6,
    name: "Executive PG Room",
    location: "Gurgaon",
    capacity: "Single Occupancy",
    size: "180 sq ft",
    price: 16000,
    priceUnit: "month",
    description:
      "A premium executive room with enhanced privacy, dedicated workspace, and daily housekeeping—ideal for senior professionals.",
    amenities: [
      "AC",
      "High-Speed WiFi",
      "Attached Bathroom",
      "Study Desk",
      "Wardrobe",
      "Daily Housekeeping",
    ],
    image: "/images/room-6.jpg",
    featured: false,
  },
];

export const amenities = [
  { id: 1, name: "High-Speed WiFi", description: "Reliable internet for work and entertainment", icon: "Wifi", category: "essential" },
  { id: 2, name: "Climate-Controlled Rooms", description: "Comfortable AC rooms throughout the year", icon: "Wind", category: "essential" },
  { id: 3, name: "24/7 Hot Water", description: "Continuous hot water supply", icon: "Droplets", category: "essential" },
  { id: 4, name: "Daily Housekeeping", description: "Clean, hygienic rooms every day", icon: "Sparkles", category: "essential" },
  { id: 5, name: "Power Backup", description: "Uninterrupted power supply", icon: "Zap", category: "essential" },
  { id: 6, name: "CCTV Security", description: "Round-the-clock security surveillance", icon: "Shield", category: "safety" },
  { id: 7, name: "Garden Sit-Out", description: "Peaceful green spaces to relax", icon: "TreePine", category: "leisure" },
  { id: 8, name: "Common Kitchen Access", description: "Available for long-stay guests", icon: "ChefHat", category: "convenience" },
  { id: 9, name: "Laundry Support", description: "Laundry facilities available", icon: "Shirt", category: "convenience" },
  { id: 10, name: "Parking Facility", description: "Safe parking within premises", icon: "Car", category: "convenience" },
];

export const houseRules = [
  { id: 1, rule: "No Smoking", description: "Smoking is strictly prohibited inside rooms and common areas.", icon: "CigaretteOff", important: true },
  { id: 2, rule: "No Alcohol", description: "Alcohol consumption is not permitted to maintain a family-friendly environment.", icon: "Wine", important: true },
  { id: 3, rule: "No Parties or Loud Music", description: "We maintain a peaceful atmosphere for all guests.", icon: "VolumeX", important: true },
  { id: 4, rule: "Valid Government ID", description: "Mandatory ID verification at check-in.", icon: "IdCard", important: true },
  { id: 5, rule: "Quiet Hours", description: "Silence requested between 10 PM and 7 AM.", icon: "Moon", important: false },
];

export const whyChooseUs = [
  { id: 1, title: "Calm & Disciplined Living", description: "No parties, no chaos—only peace.", icon: "Leaf" },
  { id: 2, title: "Premium Cleanliness", description: "Hotel-grade hygiene standards.", icon: "Sparkles" },
  { id: 3, title: "Safe & Secure", description: "CCTV, verified guests, controlled access.", icon: "ShieldCheck" },
  { id: 4, title: "Ideal for Families & Long Stays", description: "Comfort designed for longer living.", icon: "Home" },
  { id: 5, title: "Prime Locations", description: "Close to nature, city, and essentials.", icon: "MapPin" },
  { id: 6, title: "Transparent Pricing", description: "No hidden costs. No surprises.", icon: "BadgeIndianRupee" },
];
