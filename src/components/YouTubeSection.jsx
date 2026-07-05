import { motion } from "framer-motion";
import {
  PlayCircle,
  Loader2,
  AlertCircle,
} from "lucide-react";

import YouTubeCard from "./YouTubeCard";
import useYoutubeVideos from "../hooks/useYoutubeVideos";

export default function YouTubeSection() {
  const { videos, loading, error } = useYoutubeVideos();

  return (
    <section
      id="youtube"
      className="relative mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2">
            <PlayCircle className="text-red-500" size={18} />

            <span className="text-red-400 uppercase tracking-[3px] text-xs">
              YouTube | Tech Talks
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Latest
            <span className="text-red-500"> Videos</span>
          </h2>

          {/* <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-8 text-left">
            I regularly publish videos about Laravel,
            Backend Development, System Design,
            Software Engineering and Career.
          </p> */}
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-20">
            <Loader2
              className="animate-spin text-red-500"
              size={40}
            />
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-20">

            <AlertCircle
              size={42}
              className="mx-auto text-red-500 mb-4"
            />

            <h3 className="text-white text-xl font-semibold">
              Failed to load YouTube videos
            </h3>

            <p className="text-gray-400 mt-3">
              {error}
            </p>

          </div>
        )}

        {/* Videos */}
        {!loading && !error && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: .1,
                },
              },
            }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <YouTubeCard video={video} />
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}