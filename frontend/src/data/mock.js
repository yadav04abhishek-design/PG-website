// Casa Garden - Mock Data

export const siteInfo = {
  name: "Casa Garden",
  tagline: "Peaceful Stays for Families & Long-Term Guests",
  description: "Experience comfort, cleanliness, and safety at Casa Garden - your home away from home in Dehradun and Gurgaon.",
  phone: "+91 98765 43210",
  whatsapp: "+91 98765 43210",
  email: "stay@casagarden.in",
  locations: {
    dehradun: {
      name: "Dehradun Homestay",
      address: "123, Rajpur Road, Near Khalanga War Memorial, Dehradun, Uttarakhand - 248001",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110338.50977012!2d77.97297!3d30.3164945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1234567890"
    },
    gurgaon: {
      name: "Gurgaon PG",
      address: "456, Sector 45, Near HUDA City Centre Metro, Gurgaon, Haryana - 122003",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883!2d76.9186!3d28.4594965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurgaon%2C%20Haryana!5e0!3m2!1sen!2sin!4v1234567890"
    }
  }
};

export const rooms = [
  {
    id: 1,
    name: "Deluxe Family Room",
    location: "Dehradun",
    capacity: "4 Guests",
    size: "350 sq ft",
    price: 2500,
    priceUnit: "night",
    description: "Spacious room with mountain views, perfect for families. Features attached bathroom, TV, and private balcony.",
    amenities: ["AC", "WiFi", "TV", "Attached Bathroom", "Balcony", "Mountain View"],
    image: "/images/room-1.jpg",
    featured: true
  },
  {
    id: 2,
    name: "Standard Double Room",
    location: "Dehradun",
    capacity: "2 Guests",
    size: "250 sq ft",
    price: 1800,
    priceUnit: "night",
    description: "Comfortable room ideal for couples or solo travelers. Clean and well-maintained with all essential amenities.",
    amenities: ["AC", "WiFi", "TV", "Attached Bathroom"],
    image: "/images/room-2.jpg",
    featured: true
  },
  {
    id: 3,
    name: "Single PG Room",
    location: "Gurgaon",
    capacity: "1 Guest",
    size: "150 sq ft",
    price: 12000,
    priceUnit: "month",
    description: "Perfect for working professionals. Includes housekeeping, WiFi, and access to common areas.",
    amenities: ["AC", "WiFi", "Attached Bathroom", "Housekeeping"],
    image: "/images/room-3.jpg",
    featured: true
  },
  {
    id: 4,
    name: "Double Sharing PG",
    location: "Gurgaon",
    capacity: "2 Guests",
    size: "200 sq ft",
    price: 8000,
    priceUnit: "month",
    description: "Affordable double-sharing option for professionals. Includes all utilities and weekly housekeeping.",
    amenities: ["AC", "WiFi", "Common Bathroom", "Housekeeping"],
    image: "/images/room-4.jpg",
    featured: false
  },
  {
    id: 5,
    name: "Premium Suite",
    location: "Dehradun",
    capacity: "4 Guests",
    size: "500 sq ft",
    price: 4000,
    priceUnit: "night",
    description: "Our finest accommodation with separate living area, premium furnishings, and stunning valley views.",
    amenities: ["AC", "WiFi", "Smart TV", "Attached Bathroom", "Living Area", "Valley View", "Mini Kitchen"],
    image: "/images/room-5.jpg",
    featured: true
  },
  {
    id: 6,
    name: "Executive PG Room",
    location: "Gurgaon",
    capacity: "1 Guest",
    size: "180 sq ft",
    price: 15000,
    priceUnit: "month",
    description: "Premium single occupancy room with study desk, wardrobe, and daily housekeeping.",
    amenities: ["AC", "WiFi", "Attached Bathroom", "Study Desk", "Wardrobe", "Daily Housekeeping"],
    image: "/images/room-6.jpg",
    featured: false
  }
];

