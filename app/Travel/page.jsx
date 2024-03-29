"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categoriesToDisplay = [ "Lifestyle & Fashion","Beauty & Skincare" ,"Travel & Tourism"]; // Add the categories you want to display here

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
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto' >
      <div className='lg:gap-y-16 gap-10'>
        {/* card */}
        <div className='grid lg:grid-cols-2 ' >
          {posts.map(({ id, title, date, author, authorImage, imageUrl,description })=> (
              <div key={id} className='sm:flex py-2'>
                <div className='flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44'>
                  <Image src={imageUrl} className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"  alt={author} width={310} height={310}/>
               </div>
                  <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
                    <h3 className='text-xl font-semibold text-gray-800 '>
                      {title}
                    </h3>
                    <p className='text-gray-500'>{`${description.slice(0,100)}...`}</p>
                    <div className="f">
                      <Link href={`/posts/${id}`} className="">
                        <h3 className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline-none font-medium ">Read More
                        <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                        </h3>
                      </Link>
                    </div>
                  </div>
            </div>
          ))}
       </div>
       {/* end of card */}
      </div>
    </div>
  );
}
