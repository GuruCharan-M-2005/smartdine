import { useState } from "react";
import { Sparkles, Shuffle } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import RestaurantDetail from "./RestaurantDetail";
import { Restaurant, restaurants } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

interface SuggestionsGridProps {
  restaurants: Restaurant[];
  title?: string;
}

const SuggestionsGrid = ({ restaurants: initialRestaurants, title = "Discover" }: SuggestionsGridProps) => {
  const [displayedRestaurants, setDisplayedRestaurants] = useState(initialRestaurants);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isSurprised, setIsSurprised] = useState(false);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    setDisplayedRestaurants([randomRestaurant]);
    setIsSurprised(true);
  };

  const handleReset = () => {
    setDisplayedRestaurants(initialRestaurants);
    setIsSurprised(false);
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
        <div className="flex gap-2">
          <Button
            onClick={handleSurpriseMe}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            Surprise Me
          </Button>
          {isSurprised && (
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