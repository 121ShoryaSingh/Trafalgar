import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'



const Hero = () => {
  return (
    <>
      <div className='h-screen w-screen pt-8 relative'>
        <div className='max-w-7xl mx-auto z-10 relative'>
          <div className='md:block hidden absolute -left-8 -z-10 '>
            <div className='w-[8.22rem] h-[7.19rem] relative'>
              <Image src='/dots.svg' alt='Decorative dots' fill className='object-contain' />
            </div>
          </div>
          <div className='flex flex-col padding-x md:flex-row '>

            <div className='flex-center'>
            <div className='w-[27.8rem] h-[21.12rem]'>
            <h3 className='font-bold text-5xl leading-[3.5rem]'>
              Virtual healthcare for you
            </h3>
            <p className='font-light text-xl leading-8 text-[#7D7987] mt-6 md:mb-11 mb-5'>
              Trafalgar provides progressive, and affordable
              healthcare, accessible on mobile and online
              for everyone
            </p>
            <CustomButton 
              containerStyles='bg-primary_blue rounded-full' 
              textStyles='font-bold text-white' 
              btnName='Consult Today' 
            />
          </div>
            </div>
            <div className='flex-center '>
              <div className='h-[59.8vh] w-[43.31rem] relative'>
                <Image src='/hero.svg' alt='hero image' fill className='object-contain' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
