import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href="/" className=' flex justify-center items-center gap-3 w-40 h-10'>
            <div className=' w-8 h-8 bg-primary_blue rounded-full text-[1.6rem] font-bold text-white flex justify-center items-center '>
              <span>T</span>
            </div>
            <p className='text-[1.6rem] font-bold text-black'>Trafalger</p>
        </Link>
  )
}

export default Logo
