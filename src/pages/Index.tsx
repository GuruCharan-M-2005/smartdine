import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, MessageCircle, Shuffle, X } from "lucide-react";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantDetail from "@/components/RestaurantDetail";
import { restaurants } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchInput from "@/components/SearchInput";
import TopPicksCarousel from "@/components/TopPicksCarousel";
import SuggestionsGrid from "@/components/SuggestionsGrid";
import SearchResults from "@/components/SearchResults";
import Chatbot from "@/components/Chatbot";
import MoodPicker from "@/components/MoodPicker";
import CuisineSelector from "@/components/CuisineSelector";
import PriceSlider from "@/components/PriceSlider";
import { topPicks, suggestions, searchRestaurants, Restaurant } from "@/lib/mockData";

const quickCategories = [
  { emoji: "🍕", label: "Italian", query: "Italian food" },
  { emoji: "🍜", label: "Asian", query: "Asian cuisine" },
  { emoji: "🌮", label: "Mexican", query: "Mexican food" },
  { emoji: "🍣", label: "Japanese", query: "Japanese sushi" },
  { emoji: "🍛", label: "Indian", query: "Indian curry" },
  { emoji: "🥗", label: "Healthy", query: "Healthy food options" },
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Restaurant[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Quick filters state
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  
  // Surprise Me state
  const [surpriseRestaurant, setSurpriseRestaurant] = useState<Restaurant | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleSurpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    setSurpriseRestaurant(restaurants[randomIndex]);
  };

  const handleCloseSurprise = () => {
    setSurpriseRestaurant(null);
  };

  const handleSearch = (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    const results = searchRestaurants(query);
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleBack = () => {
    setSearchResults(null);
    setSearchQuery("");
  };

  const handleQuickCategory = (query: string) => {
    handleSearch(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onChatOpen={() => setIsChatOpen(true)} />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Recommendations</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Discover Your Next
              <span className="text-gradient block">Favorite Restaurant</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Tell us what you're craving, and our AI will find the perfect spot for you.
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <SearchInput onSearch={handleSearch} isLoading={isLoading} />
          </div>
          
          {/* Surprise Me Button */}
          <div className="animate-fade-in mt-6" style={{ animationDelay: "250ms" }}>
            <Button
              onClick={handleSurpriseMe}
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Surprise Me
            </Button>
          </div>
          
          {/* Surprise Restaurant Card */}
          {surpriseRestaurant && (
            <div className="animate-fade-in mt-6 sm:mt-8 max-w-sm sm:max-w-2xl mx-auto px-2 sm:px-0">
              <div className="relative">
                <button
                  onClick={handleCloseSurprise}
                  className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10 p-1.5 sm:p-2 rounded-full bg-card border border-border shadow-md hover:bg-muted transition-colors"
                >
                  <X className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                <div 
                  className="cursor-pointer transform hover:scale-[1.02] transition-transform"
                  onClick={() => setSelectedRestaurant(surpriseRestaurant)}
                >
                  <RestaurantCard restaurant={surpriseRestaurant} variant="featured" />
                </div>
              </div>
              <Button
                onClick={handleSurpriseMe}
                variant="ghost"
                size="sm"
                className="mt-3 sm:mt-4 text-primary hover:text-primary/80"
              >
                <Shuffle className="w-4 h-4 mr-2" />
                Try Another
              </Button>
            </div>
          )}
        </section>

        {/* Restaurant Detail Modal */}
        {selectedRestaurant && (
          <RestaurantDetail
            restaurant={selectedRestaurant}
            onClose={() => setSelectedRestaurant(null)}
          />
        )}

        {/* Quick Categories */}
        {!searchResults && (
          <section className="py-6 sm:py-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {quickCategories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => handleQuickCategory(cat.query)}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                >
                  <span className="text-lg sm:text-xl">{cat.emoji}</span>
                  <span className="text-xs sm:text-sm text-foreground">{cat.label}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Filters Section */}
        {!searchResults && (
          <section className="py-6 sm:py-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="card-elevated rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">Quick Filters</h2>
                <Link to="/explore">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 -ml-2 sm:ml-0">
                    <span className="hidden sm:inline">Advanced Filters</span>
                    <span className="sm:hidden">More</span>
                    <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </Button>
                </Link>
              </div>
              <MoodPicker selectedMoods={selectedMoods} onMoodChange={setSelectedMoods} />
              <CuisineSelector selectedCuisines={selectedCuisines} onCuisineChange={setSelectedCuisines} />
              <PriceSlider value={priceRange} onChange={setPriceRange} />
              <Button
                onClick={() => handleSearch(`${selectedMoods.join(" ")} ${selectedCuisines.join(" ")} under ₹${priceRange[1]}`)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={selectedMoods.length === 0 && selectedCuisines.length === 0}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Find Restaurants
              </Button>
            </div>
          </section>
        )}

        {/* Content Section */}
        <div className="space-y-16 mt-8">
          {searchResults ? (
            <SearchResults
              results={searchResults}
              query={searchQuery}
              onBack={handleBack}
            />
          ) : (
            <>
              <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
                <TopPicksCarousel restaurants={topPicks} />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                <SuggestionsGrid restaurants={suggestions} />
              </div>
            </>
          )}
        </div>

        {/* CTA Section */}
        {!searchResults && (
          <section className="py-10 sm:py-16 text-center animate-fade-in" style={{ animationDelay: "700ms" }}>
            <div className="card-elevated rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary/10 to-transparent">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Can't decide what to eat?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-4 sm:mb-6">
                Chat with our AI assistant and let it help you find the perfect restaurant based on your mood!
              </p>
              <Button
                onClick={() => setIsChatOpen(true)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with AI
              </Button>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {/* Chat */}
      <Chatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all animate-pulse-glow z-40"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
};

export default Index;
