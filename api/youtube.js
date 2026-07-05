import { XMLParser } from "fast-xml-parser";

const CHANNEL_ID = "UCLhYcB77kbGgJ0N2L_H0iiw";

const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export default async function handler(req, res) {
    try {
        const response = await fetch(RSS_URL);

        if (!response.ok) {
            return res.status(500).json({
                success: false,
                message: "Unable to fetch YouTube RSS Feed"
            });
        }

        const xml = await response.text();

        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "",
        });

        const json = parser.parse(xml);

        const entries = json.feed.entry || [];

        const videos = entries.map((video) => {

            const videoId = video["yt:videoId"];

            return {
                id: videoId,
                title: video.title,
                link: video.link.href,
                published: video.published,

                thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,

                description:
                    typeof video["media:group"]?.["media:description"] === "string"
                        ? video["media:group"]["media:description"]
                        : "",

                author:
                    video.author?.name || "",

                views: null
            };
        });

        res.setHeader(
            "Cache-Control",
            "s-maxage=3600, stale-while-revalidate"
        );

        return res.status(200).json({
            success: true,
            videos
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}