import Image from 'next/image'
import React from 'react'


const Hero = () => {
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-7xl mx-auto pt-48 text-4xl'>
      {/* container */}
      <div className='w-full relative flex-col'>
        <div className=''>
            <Image src={'/dots.svg'} alt='dots image' fill />
        </div>
      </div>
    </div>
  )
}

export default Hero
