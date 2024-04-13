import { MetadataRoute } from 'next'
import { BlogPostsResponse } from "@/models/BlogPost";
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`http://localhost:3006/posts?_limit=4&_random=true`, { cache: 'no-store' });
  const data = await response.json();

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    }
  ];
}