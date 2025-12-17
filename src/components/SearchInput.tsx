import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchInputProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchInput = ({ onSearch, isLoading }: SearchInputProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
        <div className="relative flex items-center gap-3 bg-card border border-border rounded-xl p-2 transition-all duration-300 focus-within:border-primary/50 focus-within:glow-ring">
          <div className="pl-3">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search restaurants by name..."
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground py-3 text-base"
          />
          <Button
            type="submit"
            disabled={isLoading || !query.trim()}
            className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-4 sm:px-6 py-5 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Search className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Search</span>
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {["Dragon", "Sakura", "Curry", "Spice", "Garden"].map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => setQuery(suggestion)}
            className="px-3 py-1.5 text-xs text-muted-foreground bg-muted/50 hover:bg-muted rounded-full transition-colors duration-200"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </form>
  );
};

export default SearchInput;
