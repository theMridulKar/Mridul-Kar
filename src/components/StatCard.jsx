import { motion } from "framer-motion";

export default function StatCard({ number, title }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
      bg-[#181818]
      border
      border-[#2a2a2a]
      rounded-2xl
      p-6
      "
    >
      <h3
        className="
        text-4xl
        md:text-5xl
        font-black
        text-white
        "
      >
        {number}
      </h3>

      <p
        className="
        text-gray-500
        text-xs
        uppercase
        tracking-wider
        mt-3
        "
      >
        {title}
      </p>
    </motion.div>
  );
}