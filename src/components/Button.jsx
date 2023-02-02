import React from 'react'
import {FcGoogle ,FcHome} from 'react-icons/fc'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router';
import { setDoc,getDoc ,doc ,serverTimestamp, Timestamp  } from 'firebase/firestore';
import { db } from '../Firebase';

export default function Button({title,back,pic,type,click,text}) {
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
            className={`uppercase ${back} ${text?text:'text-white'} flex justify-center items-center w-full  py-3 my-4 rounded-[8px]  font-extralight `}>{pic?pic==='FcGoogle'?<FcGoogle className='mr-3 bg-white'/>:<FcHome className='mr-3 bg-white rounded-full text-3xl'/>:''}{title}</button>
  )
}
