
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.js";




export default function Skills() {
  return (
    <section className="mt-24">

      <div className="mb-16">
        <p className="text-orange-500 uppercase tracking-[3px] text-sm">
          Skills
        </p>

        <h2 className="text-5xl font-black mt-3">
          Technical Expertise
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {portfolioData.skillCategories.map((category) => (

          <motion.div
            key={category.title}
            whileHover={{ y: -6 }}
            className="
              bg-[#181818]
              border
              border-[#2a2a2a]
              rounded-3xl
              p-7
              transition-all
              hover:border-orange-500/50
            "
          >
            <div className="flex items-center mb-6">

              <h3 className="text-xl font-bold">
                {category.title}
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">

              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-3
                    py-2
                    rounded-full
                    bg-[#222]
                    border
                    border-[#333]
                    text-sm
                    hover:border-orange-500
                    transition
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}