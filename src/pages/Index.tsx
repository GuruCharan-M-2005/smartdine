import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchInput from "@/components/SearchInput";
import TopPicksCarousel from "@/components/TopPicksCarousel";
import SuggestionsGrid from "@/components/SuggestionsGrid";
import SearchResults from "@/components/SearchResults";
import { topPicks, suggestions, simulateAISearch, Restaurant } from "@/lib/mockData";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<Restaurant[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    try {
      const results = await simulateAISearch(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    setSearchResults(null);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <div className="animate-fade-in">
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
        </section>

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
              <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                <TopPicksCarousel restaurants={topPicks} />
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                <SuggestionsGrid restaurants={suggestions} />
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
