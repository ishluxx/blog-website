import { BlogPost, BlogPostsResponse } from "@/models/BlogPost";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Disp from "@/app/disp";
import TableOfContents from "@/components/TableofContents";

interface BlogPostPageProps {
  params: { Id: string };
}

export async function generateMetadata({params: { Id }}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`http://localhost:3006/post/${Id}`);
  const post: BlogPost = await response.json();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.imageUrl
        }
      ]
    }
  };
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function BlogPostPage({ params: { Id }}: BlogPostPageProps) {
  const response = await fetch(`http://localhost:3006/post/${Id}`);
  const {
    author,
    authorImage,
    date,
    title,
    imageUrl,
    content,
    categories,
  }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }
  
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* <!-- Blog Article --> */}
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8 m-auto ">
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6 justify-end">
          {/* <!-- Content --> */}
          <div className="lg:col-span-2">
            <div className="py-3 lg:pe-8">
              <div className="space-y-4 lg:space-y-8">
                <Link
                  className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2  no-underline "
                  href="/"
                >
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  Back to Blog
                </Link>
                <div className="text-center">
                  <div className="grid lg:grid-cols-2 gap-3">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                      <figure className="relative w-full h-10">
                        <div className="flex items-center">
                          <Image
                            src={authorImage}
                            alt={author}
                            width={50}
                            height={50}
                            className=" rounded-full mb-2 "
                          />
                          <div className="px-4">
                            <p className="text-black text-left">
                              Written by {author}
                            </p>
                            <p className="text-gray-600  ">
                              {new Date(date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="max-w-2xl mx-auto py-5">
                    <h1 className="text-3xl font-bold mb-4  ">{title}</h1>
                    <div>
                      <Image
                        src={imageUrl}
                        width={550}
                        height={500}
                        alt={author}
                        className=" w-full lg:mb-2 rounded-xl"
                      />
                    </div>
                    <div className=" pl-4  mb-4 mt-3 lg:hidden ">
                    <TableOfContents content={content}/>
                    </div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{ __html: content }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Content --> */}
          {/* <!-- Sidebar --> */}
          <div className=" lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent ">
            <div className="lg:sticky top-0 start-0 py-8 lg:ps-8 ">            
                  <TableOfContents content={content}  />
                <div className="mt-10">
                  <h2 className="text-lg font-semibold mb-4">Popural Posts</h2>
                  <Disp />
                </div>
            </div>
          </div>
          </div>
          {/* <!-- End Sidebar --> */}
        </div>
      {/* <!-- End Blog Article --> */}
    </main>
  );
}
