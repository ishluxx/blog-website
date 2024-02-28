import React from 'react'
import img1 from '@/assets/img1.jpg'
import Image from 'next/image'

const Post = () => {
  return (
      <main className='lg:grid grid-cols-2 px-2'>
             <div className='py-1 px-2'>
            <Image

              src={img1}
              alt='image'
              width={700}
              height={700}
              priority
            />
              <div className='px-3'>
                <p className='font-bold  capitalize '>posted on 21/1/20023</p>
                <p className='font-bold '>Writen by Luxx</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, deleniti odio optio suscipit rerum, qui assumenda, soluta earum harum at quasi? Quidem, quaerat tenetur ab distinctio nemo ex ducimus placeat.
                </p>
                </div>
            </div>
        <div className=' lg:grid grid-rows-2 '>
             <div className='lg:grid grid-cols-2 py-1 '>
             <Image
             className='sm:w-full w-[180] '
              src={img1}
              alt='image'
              width={300}
              height={300}
              priority
              />
               <div className='px-3'>
                <p className='font-bold  capitalize '>posted on 21/1/20023</p>
                <p className='font-bold '>Writen by Luxx</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, deleniti odio optio suscipit rerum, qui assumenda, soluta earum harum at quasi? Quidem, quaerat tenetur ab distinctio nemo ex ducimus placeat.
                </p>
                </div>
               </div>
             <div className='lg:grid grid-cols-2  '>
             <Image
             className='sm:w-full w-[180] '
              src={img1}
              alt='image'
              width={300}
              height={300}
              priority
              />
               <div className='px-3'>
                <p className='font-bold  capitalize '>posted on 21/1/20023</p>
                <p className='font-bold '>Writen by Luxx</p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, deleniti odio optio suscipit rerum, qui assumenda, soluta earum harum at quasi? Quidem, quaerat tenetur ab distinctio nemo ex ducimus placeat.
                </p>
                </div>
               </div>
              </div>
      </main>
    )
}

export default Post