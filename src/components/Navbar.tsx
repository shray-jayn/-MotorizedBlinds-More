import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Smart Home", path: "/smart-home" },
    { name: "Locations", path: "/locations" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-heavy" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center space-x-2">
              <div className="font-display font-bold text-lg md:text-xl text-fg">
                Motorized Blinds & More
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === link.path
                      ? "text-brand"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand transition-transform origin-left ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+13104980110" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (310) 498-0110
                </a>
              </Button>
              <Button size="sm" className="magnetic">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-fg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-surface/95 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-64 glass-heavy p-6 animate-slide-in-right">
            <div className="flex flex-col space-y-6 mt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-brand"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+13104980110" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button className="w-full">Get a Quote</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-heavy border-t border-border">
        <div className="flex items-center justify-between p-4">
          <Button variant="outline" size="sm" asChild className="flex-1 mr-2">
            <a href="tel:+13104980110" className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          <Button size="sm" className="flex-1">Get Quote</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
