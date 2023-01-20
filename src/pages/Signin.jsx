import React from 'react'

export default function Signin() {
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
              className='w-full rounded-lg px-4 py-2'
              placeholder='E-mail Address'
              />

          </form>
        </div>
      </div>
    </section>
  )
}
