import { useState } from "react";
import { Sparkles, Search, Shuffle } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import RestaurantDetail from "./RestaurantDetail";
import { Restaurant, restaurants } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

interface SuggestionsGridProps {
  restaurants: Restaurant[];
  title?: string;
}

const SuggestionsGrid = ({ restaurants: initialRestaurants, title = "Discover" }: SuggestionsGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedRestaurants, setDisplayedRestaurants] = useState(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setDisplayedRestaurants(initialRestaurants);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = restaurants.filter((r) =>
      r.name.toLowerCase().includes(lowerQuery) ||
      r.cuisine.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
      r.moods.some((m) => m.toLowerCase().includes(lowerQuery)) ||
      r.features.some((f) => f.toLowerCase().includes(lowerQuery))
    );
    setDisplayedRestaurants(filtered);
  };

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    setDisplayedRestaurants([randomRestaurant]);
    setSearchQuery("");
  };

  const handleReset = () => {
    setSearchQuery("");
    setDisplayedRestaurants(initialRestaurants);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
        </div>
      </div>

      {/* Search and Surprise Me */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search restaurants..."
            className="w-full pl-10 pr-4 py-2.5 bg-muted rounded-lg text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleSurpriseMe}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Surprise Me
          </Button>
          {(searchQuery || displayedRestaurants.length === 1) && (
            <Button
              onClick={handleReset}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      {displayedRestaurants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No restaurants found matching "{searchQuery}"</p>
          <Button onClick={handleReset} variant="link" className="mt-2 text-primary">
            Show all restaurants
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      )}

      {/* Restaurant Detail Modal */}
      {selectedRestaurant && (
        <RestaurantDetail
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </section>
  );
};

export default SuggestionsGrid;