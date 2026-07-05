import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import portfolioData from "../data/portfolioData";

export default function Recommendations() {
  const recommendations = portfolioData.recommendations;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === recommendations.length - 1 ? 0 : prev + 1
      );
    }, 7000);

    return () => clearInterval(timer);
  }, [recommendations.length]);

  const item = recommendations[current];

  return (
    <section className="mt-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="uppercase tracking-[4px] text-orange-500 text-sm font-semibold">
          RECOMMENDATIONS
        </p>

        <h2 className="text-3xl lg:text-5xl font-black text-white mt-2">
          What Colleagues Say
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl leading-8">
          Feedback from my colleagues I've had the privilege of working with
          throughout my professional journey.
        </p>
      </motion.div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl
                        border
                        border-[#2a2a2a]
                        bg-[#171717]
                        p-6
                        md:p-10
                        min-h-[480px]
                        flex
                        flex-col
                        justify-between
                      "
          >
            <Quote
              size={42}
              className="text-orange-500 mb-6"
            />

            <div className="flex mb-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="#f97316"
                  className="text-orange-500"
                />
              ))}
            </div>

            <p className="text-gray-300 italic leading-8 text-base md:text-lg">
              "{item.message}"
            </p>

            <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border border-orange-500 object-cover"
                />

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {item.name}
                  </h3>

                  <p className="text-gray-400">
                    {item.position}
                  </p>

                  <p className="text-orange-500 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>

              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {recommendations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                current === index
                  ? "w-8 h-3 bg-orange-500"
                  : "w-3 h-3 bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}