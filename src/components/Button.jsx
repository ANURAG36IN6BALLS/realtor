import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router';
import { setDoc,getDoc ,doc ,serverTimestamp, Timestamp  } from 'firebase/firestore';
import { db } from '../Firebase';

export default function Button({title,back,pic,type,click}) {
  const navigate =useNavigate()
  async function Authentication(){
    console.log("hello")
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const userCredentials = await signInWithPopup(auth, provider)
      const user =userCredentials.user
      console.log(user)

      const docSnap= await getDoc(doc(db,"users",user.uid ))
      if (!docSnap.exists()){
       await setDoc(doc(db,"users",user.uid ),{
        'email':user.email,
        'name':user.displayName,
        'timestamp':serverTimestamp()}
        )
      }
      navigate('/')


      toast.success("That's the spirit")
      
    } catch (error) {
      toast.error("getting trouble in login")
      
    }
  }
  return (
    
            <button 
            type={type} onClick={click?()=>Authentication():null}
            className={`uppercase ${back}  flex justify-center items-center w-full  py-3 my-4 rounded-[8px] text-white font-extralight `}>{pic?<FcGoogle className='mr-3 bg-white'/>:''}{title}</button>
  )
}
