"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categoriesToDisplay = [ "Real Estate"]; // Add the categories you want to display here

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3006/post", { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        // Filter and validate posts based on categories
        const filteredPosts = data.filter(post => post && post.categories && categoriesToDisplay.some(category => post.categories.includes(category)));
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle error, e.g., display a message to the user or retry fetching
      }
    };

    fetchPosts();
  }, [categoriesToDisplay]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <div className="">
            <div className="f">
              <Link href={`/posts/${post.id}`} className="">
                <h3 className=" ">{post.title}</h3>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
