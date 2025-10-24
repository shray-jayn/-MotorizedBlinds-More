export interface Product {
  slug: string;
  name: string;
  blurb: string;
  bullets: string[];
  specs: Record<string, string>;
  cta: string;
}

export const products: Product[] = [
  {
    slug: "motorized-roller-shades",
    name: "Motorized Roller Shades",
    blurb: "Quiet, reliable motors with smart control options.",
    bullets: [
      "Ultra-quiet motors",
      "Blackout to sheer fabrics",
      "One-touch and voice control",
      "Child-safe, cord-free"
    ],
    specs: { 
      "Max Width": "144\"", 
      "Power": "Battery/Hardwired", 
      "Options": "Side channels, Cassette valance" 
    },
    cta: "Get a Quote"
  },
  {
    slug: "zebra-dual-shades",
    name: "Zebra & Dual Shades",
    blurb: "Shift between privacy and sunlight instantly.",
    bullets: [
      "Day-to-night privacy",
      "Designer fabrics",
      "Precise motor sync"
    ],
    specs: { 
      "Power": "Battery/Hardwired",
      "Style": "Cassette valance"
    },
    cta: "Get a Quote"
  },
  {
    slug: "honeycomb-shades",
    name: "Honeycomb Shades",
    blurb: "Energy-efficient comfort and noise dampening.",
    bullets: [
      "Thermal insulation",
      "Sound dampening",
      "Top-down / bottom-up motorization"
    ],
    specs: { 
      "Cell": "Single/Dual",
      "Profile": "Low-profile"
    },
    cta: "Get a Quote"
  },
  {
    slug: "roman-shades",
    name: "Roman Shades",
    blurb: "Tailored folds with hidden tracks.",
    bullets: [
      "Custom workrooms",
      "Pattern matching",
      "Soft close"
    ],
    specs: { 
      "Customization": "Fully tailored",
      "Finish": "Hidden tracks"
    },
    cta: "Get a Quote"
  },
  {
    slug: "exterior-zip-track",
    name: "Exterior Zip-Track Patio Blinds",
    blurb: "Wind-resistant outdoor comfort.",
    bullets: [
      "Windproof side tracks",
      "UV and insect protection",
      "Outdoor remote & app"
    ],
    specs: { 
      "Fabric": "High-tensile mesh",
      "Usage": "Wide spans"
    },
    cta: "Get a Quote"
  },
  {
    slug: "motorized-awnings",
    name: "Motorized Awnings",
    blurb: "Retractable shade with smart scheduling.",
    bullets: [
      "Sun/wind sensors",
      "LED lighting option",
      "Wide projection"
    ],
    specs: { 
      "Projection": "8–13 ft",
      "Frame": "Aluminum"
    },
    cta: "Get a Quote"
  }
];
