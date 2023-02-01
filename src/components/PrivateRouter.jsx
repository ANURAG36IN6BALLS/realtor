import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseAuthStatus } from '../hooks/UseAuthStatus'

export default function PrivateRouter() {
    const {loggedIn,loading}=UseAuthStatus()
    if(loading){
      return <h1>Loading....</h1>
    }
    console.log(loggedIn)
  return loggedIn?<Outlet/>:<Navigate to={"/Signin"} />
}
