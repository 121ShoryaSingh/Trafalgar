"use client"

interface props {
    btnName: string,
    containerStyles: string,
    textStyles: string,
}

import React from 'react'


const CustomButton = ({btnName, containerStyles, textStyles}: props) => {
  return (
    <>
      <button className={`custom-btn ${containerStyles}`}>
        <span className={`flex-1 ${textStyles}`}>
          {btnName}
        </span>
      </button>
    </>
  )
}

export default CustomButton
