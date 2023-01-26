import React from 'react'
import { useLocation,useNavigate } from 'react-router'



export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()

   function matchroute(route){
    if ( route===location.pathname){
        return true
    }
   }

    
  return (
    <div className='bg-white border-b-2 shadow-sm sticky top-0 z-50'>

        <header className='flex justify-between items-center px-5 max-w-5xl mr-auto'>
            <div>


                <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg" alt="Realter logo" className='h-5 cursor-pointer'
                onClick={()=>navigate('/')}
                />

            </div>
            <div>
                <ul className='flex space-x-6'>
                    <li
                     className={` cursor-pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px]  border-b-transparent ${matchroute('/') && 'text-black border-b-red-600'}`
                    }
                     onClick={()=>navigate('/')}
                     

                     >
                        Home
                     </li>
                    <li
                     className={` cursor-pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px] border-b-transparent ${matchroute('/Offers') && 'text-black border-b-red-600'}`}
                     onClick={()=>navigate('/Offers')}
                     

                     >
                        Offers
                     </li><li
                     className={`cursor-pointer py-3 text-slate-500 text-sm font-semibold border-b-[3px] border-b-transparent ${matchroute('/Signin') && 'text-black border-b-red-600'}`}
                     onClick={()=>navigate('/Signin')}
                     

                     >
                        Signin
                     </li>
                    
                </ul>
            </div>
        </header>
    </div>
  )
}





