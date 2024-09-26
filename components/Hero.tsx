import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'



const Hero = () => {
  return (
    <>
      <div className='h-screen w-screen'>
        <div className='max-w-7xl h-[90%] pt-4  padding-x lg:pt-20 mx-auto z-10 relative'>
          <div className='xl:block hidden absolute top-12 left-12 -z-10 '>
            <div className='w-[6.85vw] h-[11.504vh] relative'>
              <Image src='/dots.svg' alt='Decorative dots' fill className='object-contain' />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center md:p-0 lg:flex-row '>

            <div className='flex justify-center lg:justify-end items-center md:h-full w-full'>
              <div className='lg:w-[27.8rem] sm:w-[80%] w-[27.8rem] sm:h-[21.12rem] h-auto'>
                <h3 className='font-bold text-4xl sm:text-5xl leading-10 md:leading-[3.5rem]'>
                  Virtual healthcare for you
                </h3>
                <p className='font-light text-xl leading-6 sm:leading-8 text-[#7D7987] mt-6 md:mb-11 mb-5'>
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
            <div className='flex h-auto w-full'>
              <div className='flex-1 h-[59.8vh] w-[36.094vw] relative'>
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
