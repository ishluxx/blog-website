"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3006/posts?_limit=5&_random=true", { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        // Shuffle the data array randomly
        const shuffledData = shuffleArray(data);
        // Slice the shuffled array to get only 6 posts
        const limitedPosts = shuffledData.slice(0, 10);
        setPosts(limitedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle error, e.g., display a message to the user or retry fetching
      }
    };

    fetchPosts();
  }, []);

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div>
      {posts.map(({ id, title , imageUrl,author }) => (
        <div key={id}>
          <div className="">
          <a class="group flex items-center gap-x-6" href="#">
            <div class="grow py-3">
            <span className="group flex items-center gap-x-6 ">
              <Link href={`/posts/${id}`} className='grow space-y-3' >
                <h3 className="text-sm font-bold space-y-2 text-gray-800 group-hover:text-blue-600 ">{title}</h3>
              </Link>            
            </span>
             
            </div>
{/*
            <div class="flex-shrink-0 relative rounded-lg overflow-hidden size-20">
              <Image class="size-full absolute top-0 start-0 object-cover rounded-lg" src={imageUrl} alt={author} width={70} height={70}/>
            </div> */}
          </a>
          </div>
        </div>
      ))}
    </div>
  );
}
