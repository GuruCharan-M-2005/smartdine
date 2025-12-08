import { Slider } from "@/components/ui/slider";

interface PriceSliderProps {
  value: number[];
  onChange: (value: number[]) => void;
  min?: number;
  max?: number;
}

const PriceSlider = ({ value, onChange, min = 0, max = 500 }: PriceSliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display font-semibold text-foreground">Price Range</h3>
        <span className="text-sm text-primary font-medium">
          ₹{value[0]} - ₹{value[1]}
        </span>
      </div>
      <Slider
        value={value}
        onValueChange={onChange}
        min={min}
        max={max}
        step={10}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>₹{min}</span>
        <span>₹{max}+</span>
      </div>
    </div>
  );
};

export default PriceSlider;
