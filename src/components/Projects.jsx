import {
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";


export default function Projects() {
  return (
    <section className="mt-24">

      {/* Header */}

      <div className="mb-14">

        <p className="!text-orange-500 uppercase tracking-[3px] text-sm">
          Portfolio
        </p>

        <h2 className="text-5xl font-black mt-3">
          Featured Projects
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl">
          A selection of enterprise applications, SaaS products and
          engineering projects focused on scalability, performance and clean
          architecture.
        </p>

      </div>

      <div className="space-y-8">

        {portfolioData.projects.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: .25,
            }}
            className="
            group
            bg-[#181818]
            border
            border-[#2a2a2a]
            rounded-3xl
            overflow-hidden
            hover:border-orange-500/30
            transition-all
            "
          >

            <div className="grid lg:grid-cols-[320px_1fr]">

              {/* Image */}

              <div className="p-5">

                <div
                  className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#2d2d2d]
                  "
                >

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                    w-full
                    aspect-video
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    "
                  />

                </div>

              </div>

              {/* Content */}

              <div className="p-8 flex flex-col">

                <h3 className="text-3xl font-black leading-tight">

                  {project.title}

                </h3>

                <p
                  className="
                  mt-4
                  text-gray-400
                  leading-7
                  line-clamp-2
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3
                      py-1.5
                      rounded-full
                      bg-[#222]
                      border
                      border-[#333]
                      text-sm
                      hover:border-orange-500
                      transition
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Links */}

                <div className="flex gap-6 mt-8">

                  {project.github_status && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      !text-orange-500
                      "
                    >

                      <ExternalLink size={18} />

                      GitHub Link

                    </a>

                  )}

                  {project.live_status && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      gap-2
                      !text-orange-500
                      hover:text-orange-400
                      transition
                      "
                    >

                      <ExternalLink size={18} />

                      Live Demo

                    </a>

                  )}


                  {project.caseStudy_status && (

                    <div className="relative inline-block">
                      <a
                        href={project.caseStudy}
                        target="_blank"
                        rel="noreferrer"
                        className="peer inline-flex items-center gap-2 !text-orange-500 hover:text-orange-400 transition"
                      >
                        <ExternalLink size={18} />
                        Read Case Study
                      </a>

                      <div
                        className="
                          absolute
                          left-full
                          top-1/2
                          ml-3
                          -translate-y-1/2

                          opacity-0
                          invisible

                          peer-hover:opacity-100
                          peer-hover:visible

                          transition-all
                          duration-200

                          rounded-lg
                          border
                          border-[#333]
                          bg-[#1b1b1b]
                          px-3
                          py-2

                          whitespace-nowrap
                          text-xs
                          text-gray-300
                        "
                      >
                        Opens on LinkedIn
                      </div>
                    </div>

                  )}

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}