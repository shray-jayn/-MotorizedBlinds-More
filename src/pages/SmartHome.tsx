import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteWizard from "@/components/QuoteWizard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import smartHomeHero from "@/assets/smart-home-hero.jpg";
import { CheckCircle, Smartphone, Clock, Zap, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const SmartHome = () => {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Smart Home Integration"
        subtitle="Seamless control with Alexa, Google, and Apple HomeKit."
        showCTA={false}
        backgroundImage={smartHomeHero}
      />

      {/* Compatibility */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Works With Your Ecosystem</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Seamless integration with the platforms you already use
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Amazon Alexa", description: "Control with Echo devices and voice commands", icon: Smartphone },
              { name: "Google Home", description: "Integrate with Google Assistant and Nest", icon: Zap },
              { name: "Apple HomeKit", description: "Native iOS control and Siri automation", icon: Shield },
            ].map((platform, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <motion.div 
                  className="glass rounded-2xl p-8 text-center"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <platform.icon className="h-12 w-12 text-brand mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-muted">{platform.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scenes */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Scenes & Automation</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Pre-programmed scenes that adjust your shades automatically
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { scene: "Good Morning", description: "East-facing shades open 30% at sunrise for natural wake-up lighting", icon: Clock },
              { scene: "Movie Night", description: "Blackout shades close and lights dim with a single voice command", icon: Zap },
              { scene: "Away Mode", description: "Simulate presence by opening/closing shades on a schedule", icon: Shield },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="glass-heavy rounded-2xl p-6 hover:glow-ring-hover transition-all">
                  <item.icon className="h-10 w-10 text-brand mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.scene}</h3>
                  <p className="text-muted">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Smarter Home?</h2>
            <p className="text-lg text-muted mb-8">
              Let's discuss your smart home setup during your free consultation
            </p>
            <Button size="lg" className="magnetic" onClick={() => setQuoteOpen(true)}>
              Schedule Smart Home Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <QuoteWizard open={quoteOpen} onOpenChange={setQuoteOpen} />
      <Footer />
    </div>
  );
};

export default SmartHome;
