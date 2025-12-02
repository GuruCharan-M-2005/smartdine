export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  description: string;
  highlight: string;
  image: string;
  priceRange: string;
}

export const topPicks: Restaurant[] = [
  {
    id: "1",
    name: "Sakura Garden",
    cuisine: "Japanese",
    rating: 4.9,
    description: "Authentic omakase experience with fresh daily imports from Tokyo's Tsukiji market.",
    highlight: "Chef's Choice",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    priceRange: "$$$",
  },
  {
    id: "2",
    name: "Fuego Cantina",
    cuisine: "Mexican",
    rating: 4.7,
    description: "Modern Mexican street food with a spicy twist and craft margaritas.",
    highlight: "Spicy & Bold",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "3",
    name: "The Ember Room",
    cuisine: "American BBQ",
    rating: 4.8,
    description: "Slow-smoked meats over hickory wood with house-made sauces.",
    highlight: "Cozy Vibes",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "4",
    name: "Côte d'Azur",
    cuisine: "French",
    rating: 4.9,
    description: "Elegant French bistro with Mediterranean influences and extensive wine list.",
    highlight: "Romantic",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
    priceRange: "$$$",
  },
];

export const suggestions: Restaurant[] = [
  {
    id: "5",
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.6,
    description: "Traditional North Indian cuisine with tandoori specialties and rich curries.",
    highlight: "Vegetarian Friendly",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "6",
    name: "Noodle House",
    cuisine: "Chinese",
    rating: 4.5,
    description: "Hand-pulled noodles and dim sum in a bustling, authentic atmosphere.",
    highlight: "Quick & Delicious",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    priceRange: "$",
  },
  {
    id: "7",
    name: "Olive & Thyme",
    cuisine: "Mediterranean",
    rating: 4.7,
    description: "Fresh mezze platters, grilled kebabs, and warm pita bread.",
    highlight: "Healthy Choice",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "8",
    name: "Seoul Kitchen",
    cuisine: "Korean",
    rating: 4.8,
    description: "Sizzling BBQ tables, authentic kimchi, and Korean fried chicken.",
    highlight: "Interactive Dining",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "9",
    name: "Pasta Prima",
    cuisine: "Italian",
    rating: 4.6,
    description: "Fresh handmade pasta daily with classic and modern Italian recipes.",
    highlight: "Family Style",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
  {
    id: "10",
    name: "The Green Fork",
    cuisine: "Vegan",
    rating: 4.5,
    description: "Plant-based fine dining that surprises even the most devoted carnivores.",
    highlight: "Sustainable",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    priceRange: "$$",
  },
];

// Simulated API functions
export const simulateAISearch = async (query: string): Promise<Restaurant[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Simple keyword matching for demo
  const keywords = query.toLowerCase();
  const allRestaurants = [...topPicks, ...suggestions];
  
  if (keywords.includes("spicy") || keywords.includes("hot")) {
    return allRestaurants.filter((r) => 
      r.cuisine === "Mexican" || r.cuisine === "Indian" || r.cuisine === "Korean"
    );
  }
  
  if (keywords.includes("cozy") || keywords.includes("romantic")) {
    return allRestaurants.filter((r) => 
      r.highlight.includes("Cozy") || r.highlight.includes("Romantic")
    );
  }
  
  if (keywords.includes("healthy") || keywords.includes("vegan")) {
    return allRestaurants.filter((r) => 
      r.cuisine === "Vegan" || r.highlight.includes("Healthy") || r.highlight.includes("Vegetarian")
    );
  }
  
  // Default: return random selection
  return allRestaurants.slice(0, 4);
};
