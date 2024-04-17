"use client"
import React from 'react'
import { useState,useEffect } from 'react';

const Scoll = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const percentage = (scrollTop / scrollHeight) * 100;
        setScrollPercentage(percentage);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div>
         <div
      className="fixed z-10 top-0 left-0 w-full h-1 bg-blue-500"
      style={{ width: `${scrollPercentage}%`, transition: 'width 0.1s' }}
    ></div>
    </div>
  )
}

export default Scoll