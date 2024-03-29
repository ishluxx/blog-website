import React from 'react'
import Howto from'@/app/Howto/page'
import Troubleshoot from '@/app/Troubleshoot/page'
import Travel from '@/app/Travel/page'
import Social from '@/app/Social/page'
import Finance from '@/app/Finance/page'
import Education from '@/app/Education/page'
import Top10 from '@/app/Top10/page'

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