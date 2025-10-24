import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
  imageSrc?: string;
}

const ProductCard = ({ product, imageSrc }: ProductCardProps) => {
  return (
    <Card className="glass glow-ring-hover group overflow-hidden border-border transition-all duration-300 hover:-translate-y-2">
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted mb-4">{product.blurb}</p>
        
        <ul className="space-y-2 mb-6">
          {product.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
              <span className="text-muted">{bullet}</span>
            </li>
          ))}
        </ul>

        {Object.keys(product.specs).length > 0 && (
          <div className="glass rounded-lg p-3 mb-4 space-y-1">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="flex justify-between text-xs">
                <span className="text-muted">{key}:</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        )}

        <Button className="w-full group/btn" variant="outline">
          {product.cta}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
