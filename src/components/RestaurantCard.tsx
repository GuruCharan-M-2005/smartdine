import { Star } from "lucide-react";
import { Restaurant } from "@/lib/mockData";

interface RestaurantCardProps {
  restaurant: Restaurant;
  variant?: "default" | "featured";
  style?: React.CSSProperties;
}

const RestaurantCard = ({ restaurant, variant = "default", style }: RestaurantCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <div
      className={`group relative overflow-hidden rounded-xl card-elevated transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 cursor-pointer ${
        isFeatured ? "min-w-[320px] flex-shrink-0" : ""
      }`}
      style={style}
    >
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {restaurant.tags.slice(0, 1).map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded-md">
            ₹{restaurant.price}
          </span>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-start justify-between mb-2 gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors truncate">
              {restaurant.name}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-foreground">{restaurant.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-3">
          {restaurant.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {restaurant.moods.slice(0, 3).map((mood) => (
            <span key={mood} className="px-2 py-0.5 text-xs text-muted-foreground bg-muted/50 rounded-full">
              {mood}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