export const amenities = [
  { id: 1, name: "Free WiFi", description: "High-speed internet throughout the property", icon: "Wifi", category: "essential" },
  { id: 2, name: "Air Conditioning", description: "Climate-controlled rooms for your comfort", icon: "Wind", category: "essential" },
  { id: 3, name: "24/7 Hot Water", description: "Round-the-clock hot water supply", icon: "Droplets", category: "essential" },
  { id: 4, name: "Daily Housekeeping", description: "Professional cleaning service", icon: "Sparkles", category: "essential" },
  { id: 5, name: "Secure Parking", description: "Safe parking space for vehicles", icon: "Car", category: "convenience" },
  { id: 6, name: "Power Backup", description: "Uninterrupted power supply", icon: "Zap", category: "essential" },
  { id: 7, name: "CCTV Security", description: "24/7 surveillance for your safety", icon: "Shield", category: "safety" },
  { id: 8, name: "Laundry Service", description: "Wash and iron service available", icon: "Shirt", category: "convenience" },
  { id: 9, name: "Garden & Sit-out", description: "Peaceful outdoor spaces", icon: "TreePine", category: "leisure" },
  { id: 10, name: "Kitchen Access", description: "Shared kitchen facility (select rooms)", icon: "ChefHat", category: "convenience" },
  { id: 11, name: "Smart TV", description: "Entertainment in select rooms", icon: "Tv", category: "leisure" },
  { id: 12, name: "First Aid Kit", description: "Emergency medical supplies", icon: "Heart", category: "safety" },
  { id: 13, name: "Fire Safety", description: "Fire extinguishers and smoke detectors", icon: "Flame", category: "safety" },
  { id: 14, name: "Reception Desk", description: "Assistance during business hours", icon: "User", category: "service" },
  { id: 15, name: "Luggage Storage", description: "Safe storage for your belongings", icon: "Luggage", category: "convenience" },
  { id: 16, name: "Wake-up Service", description: "Morning wake-up calls on request", icon: "AlarmClock", category: "service" }
];

export const houseRules = [
  { id: 1, rule: "No Smoking", description: "Smoking is strictly prohibited inside rooms and common areas. Designated outdoor area available.", icon: "CigaretteOff", important: true },
  { id: 2, rule: "No Alcohol", description: "Consumption of alcohol is not permitted on the premises. We maintain a family-friendly environment.", icon: "Wine", important: true },
  { id: 3, rule: "No Loud Music", description: "Please maintain a peaceful environment. Loud music and parties are not allowed.", icon: "VolumeX", important: true },
  { id: 4, rule: "No Parties", description: "Group gatherings and parties are not permitted to ensure peace for all guests.", icon: "PartyPopper", important: true },
  { id: 5, rule: "Valid ID Required", description: "All guests must provide valid government-issued ID at check-in.", icon: "IdCard", important: true },
  { id: 6, rule: "Check-in: 12 PM", description: "Standard check-in time is 12:00 PM. Early check-in subject to availability.", icon: "Clock", important: false },
  { id: 7, rule: "Check-out: 11 AM", description: "Please vacate by 11:00 AM. Late check-out available on request.", icon: "LogOut", important: false },
  { id: 8, rule: "Visitor Policy", description: "Visitors allowed in common areas only. No overnight visitors without prior approval.", icon: "Users", important: false },
  { id: 9, rule: "Pet Policy", description: "Pets are not allowed to ensure comfort for all guests.", icon: "PawPrint", important: false },
  { id: 10, rule: "Noise Hours", description: "Please maintain silence between 10 PM and 7 AM.", icon: "Moon", important: false }
];

export const attractions = [
  { id: 1, name: "Khalanga War Memorial", distance: "2 km", description: "Historic memorial with panoramic city views", location: "Dehradun" },
  { id: 2, name: "Maldevta", distance: "8 km", description: "Scenic river spot perfect for picnics", location: "Dehradun" },
  { id: 3, name: "Mussoorie", distance: "35 km", description: "Queen of Hills - popular hill station", location: "Dehradun" },
  { id: 4, name: "Rishikesh", distance: "45 km", description: "Yoga capital and adventure sports hub", location: "Dehradun" },
  { id: 5, name: "Robber's Cave", distance: "10 km", description: "Natural cave formation with flowing stream", location: "Dehradun" },
  { id: 6, name: "Sahastradhara", distance: "12 km", description: "Therapeutic sulphur water springs", location: "Dehradun" },
  { id: 7, name: "Cyber Hub", distance: "5 km", description: "Premium dining and entertainment hub", location: "Gurgaon" },
  { id: 8, name: "Kingdom of Dreams", distance: "8 km", description: "Live entertainment and cultural shows", location: "Gurgaon" },
  { id: 9, name: "Ambience Mall", distance: "4 km", description: "One of India's largest shopping malls", location: "Gurgaon" },
  { id: 10, name: "Leisure Valley Park", distance: "6 km", description: "Beautiful urban park for morning walks", location: "Gurgaon" }
];

