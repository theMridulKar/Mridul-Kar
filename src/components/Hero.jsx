import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData.js";

export default function Hero() {
  return (
    <section className="pb-40">

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1
          className="
          text-[60px]
          md:text-[90px]
          lg:text-[110px]
          font-black
          leading-[0.9]
          tracking-tight
          "
        >
          SOFTWARE
          <br />

          <span className="text-[#2d2d2d]">
            ENGINEER
          </span>
        </h1>

        <p
          className="
          text-gray-400
          max-w-xl
          mt-6
          leading-relaxed
          "
        >
          <span className="text-orange-500"> {portfolioData.personal.skills} </span>
          <br />
          {portfolioData.personal.shortDescription}
        </p>
      </motion.div>

      {/* Stats */}
      <div
        className="flex flex-wrap gap-8 mt-10">
        <div>
          <h3 className="text-5xl font-black text-white">
            {portfolioData.summary.experience}
          </h3>

          <p className="text-xs text-gray-500 mt-2 uppercase">
            Years of Experience
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-black text-white">
            {portfolioData.summary.projects}
          </h3>

          <p className="text-xs text-gray-500 mt-2 uppercase">
            Projects Completed
          </p>
        </div>

        <div>
          <h3 className="text-5xl font-black text-white">
            {portfolioData.summary.clients}
          </h3>

          <p className="text-xs text-gray-500 mt-2 uppercase">
            Clients Served (Including SaaS)
          </p>
        </div>
      </div> 

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">

        {portfolioData.cards.map((card) => (

          <motion.div
            key={card.title}
            whileHover={{
              y: -8,
              scale: 1.01,
            }}
            transition={{
              duration: .25,
            }}
            className={`
              ${card.className}
              relative
              overflow-hidden
              min-h-[220px]
              px-7
              py-6
              rounded-3xl
              transition-all
              shadow-lg
            `}
          >

            {/* Header */}

            <div className="flex items-center gap-3 mb-4">

              <card.icon
                size={24}
                className="relative z-10"
              />

              <p
                className="
                uppercase
                tracking-[4px]
                text-xs
                relative
                z-10
                "
              >
                {card.title}
              </p>

            </div>

            {/* Title */}

            <h3
              className="
              text-[36px]
              font-black
              leading-none
              relative
              z-10
              "
            >
              {card.subTitle}
            </h3>

            {/* Tags */}

            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-6
              relative
              z-10
              "
            >

              {card.items.map((item) => (

                <span
                  key={item}
                  className="
                  px-3.5
                  py-1.5

                  rounded-full

                  bg-black/10
                  backdrop-blur-sm

                  border
                  border-white/20

                  text-[13px]
                  font-medium

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:-translate-y-1
                  hover:bg-white/10
                  hover:border-white/40
                  "
                >
                  {item}
                </span>

              ))}

            </div>

            {/* Background Pattern */}

            <div
              className="
              absolute
              inset-0
              opacity-[0.06]
              bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)]
              bg-[length:26px_26px]
              "
            />

          </motion.div>

        ))}

      </div>
    </section>
  );
}