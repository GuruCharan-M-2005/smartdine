import { Search, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  onRetry?: () => void;
}

const NoResults = ({ onRetry }: NoResultsProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <Search className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
        No restaurants found
      </h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        We couldn't find any restaurants matching your criteria. Try adjusting your filters or search terms.
      </p>
      {onRetry && (
        <Button onClick={onRetry} className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <RefreshCw className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  );
};

export default NoResults;
