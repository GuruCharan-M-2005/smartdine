export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  price: number;
  moods: string[];
  features: string[];
  tags: string[];
  description: string;
  image: string;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Dragon Spice House",
    cuisine: "Chinese",
    rating: 4.7,
    price: 150,
    moods: ["spicy", "bold", "street"],
    features: ["extra sauce", "takeaway"],
    tags: ["chili lovers", "fast service"],
    description: "Hot Sichuan-style dishes with authentic flavors.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
  },
  {
    id: "2",
    name: "Sakura Garden",
    cuisine: "Japanese",
    rating: 4.9,
    price: 350,
    moods: ["cozy", "romantic", "premium"],
    features: ["omakase", "sake pairing"],
    tags: ["chef's choice", "date night"],
    description: "Authentic omakase experience with fresh daily imports from Tokyo.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop"
  },
  {
    id: "3",
    name: "Fuego Cantina",
    cuisine: "Mexican",
    rating: 4.7,
    price: 120,
    moods: ["spicy", "fun", "vibrant"],
    features: ["craft margaritas", "live music"],
    tags: ["party vibes", "spicy lovers"],
    description: "Modern Mexican street food with a spicy twist.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop"
  },
  {
    id: "4",
    name: "The Ember Room",
    cuisine: "American BBQ",
    rating: 4.8,
    price: 180,
    moods: ["cozy", "rustic", "bold"],
    features: ["slow smoked", "craft beer"],
    tags: ["meat lovers", "comfort food"],
    description: "Slow-smoked meats over hickory wood with house-made sauces.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop"
  },
  {
    id: "5",
    name: "Côte d'Azur",
    cuisine: "French",
    rating: 4.9,
    price: 450,
    moods: ["romantic", "elegant", "premium"],
    features: ["wine pairing", "private dining"],
    tags: ["fine dining", "special occasion"],
    description: "Elegant French bistro with Mediterranean influences.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
  },
  {
    id: "6",
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.6,
    price: 130,
    moods: ["spicy", "aromatic", "warm"],
    features: ["tandoori", "vegetarian options"],
    tags: ["curry lovers", "vegetarian friendly"],
    description: "Traditional North Indian cuisine with tandoori specialties.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop"
  },
  {
    id: "7",
    name: "Noodle Dynasty",
    cuisine: "Chinese",
    rating: 4.5,
    price: 80,
    moods: ["casual", "quick", "authentic"],
    features: ["hand-pulled noodles", "dim sum"],
    tags: ["fast service", "budget friendly"],
    description: "Hand-pulled noodles and dim sum in an authentic atmosphere.",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop"
  },
  {
    id: "8",
    name: "Olive & Thyme",
    cuisine: "Mediterranean",
    rating: 4.7,
    price: 160,
    moods: ["healthy", "fresh", "relaxed"],
    features: ["mezze platters", "grilled meats"],
    tags: ["healthy choice", "fresh ingredients"],
    description: "Fresh mezze platters, grilled kebabs, and warm pita bread.",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop"
  },
  {
    id: "9",
    name: "Seoul Kitchen",
    cuisine: "Korean",
    rating: 4.8,
    price: 140,
    moods: ["spicy", "interactive", "fun"],
    features: ["BBQ tables", "kimchi bar"],
    tags: ["interactive dining", "spicy lovers"],
    description: "Sizzling BBQ tables, authentic kimchi, and Korean fried chicken.",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop"
  },
  {
    id: "10",
    name: "Pasta Prima",
    cuisine: "Italian",
    rating: 4.6,
    price: 170,
    moods: ["cozy", "family", "classic"],
    features: ["handmade pasta", "wood-fired pizza"],
    tags: ["family style", "classic recipes"],
    description: "Fresh handmade pasta daily with classic Italian recipes.",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop"
  },
  {
    id: "11",
    name: "The Green Fork",
    cuisine: "Vegan",
    rating: 4.5,
    price: 140,
    moods: ["healthy", "sustainable", "modern"],
    features: ["organic", "gluten-free options"],
    tags: ["plant based", "eco friendly"],
    description: "Plant-based fine dining that surprises even carnivores.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
  },
  {
    id: "12",
    name: "Bangkok Street",
    cuisine: "Thai",
    rating: 4.6,
    price: 95,
    moods: ["spicy", "street", "authentic"],
    features: ["pad thai", "green curry"],
    tags: ["street food", "spicy lovers"],
    description: "Authentic Thai street food with bold flavors.",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=400&h=300&fit=crop"
  },
  {
    id: "13",
    name: "Saffron Palace",
    cuisine: "Indian",
    rating: 4.8,
    price: 200,
    moods: ["premium", "aromatic", "elegant"],
    features: ["biryani", "live music"],
    tags: ["premium dining", "special occasion"],
    description: "Royal Indian cuisine with live classical music.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop"
  },
  {
    id: "14",
    name: "Taco Loco",
    cuisine: "Mexican",
    rating: 4.4,
    price: 70,
    moods: ["casual", "fun", "quick"],
    features: ["tacos", "nachos"],
    tags: ["budget friendly", "late night"],
    description: "Authentic street tacos with homemade salsas.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop"
  },
  {
    id: "15",
    name: "Golden Dragon",
    cuisine: "Chinese",
    rating: 4.7,
    price: 180,
    moods: ["premium", "traditional", "family"],
    features: ["Cantonese", "dim sum"],
    tags: ["family gathering", "authentic"],
    description: "Traditional Cantonese cuisine with premium dim sum.",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop"
  },
  {
    id: "16",
    name: "Pho Paradise",
    cuisine: "Vietnamese",
    rating: 4.5,
    price: 85,
    moods: ["cozy", "comforting", "authentic"],
    features: ["pho", "banh mi"],
    tags: ["soul food", "quick service"],
    description: "Steaming bowls of pho with rich, aromatic broth.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop"
  },
  {
    id: "17",
    name: "Bombay Bistro",
    cuisine: "Indian",
    rating: 4.6,
    price: 110,
    moods: ["spicy", "casual", "quick"],
    features: ["curry", "naan bread"],
    tags: ["lunch special", "spicy lovers"],
    description: "Fast-casual Indian with fiery curries and fresh naan.",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=400&h=300&fit=crop"
  },
  {
    id: "18",
    name: "Ramen Republic",
    cuisine: "Japanese",
    rating: 4.7,
    price: 100,
    moods: ["cozy", "comforting", "authentic"],
    features: ["tonkotsu", "spicy miso"],
    tags: ["soul food", "late night"],
    description: "Rich, creamy ramen with 24-hour pork bone broth.",
    image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop"
  },
  {
    id: "19",
    name: "La Piazza",
    cuisine: "Italian",
    rating: 4.8,
    price: 220,
    moods: ["romantic", "elegant", "classic"],
    features: ["truffle pasta", "fine wine"],
    tags: ["date night", "anniversary"],
    description: "Upscale Italian with imported ingredients and fine wines.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=300&fit=crop"
  },
  {
    id: "20",
    name: "Szechuan Fire",
    cuisine: "Chinese",
    rating: 4.6,
    price: 120,
    moods: ["spicy", "bold", "authentic"],
    features: ["hot pot", "mapo tofu"],
    tags: ["extreme spicy", "authentic"],
    description: "Fiery Szechuan cuisine that will make you sweat.",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400&h=300&fit=crop"
  },
  {
    id: "21",
    name: "Ocean Blue",
    cuisine: "Seafood",
    rating: 4.9,
    price: 380,
    moods: ["premium", "fresh", "elegant"],
    features: ["oysters", "lobster"],
    tags: ["special occasion", "fresh catch"],
    description: "Fresh seafood flown in daily from coastal waters.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop"
  },
  {
    id: "22",
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.4,
    price: 90,
    moods: ["spicy", "casual", "quick"],
    features: ["takeaway", "delivery"],
    tags: ["budget friendly", "quick lunch"],
    description: "Quick and delicious Indian curries for busy people.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
  },
  {
    id: "23",
    name: "Sushi Zen",
    cuisine: "Japanese",
    rating: 4.8,
    price: 280,
    moods: ["zen", "premium", "minimalist"],
    features: ["omakase", "sake"],
    tags: ["intimate dining", "chef's table"],
    description: "Minimalist sushi bar with master chef experience.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&h=300&fit=crop"
  },
  {
    id: "24",
    name: "Texas Smokehouse",
    cuisine: "American BBQ",
    rating: 4.7,
    price: 150,
    moods: ["bold", "rustic", "casual"],
    features: ["brisket", "ribs"],
    tags: ["meat lovers", "big portions"],
    description: "Texas-style BBQ with 12-hour smoked brisket.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=300&fit=crop"
  },
  {
    id: "25",
    name: "Greek Islands",
    cuisine: "Greek",
    rating: 4.6,
    price: 140,
    moods: ["fresh", "healthy", "vibrant"],
    features: ["souvlaki", "tzatziki"],
    tags: ["mediterranean", "healthy choice"],
    description: "Fresh Greek cuisine with imported olive oil and feta.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
  },
  {
    id: "26",
    name: "Wok Express",
    cuisine: "Chinese",
    rating: 4.3,
    price: 60,
    moods: ["quick", "casual", "street"],
    features: ["stir fry", "takeaway"],
    tags: ["budget friendly", "fast service"],
    description: "Quick wok-fried dishes ready in minutes.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop"
  },
  {
    id: "27",
    name: "Kebab King",
    cuisine: "Turkish",
    rating: 4.5,
    price: 100,
    moods: ["casual", "authentic", "quick"],
    features: ["doner", "pide"],
    tags: ["late night", "street food"],
    description: "Authentic Turkish kebabs and freshly baked pide.",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop"
  },
  {
    id: "28",
    name: "Le Petit Bistro",
    cuisine: "French",
    rating: 4.7,
    price: 240,
    moods: ["romantic", "cozy", "intimate"],
    features: ["wine cellar", "cheese board"],
    tags: ["date night", "wine lovers"],
    description: "Cozy French bistro with an extensive wine cellar.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&h=300&fit=crop"
  },
  {
    id: "29",
    name: "Burrito Brothers",
    cuisine: "Mexican",
    rating: 4.4,
    price: 75,
    moods: ["casual", "quick", "fun"],
    features: ["burritos", "quesadillas"],
    tags: ["budget friendly", "filling"],
    description: "Massive burritos stuffed with fresh ingredients.",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop"
  },
  {
    id: "30",
    name: "Dim Sum Palace",
    cuisine: "Chinese",
    rating: 4.8,
    price: 160,
    moods: ["family", "traditional", "bustling"],
    features: ["cart service", "tea pairing"],
    tags: ["weekend brunch", "family gathering"],
    description: "Traditional dim sum with rolling cart service.",
    image: "https://images.unsplash.com/photo-1576577445504-6af96477db52?w=400&h=300&fit=crop"
  },
  {
    id: "31",
    name: "Curry & Spice",
    cuisine: "Indian",
    rating: 4.5,
    price: 130,
    moods: ["spicy", "aromatic", "traditional"],
    features: ["thali", "biryani"],
    tags: ["authentic", "spicy lovers"],
    description: "Traditional thali meals with multiple curries.",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop"
  },
  {
    id: "32",
    name: "Poke Bowl Co",
    cuisine: "Hawaiian",
    rating: 4.6,
    price: 110,
    moods: ["healthy", "fresh", "casual"],
    features: ["build your own", "fresh fish"],
    tags: ["healthy choice", "lunch special"],
    description: "Fresh poke bowls with customizable toppings.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
  },
  {
    id: "33",
    name: "Seoul Street",
    cuisine: "Korean",
    rating: 4.5,
    price: 90,
    moods: ["street", "casual", "fun"],
    features: ["fried chicken", "tteokbokki"],
    tags: ["street food", "late night"],
    description: "Korean street food with crispy fried chicken.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop"
  },
  {
    id: "34",
    name: "Tuscany Table",
    cuisine: "Italian",
    rating: 4.7,
    price: 200,
    moods: ["rustic", "family", "warm"],
    features: ["wood-fired", "house wine"],
    tags: ["family style", "rustic charm"],
    description: "Rustic Tuscan cuisine with wood-fired specialties.",
    image: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?w=400&h=300&fit=crop"
  },
  {
    id: "35",
    name: "Naan Stop",
    cuisine: "Indian",
    rating: 4.3,
    price: 85,
    moods: ["quick", "casual", "street"],
    features: ["wraps", "chai"],
    tags: ["fast casual", "budget friendly"],
    description: "Fast-casual Indian wraps and street snacks.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop"
  },
  {
    id: "36",
    name: "Sake House",
    cuisine: "Japanese",
    rating: 4.6,
    price: 190,
    moods: ["zen", "relaxed", "premium"],
    features: ["izakaya", "sake flights"],
    tags: ["after work", "sake lovers"],
    description: "Japanese izakaya with extensive sake selection.",
    image: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400&h=300&fit=crop"
  },
  {
    id: "37",
    name: "Caribbean Spice",
    cuisine: "Caribbean",
    rating: 4.5,
    price: 120,
    moods: ["spicy", "vibrant", "fun"],
    features: ["jerk chicken", "rum cocktails"],
    tags: ["island vibes", "spicy lovers"],
    description: "Authentic Caribbean flavors with jerk specialties.",
    image: "https://images.unsplash.com/photo-1532636875304-0c89f5d1ade8?w=400&h=300&fit=crop"
  },
  {
    id: "38",
    name: "Peking Duck House",
    cuisine: "Chinese",
    rating: 4.8,
    price: 250,
    moods: ["premium", "traditional", "special"],
    features: ["peking duck", "tea ceremony"],
    tags: ["special occasion", "must try"],
    description: "Famous for traditional Peking duck carved tableside.",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400&h=300&fit=crop"
  },
  {
    id: "39",
    name: "Falafel Factory",
    cuisine: "Middle Eastern",
    rating: 4.4,
    price: 70,
    moods: ["healthy", "quick", "casual"],
    features: ["falafel", "hummus"],
    tags: ["vegetarian", "budget friendly"],
    description: "Fresh falafel and creamy hummus made daily.",
    image: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?w=400&h=300&fit=crop"
  },
  {
    id: "40",
    name: "Steakhouse 55",
    cuisine: "American",
    rating: 4.9,
    price: 400,
    moods: ["premium", "bold", "elegant"],
    features: ["dry aged", "wine cellar"],
    tags: ["special occasion", "steak lovers"],
    description: "Premium dry-aged steaks in an elegant setting.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop"
  },
  {
    id: "41",
    name: "Pad Thai Palace",
    cuisine: "Thai",
    rating: 4.5,
    price: 95,
    moods: ["casual", "authentic", "quick"],
    features: ["pad thai", "tom yum"],
    tags: ["quick lunch", "authentic"],
    description: "Classic Thai dishes with authentic recipes.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop"
  },
  {
    id: "42",
    name: "Tapas Bar",
    cuisine: "Spanish",
    rating: 4.7,
    price: 180,
    moods: ["social", "fun", "vibrant"],
    features: ["small plates", "sangria"],
    tags: ["sharing", "group dining"],
    description: "Authentic Spanish tapas perfect for sharing.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&h=300&fit=crop"
  },
  {
    id: "43",
    name: "Dumpling Den",
    cuisine: "Chinese",
    rating: 4.6,
    price: 80,
    moods: ["cozy", "casual", "comforting"],
    features: ["soup dumplings", "potstickers"],
    tags: ["comfort food", "quick bite"],
    description: "Handmade dumplings with juicy fillings.",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop"
  },
  {
    id: "44",
    name: "Chili Pepper",
    cuisine: "Szechuan",
    rating: 4.7,
    price: 130,
    moods: ["spicy", "bold", "adventurous"],
    features: ["numbing spice", "hot pot"],
    tags: ["extreme spicy", "adventurous"],
    description: "Authentic Szechuan with numbing peppercorns.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop"
  },
  {
    id: "45",
    name: "Farm to Table",
    cuisine: "American",
    rating: 4.8,
    price: 220,
    moods: ["healthy", "fresh", "sustainable"],
    features: ["organic", "seasonal menu"],
    tags: ["farm fresh", "sustainable"],
    description: "Locally sourced ingredients with seasonal menus.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
  },
  {
    id: "46",
    name: "Bombay Express",
    cuisine: "Indian",
    rating: 4.4,
    price: 75,
    moods: ["quick", "casual", "street"],
    features: ["street food", "chaat"],
    tags: ["street food", "quick snack"],
    description: "Indian street food favorites and chaat.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=400&h=300&fit=crop"
  },
  {
    id: "47",
    name: "Wagyu Room",
    cuisine: "Japanese",
    rating: 4.9,
    price: 500,
    moods: ["premium", "exclusive", "elegant"],
    features: ["A5 wagyu", "teppanyaki"],
    tags: ["luxury dining", "special occasion"],
    description: "A5 Wagyu beef cooked teppanyaki style.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop"
  },
  {
    id: "48",
    name: "Peri Peri Grill",
    cuisine: "Portuguese",
    rating: 4.5,
    price: 110,
    moods: ["spicy", "casual", "fun"],
    features: ["flame grilled", "peri peri sauce"],
    tags: ["spicy lovers", "grilled"],
    description: "Flame-grilled chicken with signature peri peri sauce.",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop"
  },
  {
    id: "49",
    name: "Wonton Wonder",
    cuisine: "Chinese",
    rating: 4.5,
    price: 70,
    moods: ["cozy", "comforting", "quick"],
    features: ["wonton soup", "congee"],
    tags: ["comfort food", "rainy day"],
    description: "Delicate wontons in rich, savory broth.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
  },
  {
    id: "50",
    name: "Moroccan Nights",
    cuisine: "Moroccan",
    rating: 4.7,
    price: 170,
    moods: ["exotic", "romantic", "aromatic"],
    features: ["tagine", "couscous"],
    tags: ["unique experience", "date night"],
    description: "Exotic tagines and aromatic spices in a romantic setting.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400&h=300&fit=crop"
  }
];

// Get top picks (highest rated, premium)
export const topPicks: Restaurant[] = restaurants.filter(r => r.rating >= 4.8).slice(0, 6);

// Get suggestions (varied selection)
export const suggestions: Restaurant[] = restaurants.filter(r => r.rating < 4.8).slice(0, 12);

// Simple local search by restaurant name
export const searchRestaurants = (query: string): Restaurant[] => {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return [];
  
  return restaurants.filter(r => 
    r.name.toLowerCase().includes(searchTerm)
  );
};
