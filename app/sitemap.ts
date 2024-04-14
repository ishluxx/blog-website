import { BlogPostsResponse } from "@/models/BlogPost";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // const response = await fetch("https://jsonserver1-yblk.onrender.com/posts");
    const response = await fetch("https://dummyjson.com/posts");
    const { posts }: BlogPostsResponse = await response.json();

    if (!Array.isArray(posts)) {
      console.error("Posts data is not in the expected format.");
      return [];
    }

    const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
      url: `${process.env.SITE_URL}/posts/${id}`,
      lastModified: new Date(), // You can modify this according to your data if you have a last modified date for each post
      changeFrequency: "weekly",
      priority: 0.8 // Adjust priority as needed
    }));

    return [
      {
        url: `${process.env.SITE_URL}/About`,
        lastModified: new Date(), // You can modify this according to your data if you have a last modified date for the About page
        changeFrequency: "monthly", // Adjust frequency as needed
        priority: 1 // Adjust priority as needed
      },
      ...postEntries,
    ];
  } catch (error) {
    console.error("Error fetching or processing data:", error);
    return [];
  }
}
