import { Sparkles } from "lucide-react";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/lib/mockData";

interface SuggestionsGridProps {
  restaurants: Restaurant[];
  title?: string;
}

const SuggestionsGrid = ({ restaurants, title = "Suggestions For You" }: SuggestionsGridProps) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {restaurants.map((restaurant, index) => (
          <div
            key={restaurant.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuggestionsGrid;
