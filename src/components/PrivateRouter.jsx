import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UseAuthStatus } from '../hooks/UseAuthStatus'
import Loader from './Loader'

export default function PrivateRouter() {
    const {loggedIn,loading}=UseAuthStatus()
    if(loading){
      return <Loader />
    }
    console.log(loggedIn)
  return loggedIn?<Outlet/>:<Navigate to={"/Signin"} />
}
