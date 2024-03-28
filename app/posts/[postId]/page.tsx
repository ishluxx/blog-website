import { delay } from "@/lib/utils";
import { BlogPost, BlogPostsResponse } from "@/models/BlogPost";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Disp from'@/app/disp';


interface BlogPostPageProps { params: { postId: string };}

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`http://localhost:3006/post/${postId}`);
  const post: BlogPost = await response.json();

  return {
    title: post.title,
    description: post.description,
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}


export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`http://localhost:3006/post/${postId}`);
  const { author,authorImage,date,title,imageUrl,content,categories }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);

 
  return (
    <main>
       {/* <!-- Blog Article --> */}
<div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
  <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
    {/* <!-- Content --> */}
    <div className="lg:col-span-2">
      <div className="py-3 lg:pe-8">
        <div className="space-y-4 lg:space-y-8">
        <Link className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2  no-underline " href="/">
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Back to Blog
          </Link>
          <div className="text-center">
            <div className="grid lg:grid-cols-2 gap-3">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                <figure className="relative w-full h-10">
                    <div className="flex items-center">
                    <Image src={authorImage} alt={author} width={50} height={50} className=" rounded-full mb-2 "/>
                     <div className="px-4">
                        <p className="text-black text-left">Written by {author}</p>
                        <p className="text-gray-600  ">{new Date(date).toLocaleDateString()}</p>
                     </div>
                    </div>
                </figure>
              </div>
            </div>
          </div>
          <div>
          <div className="max-w-3xl mx-auto py-5">
          <h1 className="text-3xl font-bold mb-4  ">{title}</h1>
          <div>
            <Image src={imageUrl} width={650} height={500} alt={author} className=" size-full rounded-xl"/>
          </div>
          <div className="flex items-center mb-4">
          </div>
          <div className='content' dangerouslySetInnerHTML={{ __html: content }}></div>
         </div>
          </div>
          <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
            {/* <!-- Badges/Tags --> */}
            <div>
              <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 :800 :-gray-700 :y-200 :tline-none :ng-1 :ng-gray-600" href="#">
                Free
              </a>
              <a className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 :800 :-gray-700 :y-200 :tline-none :ng-1 :ng-gray-600" href="#">
                Team
              </a>
            </div>
            {/* <!-- End Badges/Tags --> */}

          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Content --> */}

    {/* <!-- Sidebar --> */}
    <div className="lg:col-span-1 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent :te-800">
      <div className="sticky top-0 start-0 py-8 lg:ps-8">
        {/* <!-- Avatar Media --> */}
        <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 :ray-700">
          <a className="block flex-shrink-0" href="#">
            <Image className="size-10 rounded-full" src={authorImage} alt={author} width={50} height={50}/>
          </a>

          <a className="group grow block" href="">
            <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 :ver:text-gray-400 :y-200">
              {author}
            </h5>
          </a>

          <div className="grow">
            <div className="flex justify-end">
              <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none :tline-none :ng-1 :ng-gray-600">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                Follow
              </button> 
            </div>
          </div>
        </div>
        {/* <!-- End Avatar Media --> */}
        <div className="space-y-6">
          {/* <!-- Media --> */}
          <div>
             <h2 className="text-lg font-semibold mb-4">Related Posts</h2>
            <Disp/>
           </div>
        </div>
      </div>
    </div>
    {/* <!-- End Sidebar --> */}
  </div>
</div>
{/* <!-- End Blog Article --> */}
    </main>
  );
}
