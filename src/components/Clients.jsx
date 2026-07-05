import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.js";
const clients = portfolioData.clients;

export default function Clients() {
  return (
    <section className="mt-24 w-full max-w-full overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className="text-orange-500 uppercase tracking-[3px] text-xs">
        ORGANIZATIONS
        </p>

        <h2 className="text-4xl font-black mt-2">
        Organizations Served
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
        A selection of notable reputed organizations whose software projects I successfully contributed to
        while working with software development companies throughout my professional
        career.
        </p>
      </motion.div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.05,
            }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-full border border-[#2b2b2b] bg-[#181818] overflow-hidden hover:border-orange-500 transition-all duration-300 flex items-center justify-center p-4">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <p className="mt-3 text-center text-gray-300 text-sm leading-5">
              {client.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}