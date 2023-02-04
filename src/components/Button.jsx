import React from 'react'
import {FcGoogle ,FcHome} from 'react-icons/fc'




export default function Button({title,back,pic,type,onClick,text,value,id}) {

  
  return (
    
            <button 
            type={type} onClick={onClick} value={value} id={id}
            className={`uppercase ${back} ${text?text:'text-white'} flex justify-center items-center w-full  py-3  rounded-[8px]  font-extralight `}>{pic?pic==='FcGoogle'?<FcGoogle className='mr-3 bg-white rounded text-2xl'/>:<FcHome className='mr-3 bg-white rounded-full text-3xl'/>:''}{title}</button>
  )
}
