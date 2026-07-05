import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section className="mt-20">

      {/* Header */}
      <div className="mb-10">

        <p
          className="
          text-orange-500
          uppercase
          tracking-[3px]
          text-sm
          "
        >
          Experience
        </p>

        <h2
          className="
          text-5xl
          font-black
          mt-2
          "
        >
          Career Journey
        </h2>

      </div>

      {/* Timeline */}

      <div className="relative">

        {/* Vertical Line */}

        <div
          className="
          hidden
          md:block
          absolute
          left-[160px]
          top-0
          bottom-0
          w-[2px]
          bg-orange-500/40
          "
        />

        {portfolioData.experiences.map((exp, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .4,
            }}
            className="
            relative
            grid
            md:grid-cols-[140px_1fr]
            gap-8
            mb-8
            "
          >

            {/* Year */}

            <div>

              <span
                className="
                 text-orange-500
                 text-sm
                 font-semibold
                 tracking-wide
                 whitespace-nowrap
                 mr-2
                "
              >
                {exp.year}
              </span>

            </div>

            {/* Timeline Dot */}

            <div
              className="
              hidden
              md:block
              absolute
              left-[154px]
              top-2
              w-3
              h-3
              rounded-full
              bg-orange-500
              border-2
              border-[#111]
              "
            />

            {/* Card */}

            <motion.div
              whileHover={{
                y: -4,
              }}
              transition={{
                duration: .25,
              }}
              className="
              bg-[#181818]
              border
              border-[#2a2a2a]
              rounded-2xl
              p-6
              hover:border-orange-500/60
              transition-all
              "
            >

              <h3
                className="
                text-xl
                font-bold
                "
              >
                {exp.role}
              </h3>

              <p
                className="
                text-orange-500
                font-medium
                mt-1
                "
              >
                {exp.company}
              </p>

              <p
                className="
                text-gray-500
                text-sm
                mt-1
                "
              >
                {exp.location}
              </p>

              <p
                className="
                mt-4
                text-gray-400
                text-[15px]
                leading-7
                "
              >
                <span className="font-semibold text-white">
                  {exp.achievement}
                </span>{" "}
                {exp.description}
              </p>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}