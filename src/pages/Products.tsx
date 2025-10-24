import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/content/products";
import { productFAQs } from "@/content/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productRollerImg from "@/assets/product-roller.jpg";
import productExteriorImg from "@/assets/product-exterior.jpg";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Our Smart Shading Products"
        subtitle="Every product is custom, motorized, and compatible with your smart home."
        showCTA={false}
      />

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted text-lg">
              Everything you need to know about our products
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {productFAQs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="glass rounded-lg px-6 border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 glow-ring">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Book Your Free Design Visit
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's create the perfect motorized shading solution for your space
            </p>
            <Button size="lg" className="magnetic">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
