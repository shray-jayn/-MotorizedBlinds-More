import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import FeatureRow from "@/components/FeatureRow";
import Steps from "@/components/Steps";
import ReviewCard from "@/components/ReviewCard";
import Footer from "@/components/Footer";
import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productRollerImg from "@/assets/product-roller.jpg";
import productExteriorImg from "@/assets/product-exterior.jpg";
import smartHomeImg from "@/assets/smart-home-hero.jpg";

const Index = () => {
  const reviews = [
    {
      name: "Sarah M.",
      city: "Santa Monica",
      rating: 5,
      review: "The motorized shades completely transformed our home. The installation was flawless and the smart home integration works perfectly with our Alexa devices."
    },
    {
      name: "David K.",
      city: "Irvine",
      rating: 5,
      review: "Outstanding service from consultation to installation. The exterior patio blinds have made our outdoor space usable year-round. Highly recommend!"
    },
    {
      name: "Jennifer L.",
      city: "Las Vegas",
      rating: 5,
      review: "Professional team, beautiful results. The motorized honeycomb shades keep our home cool in the desert heat. Worth every penny."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Motorized Blinds & Smart Shading"
        subtitle="We manufacture, program, and install motorized window coverings for homes and businesses. Voice control, schedules, energy savings."
      />

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Our Products
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Every product is custom, motorized, and compatible with your smart home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div
                key={product.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ProductCard
                  product={product}
                  imageSrc={
                    idx === 0 ? productRollerImg :
                    idx === 4 ? productExteriorImg :
                    undefined
                  }
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="magnetic">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto space-y-24">
          <FeatureRow
            title="Why Motorized Blinds & More?"
            description="We're not just installers—we're manufacturers, programmers, and smart home experts committed to delivering the perfect automated shading solution."
            features={[
              "Custom manufacturing with premium materials",
              "Professional installation by certified technicians",
              "Complete smart home integration and programming",
              "10% price-match guarantee on comparable systems",
              "Up to 5-year warranty on motors and components"
            ]}
            imageSrc={productRollerImg}
            imagePosition="right"
          />

          <FeatureRow
            title="Smart Home Integration"
            description="Seamlessly control your shades with voice commands, schedules, and scenes. Compatible with all major smart home platforms."
            features={[
              "Works with Alexa, Google Home, and Apple HomeKit",
              "Create custom scenes like 'Good Morning' and 'Movie Night'",
              "Schedule automatic adjustments based on time or sunrise/sunset",
              "Away Mode to simulate presence when you're gone",
              "Professional configuration and handover training included"
            ]}
            imageSrc={smartHomeImg}
            imagePosition="left"
          />
        </div>
      </section>

      {/* How It Works */}
      <Steps />

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted text-lg">
              Trusted by homeowners across Southern California and Las Vegas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 glow-ring">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Request a Free In-Home Consultation
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss your project and create the perfect motorized shading solution
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="magnetic">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+13104980110">Call (310) 498-0110</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
