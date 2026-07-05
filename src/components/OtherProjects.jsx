import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import portfolioData from "../data/portfolioData.js";
const otherProjects = portfolioData.otherProjects;

export default function OtherProjects() {
  return (
    <section className="mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-orange-500 uppercase tracking-[3px] text-xs">
          Additional Work
        </p>

        <h2 className="text-4xl font-black mt-2">
          Other Projects
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl">
          A collection of commercial applications and internal business
          solutions I've contributed to throughout my software engineering
          career.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-5">
        {otherProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#2b2b2b] bg-[#181818] p-6 hover:border-orange-500 transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-bold text-white">
              {project.title}
            </h3>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs bg-[#262626] text-gray-300 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Modules */}
            <div className="mt-5">
              <p className="text-sm text-gray-400 mb-2">
                Modules
              </p>

              <div className="flex flex-wrap gap-2">
                {project.modules.map((module) => (
                  <span
                    key={module}
                    className="text-xs bg-orange-500/10 text-orange-400 border border-orange-500/20 px-3 py-1 rounded-full"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Links */}
            {project.links && (
              <div className="mt-6">
                <p className="text-sm text-gray-400 mb-3">
                  Live Project
                </p>

                <div className="flex flex-col gap-2">
                  {project.links.map((site) => (
                        <a
                        key={site.url}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                        >
                        <ExternalLink size={15} />
                        <span>{site.name}</span>
                        </a>
                  ))}
                </div>

                 {/* Industry */}
            {project.industry && (
              <div className="mt-5">
                <p className="text-sm text-gray-400 mb-2">
                  Industry Covered
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.industry.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-[#262626] text-white px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}