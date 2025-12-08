import { X, Star, MapPin, Clock, Heart, Share2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Restaurant } from "@/lib/mockData";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface RestaurantDetailProps {
  restaurant: Restaurant | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const fakeReviews = [
  { id: 1, name: "Priya S.", rating: 5, comment: "Absolutely loved the ambiance and food! Will definitely come back.", date: "2 days ago" },
  { id: 2, name: "Rahul M.", rating: 4, comment: "Great flavors and friendly staff. Slightly pricey but worth it.", date: "1 week ago" },
  { id: 3, name: "Anita K.", rating: 5, comment: "Best experience ever! The chef's special was incredible.", date: "2 weeks ago" },
];

const RestaurantDetail = ({ restaurant, isOpen, onClose, isFavorite, onToggleFavorite }: RestaurantDetailProps) => {
  if (!restaurant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        {/* Header Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={onToggleFavorite}
              className="bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-foreground"}`} />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Share2 className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title Section */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">{restaurant.name}</h2>
                <p className="text-muted-foreground">{restaurant.cuisine} Cuisine</p>
              </div>
              <div className="flex items-center gap-1 bg-muted px-3 py-1.5 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-foreground">{restaurant.rating}</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> 2.5 km away
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Open now
              </span>
              <span className="text-primary font-medium">₹{restaurant.price} for two</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">{restaurant.description}</p>
          </div>

          {/* Tags & Features */}
          <div className="space-y-4">
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">Highlights</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">Features</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.features.map((feature) => (
                  <span key={feature} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm capitalize">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground mb-2">Moods</h3>
              <div className="flex flex-wrap gap-2">
                {restaurant.moods.map((mood) => (
                  <span key={mood} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm capitalize">
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Placeholder */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={`Gallery ${i}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3">Reviews</h3>
            <div className="space-y-4">
              {fakeReviews.map((review) => (
                <div key={review.id} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">{review.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.comment}</p>
                  <span className="text-xs text-muted-foreground mt-2 block">{review.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </Button>
            <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
              Book a Table
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RestaurantDetail;
