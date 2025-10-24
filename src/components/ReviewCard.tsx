import { Star, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  city: string;
  rating: number;
  review: string;
}

const ReviewCard = ({ name, city, rating, review }: ReviewCardProps) => {
  return (
    <Card className="glass p-6 h-full glow-ring-hover transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center font-semibold">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-xs text-muted flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {city}
            </p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-glow text-glow" : "text-border"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-muted text-sm leading-relaxed">{review}</p>
    </Card>
  );
};

export default ReviewCard;
