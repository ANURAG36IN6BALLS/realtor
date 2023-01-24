import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function Button({title,back,pic}) {
  return (
    
            <button 
            className={`uppercase ${back}  flex justify-center items-center w-full  py-3 my-4 rounded-[8px] text-white font-extralight `}>{pic?<FcGoogle className='mr-3 bg-white'/>:''}{title}</button>
  )
}
