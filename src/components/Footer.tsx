import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const locations = [
    {
      name: "Hollywood",
      address: "700 N San Vicente Blvd G460",
      city: "West Hollywood, CA 90069",
      phone: "(310) 498-0110"
    },
    {
      name: "Anaheim",
      address: "Anaheim, CA",
      phone: "(714) 555-0100"
    },
    {
      name: "Las Vegas",
      address: "8505 W Charleston Blvd #3",
      city: "Las Vegas, NV 89117",
      phone: "(725) 316-7780"
    }
  ];

  const links = [
    { name: "Products", path: "/products" },
    { name: "Smart Home", path: "/smart-home" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <footer className="relative border-t border-border bg-card/30 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display font-bold text-xl mb-4">
              Motorized Blinds & More
            </h3>
            <p className="text-sm text-muted mb-4">
              Custom motorized shades and smart home integration for Southern California and Las Vegas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted hover:text-brand transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold mb-4">Our Locations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((location) => (
                <div key={location.name} className="text-sm">
                  <p className="font-medium mb-1">{location.name}</p>
                  <div className="space-y-1 text-muted">
                    <p className="flex items-start gap-1">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>
                        {location.address}
                        {location.city && <><br />{location.city}</>}
                      </span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="hover:text-brand transition-colors">
                        {location.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            © 2025 Motorized Blinds & More. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Motorized Blinds & More",
          "url": "https://motorizedblindsandmore.com",
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+1-310-498-0110",
            "contactType": "sales"
          }],
          "areaServed": ["Los Angeles County", "Orange County", "San Diego County", "Las Vegas Valley"]
        })}
      </script>
    </footer>
  );
};

export default Footer;
