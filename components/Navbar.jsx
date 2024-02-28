import React from 'react'
import Image from 'next/image'
import logo from '@/assets/logo.png'
import icon from '@/public/icon1.png'
import Link from 'next/link'
import { navLinks,subNavLinks } from "@/constant/index";
import { FaFacebook,FaGoogle,FaInstagram,FaPinterestP,FaTwitter, FaYoutube} from 'react-icons/fa'

const Navbar = () => {
  return (
    <main>
      <nav className='bg-white'>
      <div className='flex justify-end py-1 pr-20 w-full h-2 gap-3 mt-1  text-black'>
        <FaFacebook className=' hover:text-blue-500'/>
        <FaInstagram className=' hover:text-red-300'/>
        <FaPinterestP className=' hover:text-red-500'/>
        <FaTwitter className=' hover:text-blue-300'/>
        <FaGoogle className=' hover:text-red-400'/>
        <FaYoutube className=' hover:text-red-500'/>
      </div>
        <div className='flex items-center font-medium justify-around'>
          <div className='z-50  md:w-auto w-full'>
                <Link href='/'>
                  <Image 
                    className='md:cursor-pointer  '
                    src={icon}
                    alt='logo'
                    width={140}
                    />
                </Link>
          </div>
          {/* on large device */}
          <ul className=' md:flex hidden uppercase items-center gap-8 font-[Poppins] '>
            {navLinks.map((link)=>(
              <li key={link.href}  className=' text-black cursor-pointer hover:text-blue-500 font-semibold '>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* on small device  */}
          <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 uppercase font-[Poppins] `}> 
              {navLinks.map((links)=>(
                <li key={links.href} className='py-7 px-5 text-left md:cursor-pointer ' >
                  <Link href={links.href}>
                  {links.label} 
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className='mb-4 border-b-4 '>
          <ul className='mb-4 text-black md:flex hidden justify-start lg:px-52 px-5  uppercase items-center gap-4 font-[Poppins]'>
            {subNavLinks.map((sub)=>(
             <li key={sub.href} className='hover:text-blue-500 font-semibold '>
              <Link href={sub.href} className=''>{sub.label}</Link>
             </li>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  )
}

export default Navbar