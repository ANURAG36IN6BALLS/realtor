import React from 'react'

export default function Signin() {
  return (
    <section>
      <h1 className=' font-bold text-center py-10 text-[2rem]'>sign in</h1>
      <div className='max-w-6xl  flex flex-wrap'>
        <div className='lg:w-[45%] md:w-[67%] mx-auto '>
          <img 
          src="./signin.jpg" alt=""image 
          className='w-full mx-4 rounded-2xl'
          />

        </div>
        <div className='lg:w-[45%] my-auto lg:mx-10 md:w-[67%] mx-auto '>

          <form action="">

              <input 
              type="text" 
              className='w-full outline-offset-50 outline-blue-800  my-2 py-1 px-20 font-bold rounded-lg border-black border-2'
              placeholder='E-mail Address'
              />
              <input 
              type="password"
              className='w-full outline-offset-4  outline-blue-800 my-2 py-1 px-20 font-bold rounded-lg border-black border-2 '
              placeholder='Password'
              
              />

          </form>
        </div>
      </div>
    </section>
  )
}
