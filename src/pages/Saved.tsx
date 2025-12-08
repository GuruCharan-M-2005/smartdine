import { useState } from "react";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCardWithFavorite from "@/components/RestaurantCardWithFavorite";
import RestaurantDetail from "@/components/RestaurantDetail";
import { restaurants, Restaurant } from "@/lib/mockData";
import { useFavorites } from "@/hooks/useFavorites";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Saved = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const savedRestaurants = restaurants.filter((r) => favorites.includes(r.id));

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-red-500/10">
              <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            </div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Saved Restaurants
            </h1>
          </div>
          <p className="text-muted-foreground">
            {savedRestaurants.length} restaurant{savedRestaurants.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        {savedRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {savedRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <RestaurantCardWithFavorite
                  restaurant={restaurant}
                  isFavorite={isFavorite(restaurant.id)}
                  onToggleFavorite={() => toggleFavorite(restaurant.id)}
                  onClick={() => handleRestaurantClick(restaurant)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-2">
              No saved restaurants yet
            </h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              Explore our restaurants and tap the heart icon to save your favorites!
            </p>
            <Link to="/explore">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Restaurants
              </Button>
            </Link>
          </div>
        )}
      </main>

      <Footer />

      {/* Restaurant Detail Modal */}
      <RestaurantDetail
        restaurant={selectedRestaurant}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        isFavorite={selectedRestaurant ? isFavorite(selectedRestaurant.id) : false}
        onToggleFavorite={() => selectedRestaurant && toggleFavorite(selectedRestaurant.id)}
      />
    </div>
  );
};

export default Saved;
