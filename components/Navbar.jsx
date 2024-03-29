"use client"
import React from 'react'
import Image from 'next/image'
import icon from '@/public/icon1.png'
import Link from 'next/link'
import { useState } from 'react'
import { navLinks,subNavLinks } from "@/constant/index";
import { FaFacebook,FaGoogle,FaInstagram,FaPinterestP,FaTwitter, FaYoutube} from 'react-icons/fa'
import { FaBars,FaTimes } from 'react-icons/fa';
const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <main > 
      <nav className='bg-white'>
      <div className='hidden md:flex justify-end py-1 pr-20 w-full h-2 gap-3 mt-1  text-black'>
        <FaFacebook className=' hover:text-blue-500'/>
        <FaInstagram className=' hover:text-red-300'/>
        <FaPinterestP className=' hover:text-red-500'/>
        <FaTwitter className=' hover:text-blue-300'/>
        {/* <FaYoutube className=' hover:text-red-500'/> */}
      </div>
        <div className='flex  items-center font-medium justify-around'>
          <div className='z-50  md:w-auto w-full flex justify-between'>
                <Link href='/'>
                  <Image 
                    className='md:cursor-pointer ml-3  '
                    src={icon}
                    alt='logo'
                    width={140}
                    />
                </Link>
                    <div className="text-3xl md:hidden py-14  pr-5 " onClick={() => setOpen(!Open)}>
                      {Open ? <FaTimes/> : <FaBars/>}
                    </div>
          </div>
          {/* on large device */}
          <ul className=' md:flex hidden uppercase items-center gap-8 font-[Poppins] '>
            {navLinks.map((link)=>(
              <li key={link.href}  className=' text-black cursor-pointer hover:text-blue-500 duration-0 hover:duration-300 font-semibold '>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          {/* on small device  */}
          <div></div>
          <ul className={`lg:hidden z-10 bg-white absolute  w-full top-20  py-24  pl-4 uppercase font-[Poppins] duration-500 ${Open ? "top-0" : "top-[-100%]"} `}> 
              {navLinks.map((links)=>(
                <li key={links.href} className='py-7 px-5 text-left md:cursor-pointer ' >
                  <a href={links.href}>
                  {links.label} 
                  </a>
                </li>
              ))}
              <ul className='grid grid-cols-2 gap-5 px-2 bg-white'>
                {subNavLinks.map((sub)=>(
                  <li key={sub.href} className='hover:text-blue-500 duration-0 hover:duration-300  px-5 '>
              <Link href={sub.href} className=''>{sub.label}</Link>
             </li>
            ))}
            </ul>
          </ul>
        </div>
        <div className=' border-b-4 '>
          <ul className='mb-1 text-black md:flex hidden justify-start lg:px-52 px-4  uppercase items-center gap-4 font-[Poppins]'>
            {subNavLinks.map((sub)=>(
             <li key={sub.href} className='hover:text-blue-500 duration-0 hover:duration-300 font-semibold  '>
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