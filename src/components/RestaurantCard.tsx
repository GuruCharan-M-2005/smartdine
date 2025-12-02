import { Star, MapPin } from "lucide-react";
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
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
            {restaurant.highlight}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground rounded-md">
            {restaurant.priceRange}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {restaurant.name}
            </h3>
            <p className="text-sm text-muted-foreground">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded-md">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-foreground">{restaurant.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {restaurant.description}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
