import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureRow from "@/components/FeatureRow";
import Footer from "@/components/Footer";
import { smartHomeFAQs } from "@/content/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sunrise, Moon, Tv, Shield, Check } from "lucide-react";
import smartHomeImg from "@/assets/smart-home-hero.jpg";

const SmartHome = () => {
  const scenes = [
    {
      icon: Sunrise,
      name: "Good Morning",
      description: "East-facing shades open 30% at sunrise, gently waking you up"
    },
    {
      icon: Moon,
      name: "Good Night",
      description: "All shades close automatically at sunset for privacy"
    },
    {
      icon: Tv,
      name: "Movie Night",
      description: "Blackout shades close and lights dim with one voice command"
    },
    {
      icon: Shield,
      name: "Away Mode",
      description: "Shades open and close randomly to simulate presence"
    }
  ];

  const brands = [
    "Somfy®", "Dooya®", "A-OK®", "Nice®", 
    "Rollease Acmeda® Automate", "Gaposa®"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Smart Home Integration"
        subtitle="Seamless control with Alexa, Google, and Apple HomeKit."
        showCTA={false}
        backgroundImage={smartHomeImg}
      />

      {/* Compatibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Works With Your Ecosystem
            </h2>
            <p className="text-muted text-lg">
              Compatible with all major smart home platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {["Alexa", "Google Home", "Apple HomeKit"].map((platform, idx) => (
              <Card
                key={platform}
                className="glass p-8 text-center glow-ring-hover animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-xl">{platform}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scenes & Automations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Scenes & Automations
            </h2>
            <p className="text-muted text-lg">
              Control your shades with a single voice command or tap
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenes.map((scene, idx) => (
              <Card
                key={scene.name}
                className="glass p-6 glow-ring-hover animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-brand/10 flex items-center justify-center">
                  <scene.icon className="h-6 w-6 text-brand" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{scene.name}</h3>
                <p className="text-sm text-muted">{scene.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Configuration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FeatureRow
            title="Professional Configuration"
            description="We don't just install—we fully configure your smart home system for seamless operation."
            features={[
              "Wi-Fi setup and hub pairing",
              "Multi-room grouping and organization",
              "Custom scenes and automation schedules",
              "Voice command setup and testing",
              "Complete handover with quick-start guide"
            ]}
            imageSrc={smartHomeImg}
            imagePosition="right"
          />
        </div>
      </section>

      {/* Supported Motor Brands */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8">
            Supported Motor Brands
          </h2>
          <div className="glass rounded-2xl p-8">
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted">
              {brands.map((brand, idx) => (
                <span key={idx} className="text-sm font-medium">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Smart Home Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {smartHomeFAQs.map((faq, idx) => (
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
              Schedule a Consultation
            </h2>
            <p className="text-muted text-lg mb-8">
              Let's discuss your smart home needs and design the perfect solution
            </p>
            <Button size="lg" className="magnetic">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SmartHome;
