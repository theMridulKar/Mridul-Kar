import { motion } from "framer-motion";
import { Play, Calendar, ArrowUpRight } from "lucide-react";

export default function YouTubeCard({ video }) {
  const publishDate = new Date(video.published).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <motion.a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#151515]
        hover:border-red-500/40
        transition-all
        duration-300
      "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="
            w-full
            aspect-video
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/30
            opacity-0
            group-hover:opacity-100
            transition
          "
        />

        {/* Play Button */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-16
              h-16
              rounded-full
              bg-red-600
              flex
              items-center
              justify-center
              scale-90
              group-hover:scale-100
              transition
              shadow-xl
            "
          >
            <Play
              className="text-white ml-1"
              fill="white"
              size={28}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
          <Calendar size={15} />
          {publishDate}
        </div>

        {/* Title */}
        <h3
          className="
            text-white
            text-xl
            font-semibold
            leading-8
            line-clamp-2
            group-hover:text-red-500
            transition-colors
          "
        >
          {video.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-4
            text-gray-400
            text-sm
            leading-7
            line-clamp-3
          "
        >
          {video.description}
        </p>

        {/* Footer */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <span className="text-red-500 font-medium">
            Watch Video
          </span>

          <ArrowUpRight
            className="
              text-red-500
              transition-transform
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            size={20}
          />
        </div>
      </div>
    </motion.a>
  );
}