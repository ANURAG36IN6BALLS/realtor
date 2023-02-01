import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { useEffect } from 'react'

export  function UseAuthStatus() {
    const[loggedIn,setloggedIn]=useState(false)
    const[loading,setloading]=useState(true)

    useEffect(()=>{
        const auth =getAuth()
        onAuthStateChanged(auth ,(user)=>{

            if(user){
            setloggedIn(true)
        }
        setloading(false)

        })
        
    },[])
  return {loggedIn,loading}
}
