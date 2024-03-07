import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/img1.jpg'

export default async function page()  {
  return (
    <main>
   {/* <!-- Card Blog --> */}
  <section>
    {/* full image grid and flex */}
    {/* <!-- Card Blog --> */}
<div className="max-w-full px-2 sm:px-2 lg:px-8 lg:py-5 mx-auto">
  {/* <!-- Grid --> */}
  <div className="grid lg:grid-cols-2  gap-0.5">
    {/* <!-- Card --> */}
    <a className="group relative   dark:focus:outline-none " href="#">
      <div className="flex-shrink-0 relative  overflow-hidden w-full lg:h-[723px] h-[350px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <Image className="size-full absolute top-0 start-0 object-cover" src={img1} alt="Image Description"/>
      </div>
      <div className="absolute top-0 inset-x-0 ">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* <!-- Avatar --> */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="size-[46px] border-2 border-white rounded-full" src="https://ishluxx.github.io/author/1504.jpg" width={50} height={50} alt="Image Description"/> 
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">
                Ish Luxx
              </h4>
              <p className="text-xs text-white/[.8]">
                march 01, 2024
              </p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 ">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            Facebook is creating a news section in Watch to feature breaking news
          </h3>
          <p className="mt-2 text-white/[.8]">
            Facebook launched the Watch platform in August
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

<div className='grid lg:grid-rows-2 gap-0.5'>
    {/* <!-- Card --> */}
    <a className="group relative block dark:focus:outline-none d" href="#">
      <div className="flex-shrink-0 relative  overflow-hidden w-full h-[360px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <Image className="size-full absolute top-0 start-0 object-cover" src={img1} alt="Image Description"/>
      </div>

      <div className="absolute top-0 inset-x-0 ">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* <!-- Avatar --> */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="size-[46px] border-2 border-white rounded-full" src="https://ishluxx.github.io/author/1504.jpg" width={50} height={50} alt="Image Description"/>
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">
                Ish Luxx
              </h4>
              <p className="text-xs text-white/[.8]">
                March 01, 2024
              </p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 ">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            What CFR (Conversations, Feedback, Recognition) really is about
          </h3>
          <p className="mt-2 text-white/[.8]">
            For a lot of people these days, Measure What Matters.
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
    {/* <!-- Card --> */}
    <a className="group relative block dark:focus:outline-none d" href="#">
      <div className="flex-shrink-0 relative  overflow-hidden w-full h-[360px] before:absolute before:inset-x-0 before:size-full before:bg-gradient-to-t before:from-gray-900/[.7] before:z-[1]">
        <Image className="size-full absolute top-0 start-0 object-cover" src={img1} alt="Image Description"/>
      </div>

      <div className="absolute top-0 inset-x-0 ">
        <div className="p-4 flex flex-col h-full sm:p-6">
          {/* <!-- Avatar --> */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image className="size-[46px] border-2 border-white rounded-full" src="https://ishluxx.github.io/author/1504.jpg" width={50} height={50} alt="Image Description"/>
            </div>
            <div className="ms-2.5 sm:ms-4">
              <h4 className="font-semibold text-white">
                Ish Luxx
              </h4>
              <p className="text-xs text-white/[.8]">
                March 01, 2024
              </p>
            </div>
          </div>
          {/* <!-- End Avatar --> */}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 ">
        <div className="flex flex-col h-full p-4 sm:p-6">
          <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/[.8]">
            What CFR (Conversations, Feedback, Recognition) really is about
          </h3>
          <p className="mt-2 text-white/[.8]">
            For a lot of people these days, Measure What Matters.
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>
</div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Card Blog --> */}
  </section>
<div className="max-w-[85rem] px-4 py-5 sm:px-6 lg:px-8 lg:py-5 mx-auto">
  <section>
  {/* <!-- Grid --> */}
  <h2 className='text-2xl px-4 mb-5 font-[poppine]'>HOW TO</h2>
  <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
    {/* <!-- Card --> */}
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={img1}  alt="Image Description"/>
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold">
            Studio by Preline
          </h3>
          <p className="mt-3">
            Produce professional, reliable streams easily leveraging Prelines innovative broadcast studio
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={img1} alt="Image Description"/>
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold">
            Onsite
          </h3>
          <p className="mt-3">
            Optimize your in-person experience with best-in-className capabilities like badge printing and lead retrieval
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={img1} alt="Image Description"/>
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold ">
            The complete guide to OKRs
          </h3>
          <p className="mt-3 ">
            How to make objectives and key results work for your company
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}

    {/* <!-- Card --> */}
    <a className="group rounded-xl overflow-hidden :focus:outline-none dark:focus:ring-1" href="#">
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl" src={img1} alt="Image Description"/>
        </div>

        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold">
            People program models
          </h3>
          <p className="mt-3">
            Six approaches to bringing your People strategy to life
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Read more
            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </p>
        </div>
      </div>
    </a>
    {/* <!-- End Card --> */}
  </div>
  {/* <!-- End Grid --> */}
  </section>
</div>
{/* <!-- End Card Blog --> */}
</main>
  )
}