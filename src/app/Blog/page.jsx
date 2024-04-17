import React from 'react'
import Howto from'@/app/categories/Howto/page'
import Troubleshoot from '@/app/categories/Troubleshoot/page'
import Travel from '@/app/categories/Travel/page'
import Social from '@/app/categories/Social/page'
import Finance from '@/app/categories/Finance/page'
import Education from '@/app/categories/Education/page'
import Top10 from '@/app/categories/Top10/page'

const page = () => {
  return (
    <div>
        <Howto/>
        <Finance/>
        <Social/>
        <Travel/>
        <Troubleshoot/>
        <Top10/>
        <Education/>
    </div>
  )
}

export default page