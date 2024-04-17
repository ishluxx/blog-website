import React from 'react'
import Post from '@/app/post'
import Howto from'@/app/categories/Howto/page'
import Troubleshoot from '@/app/categories/Troubleshoot/page'
import Travel from '@/app/categories/Travel/page'
import Social from '@/app/categories/Social/page'
import Finance from '@/app/categories/Finance/page'
import Education from '@/app/categories/Education/page'
import Top10 from '@/app/categories/Top10/page'

const page = () => {
  return (
    <main>
    <div>
      <Post/>
      <div className="max-w-2xl  mt-5  px-12 mb-3 ">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>how to </h1>
  </div>
      <Howto/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Troubleshoot </h1>
  </div>
      <Troubleshoot/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Travel </h1>
  </div>
      <Travel/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Social </h1>
  </div>
      <Social/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Finance </h1>
  </div>
      <Finance/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Education </h1>
  </div>
      <Education/>
      <div className="max-w-2xl  px-12 mb-3">
      <h1 className='text-1xl mx-20 font-bold md:text-3xl md:leading-tight text-black'>Top10 </h1>
  </div>
      <Top10/>
    </div>
    </main>
  )
}

export default page