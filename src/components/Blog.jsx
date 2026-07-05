import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "Building Multi-Tenant SaaS with Laravel",
    category: "Laravel",
    date: "June 2026",
    description:
      "Learn how to architect scalable multi-tenant SaaS applications using Laravel and clean architecture.",
  },

  {
    title: "React Performance Optimization",
    category: "React",
    date: "May 2026",
    description:
      "Best practices to improve React application performance and user experience.",
  },

  {
    title: "AWS Deployment Guide for Laravel",
    category: "AWS",
    date: "April 2026",
    description:
      "Complete deployment workflow using EC2, Nginx, SSL and Supervisor.",
  },
];

export default function Blog() {
  return (
    <section className="mt-24">

      <div className="mb-16">
        <p className="text-orange-500 uppercase tracking-[3px] text-sm">
          Articles
        </p>

        <h2 className="text-5xl font-black mt-3">
          Latest Insights
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">

        {blogs.map((blog, index) => (
          <motion.article
            key={index}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
            bg-[#181818]
            border
            border-[#2a2a2a]
            rounded-3xl
            p-6
            hover:border-orange-500
            transition
            "
          >
            <div className="flex justify-between items-center">
              <span
                className="
                text-xs
                uppercase
                text-orange-500
                tracking-wider
                "
              >
                {blog.category}
              </span>

              <ArrowUpRight size={18} />
            </div>

            <h3
              className="
              text-2xl
              font-bold
              mt-6
              "
            >
              {blog.title}
            </h3>

            <p
              className="
              text-gray-400
              mt-4
              leading-relaxed
              "
            >
              {blog.description}
            </p>

            <div
              className="
              mt-8
              pt-4
              border-t
              border-[#2a2a2a]
              "
            >
              <span className="text-sm text-gray-500">
                {blog.date}
              </span>
            </div>
          </motion.article>
        ))}

      </div>
    </section>
  );
}