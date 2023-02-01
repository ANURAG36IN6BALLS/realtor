import React from 'react'
import { Outlet } from 'react-router'

export default function Dummy() {
  return (
    <>
        <div>
            <h1>
                Dummy
                </h1>
        </div>
        <Outlet/>
    
    </>
  )
}
