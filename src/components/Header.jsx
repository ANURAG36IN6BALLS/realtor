import React from 'react'

export default function Header() {
  return (
    <div className='bg-white border-b-2 shadow-sm sticky top-0 z-50'>

        <header className='flex justify-between items-center px-5 max-w-5xl mr-auto'>
            <div>


                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realter logo" className='h-5' />

            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>Home</li>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>Offers</li>
                    <li className='py-3 text-slate-500 text-sm font-semibold'>SignIn</li>
                </ul>
            </div>
        </header>
    </div>
  )
}





