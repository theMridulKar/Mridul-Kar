import { useEffect, useState } from "react";
import youtubeService from "../services/youtubeService";

export default function useYoutubeVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await youtubeService.getVideos();

      setVideos(data);
    } catch (err) {
      console.error(err);

      setError(
        err.message || "Failed to load YouTube videos."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return {
    videos,
    loading,
    error,
    refetch: fetchVideos,
  };
}