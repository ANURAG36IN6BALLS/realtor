import React from 'react'
import { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { db } from '../Firebase'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc,doc, serverTimestamp } from 'firebase/firestore'
import { toast} from 'react-toastify'


export default function Signup() {
     const navigate=useNavigate()
     const [showpassword,setshowpassword]=useState(false)
     const [name,setname]=useState('')
     const [email,setemail]=useState('')
     const [password,setpassword]=useState('')
     
     



     async function onSubmit(e){
      e.preventDefault()
      try {   
              const auth = getAuth();
              if (name===''){
                throw {code:'auth/no-name'}
              }
              const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
              
              const user =userCredentials.user 
              console.log(user)
              updateProfile(user ,{displayName:name})
              const userDetails={
                'name':name,
                'email':email,
                'timestamp':serverTimestamp()
              }

              await setDoc(doc(db,"users",user.uid ),userDetails)
              toast.success('welcome to realtor world')
              navigate("/")


      } catch (errors){
        console.log(errors)
        const msg =displayErrors(errors.code)
        toast.error('something went wrong')

      }
     }
     function displayErrors(code){

        switch(code){
          case 'auth/email-already-exists':
            return 'The provided email is already in use by an existing user. Each user must have a unique email.'
          case 'auth/invalid-email':
            return 'The provided value for the email user property is invalid. It must be a string email address.'
          case 'auth/no-name':
            return 'Name is required for registration'
          default :
          return 'something went wrong'
        }
     }


     
  return (
    <section>
      <h1 className=' font-bold text-center py-10 text-[2rem]'>Sign Up</h1>
      <div className='flex flex-wrap justify-center max-w-6xl mx-6 items-center'>
        <div className='md:w-[67%] lg:w-[50%] md:mb-8 lg:mb-4 sm:mb-10'>
          <img 
          src="./signin.jpg" alt=' here' 
          className='w-full rounded-2xl'
          />

        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-10'>
    
          <form onSubmit={onSubmit}>

              <input 
              type="text" 
              className='w-full rounded-lg px-4 py-2  my-2 border-4 focus:border-blue-500 focus:outline-none  '
              
              placeholder='Full Name'
              onChange={(e)=>setname(e.target.value)}
              />
              <input 
              type="text" 
              className='w-full rounded-lg px-4 py-2  mt-2 border-4 focus:border-blue-500 focus:outline-none  '
              
              placeholder='E-mail Address'
              onChange={(e)=>setemail(e.target.value)}
              />
             <div className=' my-6 relative'>

                    <input 
                    type={showpassword?"text":"password"} 
                    className='  w-full rounded-lg px-4 py-2  border-4 focus:border-blue-500 focus:outline-none '
                    placeholder='password'
                    onChange={(e)=>setpassword(e.target.value)}
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
                <p className='text-sm'>Don't Have An Account? <Link to="/Signin" className='font-bold text-red-500'>Login</Link></p>
                <Link to="/Forgotpassword" className='text-blue-500'>forgot password?</Link>
              </div>

              <Button title="SIGN Up"  back={'bg-blue-600'}/>
              
              <div className='flex  items-center  before:border-t before:flex-1 before:border-gray-300  after:border-t after:flex-1 after:border-gray-300'>
                <p className='mx-3 font-bold text-sm'>OR</p>
              </div>
              <Button type='button' click={true} title="Continue With Google" pic={FcGoogle} back={'bg-red-600'}/>
          </form>
        </div>
      </div>
    </section>
  )
}
