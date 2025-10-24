import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CityCardProps {
  cityName: string;
  region: string;
}

const CityCard = ({ cityName, region }: CityCardProps) => {
  const citySlug = cityName.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <Link to={`/locations/${citySlug}`}>
      <Card className="glass p-6 glow-ring-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-brand/10">
              <MapPin className="h-5 w-5 text-brand" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{cityName}</h3>
              <p className="text-xs text-muted">{region}</p>
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted transition-all group-hover:translate-x-1 group-hover:text-brand" />
        </div>
        <p className="text-sm text-muted">
          Motorized blinds, exterior patio systems, and smart home integration
        </p>
      </Card>
    </Link>
  );
};

export default CityCard;
