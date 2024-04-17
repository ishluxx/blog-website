"use client"
import Link from 'next/link'
export default function Example() {

  return (
    <main className='md:flex justify-between max-w-7xl m-auto' >
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Contact Us at the email address given below. Before contacting the Get-Soltion team, please make sure that you follow the below guidelines.
          </p>
          <ul>
            <li>You are not trying to spam</li>
            <li>The message is well explained</li>
            <li>Ready to reply to our</li>
          </ul>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          you can contact us at <span className='text-red-500'>demo@getsolution.com</span>
          </p>
          <div className='mt-5'>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          As we receive numerous messages, it may take us a few hours to several days to reply
           to your queries. So, be patient and wait for our reply. We will try our maximum to reply to each 
           one of your messages as soon as possible. If you can’t find a reply within 3 days, you can resend the
            mail again. Do not resubmit a message without waiting at least 3 days.
          </p>
          </div>
        </div>
        </div>
    <div className=" px-6 py-6 sm:py-6 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
      </div>
      </div>
    </main>
  )
}