const youtubeService = {
  async getVideos() {
    const response = await fetch("/api/youtube");

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube videos");
    }

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Unable to load videos");
    }

    return data.videos;
  },
};

export default youtubeService;