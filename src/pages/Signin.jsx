import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Signin() {
      const [showpassword,setshowpassword]=useState(false)
  return (
    <section>
      <h1 className=' font-bold text-center py-10 text-[2rem]'>Sign In</h1>
      <div className='flex flex-wrap justify-center max-w-6xl mx-6 items-center'>
        <div className='md:w-[67%] lg:w-[50%] md:mb-8 lg:mb-4 sm:mb-10'>
          <img 
          src="./signin.jpg" alt=""image 
          className='w-full rounded-2xl'
          />

        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-10'>
    
          <form action="">

              <input 
              type="text" 
              className='w-full rounded-lg px-4 py-2  my-2 border-4 focus:border-blue-500 focus:outline-none  '
              
              placeholder='E-mail Address'
              />
             <div className=' my-6 relative'>

                    <input 
                    type={showpassword?"text":"password"} 
                    className='  w-full rounded-lg px-4 py-2  border-4 focus:border-blue-500 focus:outline-none '
                    placeholder='password'
                    />
                    {
                      showpassword?(
                        <AiFillEye className='cursor-pointer absolute right-5 top-4'
                        onClick={()=>setshowpassword(false)}
                        />
                      )
                      :(
                        <AiFillEyeInvisible className='cursor-pointer absolute right-5 top-4'
                        onClick={()=>setshowpassword(true)} 
                        />
                                             )
                      
                    }
              </div>
              <div className='flex justify-between'>
                <p className='text-sm'>Don't Have An Account? <Link to="/Signup" className='font-bold text-red-500'>Register</Link></p>
                <Link to="/Forgotpassword" className='text-blue-500'>forgot password?</Link>
              </div>

              <Button title="SIGN IN"  back={'bg-blue-600'}/>
              
              <div className='flex  items-center  before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300'>
                <p className='mx-3 font-bold text-sm'>OR</p>
              </div>
              <Button title="Continue With Google" pic={FcGoogle} back={'bg-red-600'}/>
          </form>
        </div>
      </div>
    </section>
  )
}
