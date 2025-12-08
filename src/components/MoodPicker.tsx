import { Flame, Heart, Coffee, Sparkles, Leaf, PartyPopper, Wine, Moon, Sun } from "lucide-react";

const moods = [
  { id: "spicy", label: "Spicy", icon: Flame, color: "text-orange-500" },
  { id: "romantic", label: "Romantic", icon: Heart, color: "text-pink-500" },
  { id: "cozy", label: "Cozy", icon: Coffee, color: "text-amber-500" },
  { id: "premium", label: "Premium", icon: Sparkles, color: "text-purple-500" },
  { id: "healthy", label: "Healthy", icon: Leaf, color: "text-green-500" },
  { id: "fun", label: "Fun", icon: PartyPopper, color: "text-yellow-500" },
  { id: "elegant", label: "Elegant", icon: Wine, color: "text-red-500" },
  { id: "casual", label: "Casual", icon: Sun, color: "text-blue-400" },
];

interface MoodPickerProps {
  selectedMoods: string[];
  onMoodChange: (moods: string[]) => void;
}

const MoodPicker = ({ selectedMoods, onMoodChange }: MoodPickerProps) => {
  const toggleMood = (moodId: string) => {
    if (selectedMoods.includes(moodId)) {
      onMoodChange(selectedMoods.filter((m) => m !== moodId));
    } else {
      onMoodChange([...selectedMoods, moodId]);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-display font-semibold text-foreground">Mood</h3>
      <div className="flex flex-wrap gap-2">
        {moods.map(({ id, label, icon: Icon, color }) => {
          const isSelected = selectedMoods.includes(id);
          return (
            <button
              key={id}
              onClick={() => toggleMood(id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200 ${
                isSelected
                  ? "bg-primary/10 border-primary text-foreground"
                  : "bg-muted/30 border-border text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? color : ""}`} />
              <span className="text-sm">{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodPicker;
