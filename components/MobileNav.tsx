"use client"
interface Props {
  children: React.ReactNode
}

const data= [
  {key: 1, sections: 'Home' },
  {key: 2, sections: 'Find a Doctor' },
  {key: 3, sections: 'Apps' },
  {key: 4, sections: 'Testimonials' },
  {key: 5, sections: 'About Us' },
]
  


import Link from 'next/link'
import React, { useState } from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Logo from './Logo';


const mobileNav = ({children} : Props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className='max-w-7xl mx-auto sticky top-0 z-[20]  px-8 sm:px-10 lg:px-12'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Logo />
          {/* Navbar for screens above 1024px width */}
          <div className='hidden md:block'>
            <div className='flex space-x-4 lg:space-x-6'>
              {data.map(function (d) {
                return (<Link href={"/"} key={d.key} className='flex justify-center items-center text-lg font-normal text-gray-400'><span className=' flex-nowrap inline-flex w-30'>{d.sections}</span></Link>)
              })}
            </div>
          </div>
          {/* Navbar for mobile devices */}
          <div className='md:hidden block '>
            <button onClick={toggleNavbar} >
              {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}

            </button>
          </div>
        </div>
        {isOpen && (
              <div className='md:hidden '>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  {data.map(function(d){
                    return (<Link href={"/"} key={d.key} className='flex justify-center items-center text-lg font-normal text-gray-400 border border-gray-600 hover:border-black hover:text-black'>
                        <span className=' flex-nowrap inline-flex w-30'>
                          {d.sections}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </div>
          )}
      </div>
    </>
  )
}

export default mobileNav
