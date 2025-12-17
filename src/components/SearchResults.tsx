import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/lib/mockData";

interface SearchResultsProps {
  results: Restaurant[];
  query: string;
  onBack: () => void;
}

const SearchResults = ({ results, query, onBack }: SearchResultsProps) => {
  return (
    <section className="animate-fade-in">
      <div className="flex items-center gap-2 sm:gap-4 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-full hover:bg-muted flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 flex-shrink-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-lg sm:text-2xl font-bold text-foreground truncate">
              Results for "{query}"
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {results.length} restaurant{results.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>
      </div>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            No restaurants found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search or explore our suggestions
          </p>
        </div>
      )}
    </section>
  );
};

export default SearchResults;
