import { Check } from "lucide-react";

const cuisines = [
  "Chinese", "Japanese", "Indian", "Italian", "Mexican", "Thai",
  "Korean", "French", "American", "Mediterranean", "Vietnamese",
  "Greek", "Turkish", "Caribbean", "Seafood", "Vegan"
];

interface CuisineSelectorProps {
  selectedCuisines: string[];
  onCuisineChange: (cuisines: string[]) => void;
}

const CuisineSelector = ({ selectedCuisines, onCuisineChange }: CuisineSelectorProps) => {
  const toggleCuisine = (cuisine: string) => {
    if (selectedCuisines.includes(cuisine)) {
      onCuisineChange(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      onCuisineChange([...selectedCuisines, cuisine]);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-display font-semibold text-foreground">Cuisine</h3>
      <div className="flex flex-wrap gap-2">
        {cuisines.map((cuisine) => {
          const isSelected = selectedCuisines.includes(cuisine);
          return (
            <button
              key={cuisine}
              onClick={() => toggleCuisine(cuisine)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-all duration-200 ${
                isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              {isSelected && <Check className="w-3 h-3" />}
              {cuisine}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CuisineSelector;
