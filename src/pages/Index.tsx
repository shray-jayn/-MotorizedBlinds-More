import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Steps from "@/components/Steps";
import ReviewCard from "@/components/ReviewCard";
import BrandMarquee from "@/components/BrandMarquee";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteWizard from "@/components/QuoteWizard";
import QuickQuoteForm from "@/components/QuickQuoteForm";
import Footer from "@/components/Footer";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Home, CheckCircle, Phone, Clock, Award, Smartphone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import productRollerImg from "@/assets/product-roller.jpg";
import productExteriorImg from "@/assets/product-exterior.jpg";

const Index = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Motorized Blinds & Smart Shading"
        subtitle="We manufacture, program, and install motorized window coverings for homes and businesses. Voice control, schedules, energy savings."
      />

      {/* Stats Bar */}
      <section className="py-12 glass border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5,000+", label: "Installations" },
              { number: "15+", label: "Years Experience" },
              { number: "4.9/5", label: "Customer Rating" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Smart Shading Products
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Every product is custom-manufactured, motorized, and compatible with your smart home
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ProductCard 
                  product={product}
                  imageSrc={
                    index === 0 ? productRollerImg :
                    index === 4 ? productExteriorImg :
                    undefined
                  }
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.6}>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild className="magnetic">
                <a href="/products">View All Products</a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BrandMarquee />

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Motorized Blinds & More?
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Premium quality, expert installation, and unmatched customer service
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "10% Price Match", description: "Best prices guaranteed on comparable systems" },
              { icon: Zap, title: "Quick Installation", description: "Professional setup in 1-3 days per project" },
              { icon: Home, title: "Smart Integration", description: "Works with Alexa, Google, Apple HomeKit" },
              { icon: Award, title: "5-Year Warranty", description: "Comprehensive coverage on motors & parts" },
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="glass rounded-2xl p-6 hover:glass-heavy transition-all magnetic">
                  <feature.icon className="h-12 w-12 text-brand mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                From consultation to installation, we make the process seamless
              </p>
            </div>
          </ScrollReveal>
          <Steps />
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-muted">Trusted by thousands across LA, OC, SD & Las Vegas</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", city: "Beverly Hills", rating: 5, review: "The installation was flawless and the smart home integration works perfectly. Love controlling everything with my voice!" },
              { name: "Michael R.", city: "Irvine", rating: 5, review: "Professional team, beautiful results. The motorized exterior blinds on our patio have been a game-changer." },
              { name: "Jennifer L.", city: "Las Vegas", rating: 5, review: "From quote to install, everything was smooth. The automated schedules help keep our home cool and save energy." },
            ].map((review, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <ReviewCard {...review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 glow-ring-hover opacity-30" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a Free In-Home Consultation
            </h2>
            <p className="text-lg text-muted mb-8">
              Get expert advice, accurate measurements, and a detailed quote—all at no cost
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <QuickQuoteForm />
          </ScrollReveal>
        </div>
      </section>

      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default Index;
