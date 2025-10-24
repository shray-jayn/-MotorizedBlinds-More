import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { getCityInfo } from "@/content/cities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Check, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NotFound from "./NotFound";

const CityPage = () => {
  const { cityName } = useParams<{ cityName: string }>();
  
  if (!cityName) {
    return <NotFound />;
  }

  const formattedCityName = cityName
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  
  const cityInfo = getCityInfo(formattedCityName);

  if (!cityInfo) {
    return <NotFound />;
  }

  const services = [
    "Custom motorized interior shades & blinds",
    "Exterior zip-track patio blinds & retractable awnings",
    "Full smart home integration and programming",
    "In-home consultation, measurement, and installation"
  ];

  const faqs = [
    {
      q: "Do exterior blinds hold up in wind?",
      a: "Zip-track rails with tensioned fabric help reduce sway and resist wind damage. We'll size and spec appropriately based on your location's typical wind conditions."
    },
    {
      q: "How long is the installation?",
      a: "Typically 1 day per room or patio, depending on the scope of the project."
    },
    {
      q: "What smart home systems do you support?",
      a: "We integrate with Alexa, Google Home, and Apple HomeKit, with professional configuration included."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title={`Motorized Window Coverings in ${formattedCityName}`}
        subtitle="Custom interior shades, exterior patio systems, and full smart home integration—installed locally."
        showCTA={false}
      />

      {/* Local Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                Local Service Highlights
              </h2>
              
              <Card className="glass p-6 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{cityInfo.region}</p>
                    <p className="text-sm text-muted">{cityInfo.climate}</p>
                  </div>
                </div>
              </Card>

              <ul className="space-y-4">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-brand/10">
                      <Check className="h-4 w-4 text-brand" />
                    </div>
                    <span className="text-muted">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Card className="glass p-8 glow-ring">
                <h3 className="font-display text-2xl font-semibold mb-6">
                  Contact Us
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Serving from:</p>
                      <p className="text-sm text-muted">{cityInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium mb-1">Phone:</p>
                      <a 
                        href={`tel:${cityInfo.phone.replace(/\D/g, '')}`}
                        className="text-sm text-brand hover:underline"
                      >
                        {cityInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Local Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
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

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Motorized Blinds & More — ${formattedCityName}`,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": formattedCityName,
            "addressRegion": cityInfo.region
          },
          "telephone": cityInfo.phone,
          "areaServed": formattedCityName,
          "url": window.location.href
        })}
      </script>

      <Footer />
    </div>
  );
};

export default CityPage;
