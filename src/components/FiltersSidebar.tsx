import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import MoodPicker from "./MoodPicker";
import CuisineSelector from "./CuisineSelector";
import PriceSlider from "./PriceSlider";

const features = [
  "takeaway", "delivery", "dine-in", "outdoor seating", "live music",
  "vegetarian options", "vegan options", "gluten-free", "organic",
  "rooftop", "private dining", "wine pairing"
];

interface FiltersSidebarProps {
  selectedMoods: string[];
  onMoodsChange: (moods: string[]) => void;
  selectedCuisines: string[];
  onCuisinesChange: (cuisines: string[]) => void;
  priceRange: number[];
  onPriceChange: (price: number[]) => void;
  selectedFeatures: string[];
  onFeaturesChange: (features: string[]) => void;
  onClear: () => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const FiltersSidebar = ({
  selectedMoods,
  onMoodsChange,
  selectedCuisines,
  onCuisinesChange,
  priceRange,
  onPriceChange,
  selectedFeatures,
  onFeaturesChange,
  onClear,
  onClose,
  isMobile = false,
}: FiltersSidebarProps) => {
  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      onFeaturesChange(selectedFeatures.filter((f) => f !== feature));
    } else {
      onFeaturesChange([...selectedFeatures, feature]);
    }
  };

  const hasFilters = selectedMoods.length > 0 || selectedCuisines.length > 0 || 
    selectedFeatures.length > 0 || priceRange[0] > 0 || priceRange[1] < 500;

  return (
    <div className={`${isMobile ? "h-full" : "sticky top-24"} bg-card border border-border rounded-xl p-5 space-y-6`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <h2 className="font-display font-bold text-lg text-foreground">Filters</h2>
        </div>
        <div className="flex items-center gap-2">
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground hover:text-foreground">
              Clear all
            </Button>
          )}
          {isMobile && onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>

      {/* Mood Picker */}
      <MoodPicker selectedMoods={selectedMoods} onMoodChange={onMoodsChange} />

      {/* Cuisine Selector */}
      <CuisineSelector selectedCuisines={selectedCuisines} onCuisineChange={onCuisinesChange} />

      {/* Price Slider */}
      <PriceSlider value={priceRange} onChange={onPriceChange} />

      {/* Features */}
      <div className="space-y-3">
        <h3 className="font-display font-semibold text-foreground">Features</h3>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => {
            const isSelected = selectedFeatures.includes(feature);
            return (
              <button
                key={feature}
                onClick={() => toggleFeature(feature)}
                className={`px-3 py-1.5 rounded-full border text-xs capitalize transition-all duration-200 ${
                  isSelected
                    ? "bg-primary/10 border-primary text-primary"
                    : "bg-transparent border-border text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {feature}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FiltersSidebar;
