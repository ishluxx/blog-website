import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa'
import { footerLinks } from '@/constant'
export default function Footer() {
  return (
     <main className=' text-white flex justify-center w-full h-94 bottom-0 mx-auto bg-blue-500 ' >
      <div className='mt-8'>
        <div className='flex justify-center mb-3 font-[Poppins] gap-3'>
          <Link href='/About'>About Us</Link>
          <Link href='/contact'>Contact Us</Link>
          {/* <Link href='/posts'>Blog</Link> */}
        </div>
        <div className='flex justify-center text-2xl gap-5' >
          <FaFacebook />
          <FaInstagram />
          <FaPinterestP />
          <FaTwitter />
          {/* <FaYoutube /> */}
        </div>
        <div className='mt-4 text-center px-3' >
          <p className=' flex justify-center'> &copy;2023- an Affiliate advertising program designed to provide a means for sites to </p>
           <p className=' flex justify-center' >earn advertising fees by advertising and linking to amazon.com</p>
        </div>
             <ul className='md:flex justify-center mt-4 mb-5 px-3 gap-2 grid grid-cols-2 '>
              {footerLinks.map((links)=>(
                <li key={links} className='md:cursor-pointer'>
                  <a href={links.href}>{links.label}</a>
                </li>
              ))}
             </ul>
      </div>
     </main>
  )
}