export const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review: "Stayed with my family for a week. The place is exactly as described - clean, peaceful, and safe. The hosts are wonderful and very accommodating. Will definitely come back!",
    date: "March 2025",
    stayType: "Family Vacation"
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Bangalore",
    rating: 5,
    review: "Been staying at the Gurgaon PG for 3 months now. Excellent facilities, very clean, and the location is perfect for my office commute. Highly recommended for working professionals.",
    date: "February 2025",
    stayType: "Long-term PG"
  },
  {
    id: 3,
    name: "Meera Patel",
    location: "Mumbai",
    rating: 5,
    review: "The Dehradun homestay is a gem! Quiet location, beautiful surroundings, and the staff goes above and beyond. The no-party policy ensures a truly relaxing experience.",
    date: "January 2025",
    stayType: "Solo Trip"
  },
  {
    id: 4,
    name: "Amit Kumar",
    location: "Gurgaon",
    rating: 4,
    review: "Great PG accommodation with all necessary amenities. The WiFi is fast, rooms are well-maintained, and the food quality is good. Value for money!",
    date: "December 2024",
    stayType: "Working Professional"
  },
  {
    id: 5,
    name: "Sunita Reddy",
    location: "Hyderabad",
    rating: 5,
    review: "Perfect getaway spot in Dehradun! We celebrated our anniversary here and the privacy and tranquility were exactly what we needed. Thank you Casa Garden!",
    date: "November 2024",
    stayType: "Couple Retreat"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Peaceful Environment",
    description: "No parties, no loud music - just tranquil spaces for rest and rejuvenation.",
    icon: "Leaf"
  },
  {
    id: 2,
    title: "Spotless Hygiene",
    description: "Daily cleaning and sanitization to ensure your health and comfort.",
    icon: "Sparkles"
  },
  {
    id: 3,
    title: "Complete Safety",
    description: "24/7 CCTV surveillance, secure entry, and verified guest policy.",
    icon: "ShieldCheck"
  },
  {
    id: 4,
    title: "Prime Location",
    description: "Conveniently located near markets, transport, and attractions.",
    icon: "MapPin"
  },
  {
    id: 5,
    title: "Family Friendly",
    description: "Welcoming atmosphere ideal for families and long-stay guests.",
    icon: "Home"
  },
  {
    id: 6,
    title: "Affordable Rates",
    description: "Competitive pricing with no hidden charges or surprises.",
    icon: "BadgeIndianRupee"
  }
];

export const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Casa Garden Exterior View", category: "exterior" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Deluxe Family Room", category: "rooms" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Garden Sitting Area", category: "exterior" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Standard Room Interior", category: "rooms" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Common Dining Area", category: "amenities" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Attached Bathroom", category: "rooms" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Reception Area", category: "amenities" },
  { id: 8, src: "/images/gallery-8.jpg", alt: "Mountain View from Balcony", category: "exterior" },
  { id: 9, src: "/images/gallery-9.jpg", alt: "PG Room Gurgaon", category: "rooms" },
  { id: 10, src: "/images/gallery-10.jpg", alt: "Kitchen Facility", category: "amenities" },
  { id: 11, src: "/images/gallery-11.jpg", alt: "Parking Area", category: "exterior" },
  { id: 12, src: "/images/gallery-12.jpg", alt: "Premium Suite", category: "rooms" }
];

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Amenities", path: "/amenities" },
  { name: "Locations", path: "/locations" },
  { name: "House Rules", path: "/house-rules" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" }
];
