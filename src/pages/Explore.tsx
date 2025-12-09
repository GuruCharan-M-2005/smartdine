import { useState, useMemo } from "react";
import { SlidersHorizontal, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FiltersSidebar from "@/components/FiltersSidebar";
import RestaurantCardWithFavorite from "@/components/RestaurantCardWithFavorite";
import RestaurantDetail from "@/components/RestaurantDetail";
import NoResults from "@/components/NoResults";
import Pagination from "@/components/Pagination";
import SortDropdown, { SortOption } from "@/components/SortDropdown";
import Chatbot from "@/components/Chatbot";
import { restaurants, Restaurant } from "@/lib/mockData";
import { useFavorites } from "@/hooks/useFavorites";

const ITEMS_PER_PAGE = 15;

const Explore = () => {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  
  // Filters
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  
  // UI State
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    let result = restaurants.filter((restaurant) => {
      // Mood filter
      if (selectedMoods.length > 0) {
        const hasMatchingMood = restaurant.moods.some((m) =>
          selectedMoods.includes(m.toLowerCase())
        );
        if (!hasMatchingMood) return false;
      }

      // Cuisine filter
      if (selectedCuisines.length > 0) {
        if (!selectedCuisines.includes(restaurant.cuisine)) return false;
      }

      // Price filter
      if (restaurant.price < priceRange[0] || restaurant.price > priceRange[1]) {
        return false;
      }

      // Features filter
      if (selectedFeatures.length > 0) {
        const hasMatchingFeature = restaurant.features.some((f) =>
          selectedFeatures.includes(f.toLowerCase())
        );
        if (!hasMatchingFeature) return false;
      }

      return true;
    });

    // Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
    }

    return result;
  }, [selectedMoods, selectedCuisines, priceRange, selectedFeatures, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredRestaurants.length / ITEMS_PER_PAGE);
  const paginatedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleClearFilters = () => {
    setSelectedMoods([]);
    setSelectedCuisines([]);
    setPriceRange([0, 500]);
    setSelectedFeatures([]);
    setCurrentPage(1);
  };

  const handleRestaurantClick = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onChatOpen={() => setIsChatOpen(true)} />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Explore Restaurants
            </h1>
            <p className="text-muted-foreground mt-1">
              {filteredRestaurants.length} restaurants found
            </p>
          </div>
          <div className="flex items-center gap-3">
            <SortDropdown value={sortBy} onChange={setSortBy} />
            
            {/* Mobile Filter Button */}
            <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden border-border">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0 bg-background border-border">
                <div className="p-4">
                  <FiltersSidebar
                    selectedMoods={selectedMoods}
                    onMoodsChange={setSelectedMoods}
                    selectedCuisines={selectedCuisines}
                    onCuisinesChange={setSelectedCuisines}
                    priceRange={priceRange}
                    onPriceChange={setPriceRange}
                    selectedFeatures={selectedFeatures}
                    onFeaturesChange={setSelectedFeatures}
                    onClear={handleClearFilters}
                    onClose={() => setIsMobileFilterOpen(false)}
                    isMobile
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-80 flex-shrink-0">
            <FiltersSidebar
              selectedMoods={selectedMoods}
              onMoodsChange={setSelectedMoods}
              selectedCuisines={selectedCuisines}
              onCuisinesChange={setSelectedCuisines}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              selectedFeatures={selectedFeatures}
              onFeaturesChange={setSelectedFeatures}
              onClear={handleClearFilters}
            />
          </aside>

          {/* Results */}
          <div className="flex-1">
            {paginatedRestaurants.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {paginatedRestaurants.map((restaurant, index) => (
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
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </>
            ) : (
              <NoResults onRetry={handleClearFilters} />
            )}
          </div>
        </div>
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

      {/* Chat */}
      <Chatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all animate-pulse-glow z-40"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Explore;