import Image from "next/image";
import Link from "next/link";

export default async function BlogPage() {
  const response = await fetch(`http://localhost:3006/posts?_limit=4&_random=true`, { cache: 'no-store' });
  const data = await response.json();

  return (
    <div className="max-w-7xl m-auto grid grid-cols-1 lg:grid-cols-2">
      {data.map(({ id, title, date, author, authorImage, imageUrl }) => (
        <div key={title} className="px-1 py-1">
          <div className=" group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="${postData.authorImage}">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
              <Image className="size-full absolute top-0 start-0 object-cover" src={imageUrl} alt={title} width={500} height={500} />
            </div>
            <div className=" absolute top-0 inset-x-0">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image className="size-[46px] border-2 border-white rounded-full" src={authorImage} alt={author} width={50} height={50} />
                    <div className="flex space-x-5">
                      <div className="text-white font-semibold">{author}</div>
                      <div className="text-white">
                      <div className="flex px-1 gap-3 ">
                            <p className=" ">
                              {new Date(date).toString().slice(0,15)}
                            </p>
                            {/* <p className=" ">
                              {new Date(date).toString().slice(16,24)}
                            </p> */}
                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <Link href={`/posts/${id}`} className="text-lg font-bold">
                  <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">{title}</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}