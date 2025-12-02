import { useRef } from "react";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/lib/mockData";

interface TopPicksCarouselProps {
  restaurants: Restaurant[];
}

const TopPicksCarousel = ({ restaurants }: TopPicksCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Flame className="w-5 h-5 text-primary" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground">Top Picks</h2>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="rounded-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="rounded-full border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.id} style={{ scrollSnapAlign: "start" }}>
            <RestaurantCard
              restaurant={restaurant}
              variant="featured"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicksCarousel;
