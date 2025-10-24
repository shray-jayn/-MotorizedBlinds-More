import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

interface HeroProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
  backgroundImage?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  showCTA = true,
  backgroundImage = heroImage 
}: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
          
          {showCTA && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="magnetic text-base px-8 py-6">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="magnetic text-base px-8 py-6"
                asChild
              >
                <a href="tel:+13104980110" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call (310) 498-0110
                </a>
              </Button>
            </div>
          )}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 glass rounded-2xl p-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
          <p className="text-sm text-muted mb-4">Serving LA, OC, SD & Las Vegas</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span>Somfy®</span>
            <span className="text-border">•</span>
            <span>Dooya®</span>
            <span className="text-border">•</span>
            <span>A-OK®</span>
            <span className="text-border">•</span>
            <span>Nice®</span>
            <span className="text-border">•</span>
            <span>Rollease Acmeda®</span>
            <span className="text-border">•</span>
            <span>Gaposa®</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
};

export default Hero;
