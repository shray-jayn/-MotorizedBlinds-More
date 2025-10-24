import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CityCard from "@/components/CityCard";
import Footer from "@/components/Footer";
import { regions } from "@/content/cities";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Locations = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRegions = regions.filter(region => 
    selectedRegion === "all" || region.slug === selectedRegion
  );

  const getCities = () => {
    let cities: { name: string; region: string }[] = [];
    filteredRegions.forEach(region => {
      cities.push(
        ...region.cities.map(city => ({
          name: city,
          region: region.name
        }))
      );
    });

    if (searchQuery) {
      cities = cities.filter(city =>
        city.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return cities;
  };

  const cities = getCities();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Service Areas — LA, OC, SD & Las Vegas"
        subtitle="Click your city to view localized services, photos, and contact information"
        showCTA={false}
      />

      {/* Region Tabs & Search */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted" />
              <Input
                type="text"
                placeholder="Search cities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 glass"
              />
            </div>
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedRegion("all")}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedRegion === "all"
                  ? "bg-brand text-fg"
                  : "glass text-muted hover:text-fg"
              }`}
            >
              All Regions
            </button>
            {regions.map((region) => (
              <button
                key={region.slug}
                onClick={() => setSelectedRegion(region.slug)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedRegion === region.slug
                    ? "bg-brand text-fg"
                    : "glass text-muted hover:text-fg"
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city, idx) => (
              <div
                key={`${city.name}-${city.region}`}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 30}ms` }}
              >
                <CityCard cityName={city.name} region={city.region} />
              </div>
            ))}
          </div>

          {cities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                No cities found. Try a different search or region.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              Can't Find Your City?
            </h2>
            <p className="text-muted text-lg mb-6">
              We likely serve your area! Contact us to confirm availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+13104980110" className="text-brand hover:underline">
                (310) 498-0110
              </a>
              <span className="text-muted">•</span>
              <a href="tel:+17253167780" className="text-brand hover:underline">
                (725) 316-7780
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
