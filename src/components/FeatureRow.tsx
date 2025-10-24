import { Check } from "lucide-react";

interface FeatureRowProps {
  title: string;
  description: string;
  features: string[];
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

const FeatureRow = ({
  title,
  description,
  features,
  imageSrc,
  imagePosition = "right"
}: FeatureRowProps) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
      imagePosition === "left" ? "lg:flex-row-reverse" : ""
    }`}>
      <div className={`${imagePosition === "left" ? "lg:order-2" : ""}`}>
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-muted text-lg mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="mt-1 p-1 rounded-full bg-brand/10">
                <Check className="h-4 w-4 text-brand" />
              </div>
              <span className="text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {imageSrc && (
        <div className={`relative ${imagePosition === "left" ? "lg:order-1" : ""}`}>
          <div className="relative glass rounded-2xl overflow-hidden glow-ring aspect-video">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureRow;
