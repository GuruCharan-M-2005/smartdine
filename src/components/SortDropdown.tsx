import { ArrowUpDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "relevance" | "rating" | "price-low" | "price-high";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[180px] bg-card border-border">
        <ArrowUpDown className="w-4 h-4 mr-2" />
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        <SelectItem value="relevance">Relevance</SelectItem>
        <SelectItem value="rating">Rating (High to Low)</SelectItem>
        <SelectItem value="price-low">Price (Low to High)</SelectItem>
        <SelectItem value="price-high">Price (High to Low)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
