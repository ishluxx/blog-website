import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/img1.jpg'

const page = () => {
  return (
    <main>
   {/* <!-- Blog Article --> */}
<div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div className="max-w-2xl">
    {/* <!-- Avatar Media --> */}
    <div className="flex justify-between items-center mb-6">
      <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div className="flex-shrink-0">
          <Image className="size-12 rounded-full" src={img1} alt="Image Description"/>
        </div>
        <div className="grow">
          <div className="flex justify-between items-center gap-x-2">
            <div>
              {/* <!-- Tooltip --> */}
              <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                  <span className="font-semibold text-black ">
                    Leyla Ludic
                  </span>
                </div>
              </div>
              {/* <!-- End Tooltip --> */}
              <ul className="text-xs text-black">
                <li className="inline-block  pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                  Jan 18
                </li>
              </ul>
            </div>
            {/* <!-- Button Group --> */}
            <div>
              <button type="button" className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                <svg className="size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                Twitter
              </button>
            </div>
            {/* <!-- End Button Group --> */}
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Avatar Media --> */}
    {/* <!-- Content --> */}
    <div className="space-y-5 md:space-y-8">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold md:text-3xl text-black">Announcing a free plan for small teams</h2>
        <p className="text-lg text-black">At preline, our mission has always been focused on bringing openness and transparency to the design process. ve always believed that by providing a space where designers can share ongoing work not only empos them to make better products, it also helps them grow.</p>
      </div>
      <p className="text-lg text-black">re proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>
      <figure>
        <Image className="w-full object-cover rounded-xl" src={img1} alt="Image Description"/>
        <figcaption className="mt-3 text-sm text-center text-black">
          A woman sitting at a table.
        </figcaption>
      </figure>
      <p className="text-lg text-black">As ve grown, ve seen how Preline has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. ve also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>
      <p className="text-lg text-black">s why are excited to share that now have a <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">free version of Preline</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>
      <blockquote className="text-center p-4 sm:px-7">
        <p className="text-xl font-medium text-black md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
          To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
        </p>
        <p className="mt-5 text-black">
          Nicole Grazioso
        </p>
      </blockquote>
      <figure>
        <Image className="w-full object-cover rounded-xl" src={img1} alt="Image Description"/>
        <figcaption className="mt-3 text-sm text-center text-black">
          A man and a woman looking at a cell phone.
        </figcaption>
      </figure>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold ">Bringing the culture of sharing to everyone</h3>
        <p className="text-lg text-black">know the po of sharing is real, and want to create an opportunity for everyone to try Preline and explore how transformative open communication can be. Now you can have a team of one or two designers and unlimited spectators (think PMs, management, marketing, etc.) share work and explore the design process earlier.</p>
      </div>
      <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-black ">
        <li className="ps-2">Preline allows us to collaborate in real time and is a really great way for leadership on the team to stay up-to-date with what everybody is working on  <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">said</a> Stewart Scott-Curran, Intercoms Director of Brand Design.</li>
        <li className="ps-2">Preline opened a new way of sharing.  a persistent way for everyone to see and absorb each  said David Scott, Creative Director at <a className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Eventbrite</a>.</li>
      </ul>
      <p className="text-lg text-black">Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if its a fellow designer, product manager, developer or client. Preline allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>
    </div>
    {/* <!-- End Content --> */}
  </div>
</div>
</main>
  )
}

export default page