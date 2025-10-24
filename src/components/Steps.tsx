import { CheckCircle2 } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Free Consultation",
    description: "Schedule a free in-home visit to discuss your needs and preferences."
  },
  {
    number: 2,
    title: "Measure & Design",
    description: "We take precise measurements and help you select fabrics and features."
  },
  {
    number: 3,
    title: "Custom Manufacturing",
    description: "Your shades are custom-built to your exact specifications."
  },
  {
    number: 4,
    title: "Professional Installation",
    description: "Our expert team installs your motorized system perfectly."
  },
  {
    number: 5,
    title: "Smart Programming",
    description: "We configure scenes, schedules, and smart home integration."
  }
];

const Steps = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            From consultation to installation, we make the process seamless
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="glass rounded-2xl p-6 text-center h-full glow-ring-hover transition-all duration-300 hover:-translate-y-2">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand to-accent mb-4 glow-ring">
                    <span className="font-display text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specs Bar */}
        <div className="mt-12 glass rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-display font-bold text-brand mb-1">7–21 Days</p>
              <p className="text-sm text-muted">Lead Times</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-brand mb-1">Up to 5 Years</p>
              <p className="text-sm text-muted">Warranty</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-brand mb-1">24/7</p>
              <p className="text-sm text-muted">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
