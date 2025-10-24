export interface FAQ {
  q: string;
  a: string;
}

export const generalFAQs: FAQ[] = [
  {
    q: "How long does installation take?",
    a: "Often 1 day per room or patio, depending on scope. Larger projects may require additional time for proper installation and programming."
  },
  {
    q: "Battery vs hardwired - which is better?",
    a: "We recommend based on your window span and usage patterns. Both support smart scenes and voice control. Battery systems offer flexibility, while hardwired provides continuous power for high-traffic areas."
  },
  {
    q: "Do exterior blinds handle wind?",
    a: "Yes! Zip-track rails and tensioned fabric help resist sway and wind damage. We'll size and spec appropriately based on your location's typical wind conditions."
  },
  {
    q: "What's the lead time?",
    a: "Typically 1-3 weeks depending on product and fabric selection. Custom orders may require additional time."
  },
  {
    q: "What's included in the warranty?",
    a: "Up to 5 years on motors and components, with varying coverage depending on the product line and manufacturer."
  }
];

export const productFAQs: FAQ[] = [
  {
    q: "What fabrics are available?",
    a: "We offer everything from sheer light-filtering to complete blackout, including designer patterns, textures, and performance fabrics for specific needs like UV protection or energy efficiency."
  },
  {
    q: "Can I control multiple shades at once?",
    a: "Absolutely. Group control, room scenes, and whole-home automation are all supported through our smart home integration."
  },
  {
    q: "Are these child-safe?",
    a: "Yes. All motorized systems are completely cordless, eliminating traditional cord hazards."
  }
];

export const smartHomeFAQs: FAQ[] = [
  {
    q: "Do I need a hub?",
    a: "Often yes, depending on the motor brand and model. During your consultation, we'll map out your existing smart home ecosystem and recommend the best setup."
  },
  {
    q: "Will this work with my existing smart home?",
    a: "Most likely yes. We support Alexa, Google Home, and Apple HomeKit. We'll verify compatibility during your free consultation."
  },
  {
    q: "Can I still use a remote?",
    a: "Yes! All systems include physical remote control options in addition to voice and app control."
  }
];
