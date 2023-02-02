import React from 'react'
import Button from '../components/Button'

export default function CreateListing() {
  return (
    <section className='max-w-md mx-auto '>
        <h1 className='text-3xl font-bold mt-5 text-center '>Create a Listing</h1>
          <p  className='font-semibold text-lg mt-3 '>Sell / Rent</p>
          <div className='flex space-x-5'>
              <Button type='button'  title="Sell "  back={'bg-white  font-semibold shadow-md hover:shadow-lg'} text={'text-black'}/>
              <Button type='button'  title="Rent "  back={'bg-black font-semibold  shadow-md hover:shadow-lg'}/>
            
          </div>

          <p className='font-semibold text-lg mt-3 '>Name</p>
          <input type="text"  placeholder='Name' className='px-[20px] w-full py-2 text-xl border border-slate-300 rounded'/>
          <div className='flex space-x-4'>
            <div>
              <p className='font-semibold text-lg mt-3 '>Beds</p>
              <input type="number" value='1' className='border border-slate-300 rounded py-3 px-4' />

            </div>
            <div>
               <p className='font-semibold text-lg mt-3 '>Baths</p>
               <input type="number" value='1' className='border border-slate-300 rounded py-3 px-4' />

            </div>
          </div>
           <p  className='font-semibold text-lg mt-3 '>Parking spot</p>
          <div className='flex space-x-5'>
              <Button type='button'  title="YES "  back={'bg-white  font-semibold shadow-md hover:shadow-lg'} text={'text-black'}/>
              <Button type='button'  title="NO "  back={'bg-black font-semibold  shadow-md hover:shadow-lg'}/>
            
          </div>
           <p  className='font-semibold text-lg mt-3 '>Furnished</p>
          <div className='flex space-x-5'>
              <Button type='button'  title="YES "  back={'bg-white  font-semibold shadow-md hover:shadow-lg'} text={'text-black'}/>
              <Button type='button'  title="NO "  back={'bg-black font-semibold  shadow-md hover:shadow-lg'}/>
            
          </div>
           <p  className='font-semibold text-lg mt-3 '>Address</p>
           <textarea  placeholder='Address'  className='w-full px-5 py-5 rounded text-2xl '></textarea>
           <p  className='font-semibold text-lg mt-3 '>Description</p>
           <textarea  placeholder='Description'  className='w-full px-5 py-5 rounded text-2xl '></textarea>

            <p  className='font-semibold text-lg mt-3 '>Offer</p>
          <div className='flex space-x-5'>
              <Button type='button'  title="YES "  back={'bg-white  font-semibold shadow-md hover:shadow-lg'} text={'text-black'}/>
              <Button type='button'  title="NO "  back={'bg-black font-semibold  shadow-md hover:shadow-lg'}/>
          </div>

          
    </section>
  )
}
