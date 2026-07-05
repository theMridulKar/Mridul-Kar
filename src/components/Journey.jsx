import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

export default function Journey() {
  return (
    <section className="mt-24">

      {/* Header */}
      <div className="mb-12">
        <p className="text-orange-500 uppercase tracking-[3px] text-sm">
          Journey
        </p>

        <h2 className="text-5xl font-black mt-3">
          Moments from My Professional Journey
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          A collection of snapshots from real-world projects, client meetings,
          team collaborations, product deployments, and industry events throughout my career.
        </p>
      </div>

      {/* Gallery */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {portfolioData.journey.map((image, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            transition={{
              duration: .25,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[#2b2b2b]
              bg-[#181818]
            "
          >

            <img
              src={image.image}
              alt={image.title}
              className="
                h-64
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-110
              "
            />

            {/* Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent

                opacity-0
                group-hover:opacity-100

                transition
                duration-300

                flex
                items-end
                p-6
              "
            >

              <div>

                <h3 className="text-xl font-bold">
                  {image.title}
                </h3>

                <p className="text-sm text-gray-300 mt-2">
                  {image.description}
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}