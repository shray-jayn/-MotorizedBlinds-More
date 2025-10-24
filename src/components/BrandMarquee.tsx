import { motion } from "framer-motion";

const brands = [
  "Somfy®",
  "Dooya®",
  "A-OK®",
  "Nice®",
  "Rollease Acmeda®",
  "Gaposa®",
];

const BrandMarquee = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted text-sm mb-8">
          Trusted Motor Brands We Install
        </p>
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="text-lg font-medium text-muted hover:text-fg transition-colors whitespace-nowrap"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
