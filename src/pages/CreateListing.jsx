import React from 'react'
import { useState } from 'react'
import Button from '../components/Button'

export default function CreateListing() {
        const [formdata,setformdata]=useState({
          name:'jhone Doe',
          type:'sell',
          beds:3,
          bathroom:2,
          parking:"No",
          furnished:"No",
          address:'',
          description:'',
          offer:'No',
          price:500,
          discount:0,
          image:[]
          
          
        })
        console.log(formdata)
        
        const {name,type,beds,bathroom,parking,furnished,address,description,offer,price,discount,image}=formdata

        function onChange(e)
        {

            setformdata((prevState)=>({

              ...prevState,
              [e.target.id]:e.target.value


            }))
            console.log(formdata)

        }




  return (
    <section className='max-w-md mx-auto mb-4'>
      <div className='mb-4'>

              <h1 className='text-3xl font-bold mt-5 text-center '>Create a Listing</h1>
                <p  className='font-semibold text-lg mt-3 '>Sell / Rent</p>
                <div className='flex space-x-5'>
                    <Button  title="Sell "  value='sell' id="type" back={type==='sell'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'  } text={type==='sell'?'':'text-black'} onClick={onChange} />
                    <Button  title="Rent " value='rent' id="type" back={type==='rent'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'} text={type==='rent'?'':'text-black'} onClick={onChange}/>
                  
                </div>

      </div>

      <div className='mb-4'>
        
          <p className='font-semibold text-lg  '>Name</p>
          <input type="text" value={name}  id="name" placeholder='Name' onChange={onChange} className='px-[20px] w-full py-2 text-xl border border-slate-300 rounded'/>

      </div>

          <div className='flex space-x-4'>
                <div>
                  <p className='font-semibold text-lg  '>Beds</p>
                  <input type="number" value={beds} id="beds" onChange={onChange} className='border border-slate-300 rounded py-3 px-4' />

                </div>
                <div>
                  <p className='font-semibold text-lg  '>Baths</p>
                  <input type="number" value={bathroom} id="bathroom" onChange={onChange} className='border border-slate-300 rounded py-3 px-4' />

                </div>
          </div>

          <div className='mb-4'>

                <p  className='font-semibold text-lg '>Parking spot</p>
                <div className='flex space-x-5'>
                    <Button  title="Yes "  value='Yes' id="parking" back={parking==='Yes'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'  } text={parking==='Yes'?'':'text-black'} onClick={onChange} />
                    <Button  title="No " value='No' id="parking" back={parking==='No'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'} text={parking==='No'?'':'text-black'} onClick={onChange}/>
                </div>
          </div>

        <div className='mb-4'>
          
                <p  className='font-semibold text-lg  '>Furnished</p>
                <div className='flex space-x-5'>
                    <Button  title="Yes "  value='Yes' id="furnished" back={furnished==='Yes'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'  } text={furnished==='Yes'?'':'text-black'} onClick={onChange} />
                    <Button  title="No " value='No' id="furnished" back={furnished==='No'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'} text={furnished==='No'?'':'text-black'} onClick={onChange}/>
                  
                </div>

          </div>  

        <div className='mb-4'>

           <p  className='font-semibold text-lg mt-3 '>Address</p>
           <textarea   id='address' onChange={onChange}  placeholder='Address'  className='w-full px-5 py-5 rounded text-sm  border border-gray-500'></textarea>
           
        </div>
        <div className='mb-4'>

           <p  className='font-semibold text-lg mt-3 '>Description</p>
           <textarea id='description' onChange={onChange}  placeholder='Description'  className='w-full px-5 py-5 rounded text-sm border border-gray-500 '></textarea>

        </div>
        

        <div className='mb-4'>

                <p  className='font-semibold text-lg mt-3 '>Offer</p>
                <div className='flex space-x-5'>
                     <Button  title="Yes "  value='Yes' id="offer" back={offer==='Yes'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'  } text={offer==='Yes'?'':'text-black'} onClick={onChange} />
                    <Button  title="No " value='No' id="offer" back={offer==='No'?'bg-slate-500 font-semibold shadow-md hover:shadow-lg':'bg-white font-semibold shadow-md hover:shadow-lg'} text={offer==='No'?'':'text-black'} onClick={onChange}/>
                </div>

        </div>

        <div className='mb-4'>
                <p  className='font-semibold text-lg mt-3 '>Regular Price</p>
                <div className="flex items-center space-x-4 ">
                      <input type="number" value={price} id="price" onChange={onChange} className='border border-slate-300 rounded py-3 px-4' />
                      
                      {type === "rent" && 

                      <p>$ / Month</p>
                      
                      }
                  
                </div>
          
        </div>

        { offer === "Yes" &&  ( <div className='mb-4'>
                        <p  className='font-semibold text-lg mt-3 '>Discount</p>
                        <div className="flex items-center space-x-4 ">
                              <input type="number" value={discount}  onChange={onChange} id='discount' className='border border-slate-300 rounded py-3 px-4' />
                              
                            
                          
                        </div>
          
                </div>)


                      
               



        }
        

        <div className='mb-4'>

                <p  className='font-semibold text-lg mt-3 '>Images</p>
                <p className='text-gray-500 text-sm'> This image will be the cover (max 6).</p>
                <input type="file"
                  className='w-full bg-white text-gray-700 text-sm py-2 px-3 border border-gray-400 rounded'
                  accept='.png,.jpeg,.jpg'
                  multiple
                 />


        </div>

        <Button  type="button" title={'Create Listing'} back={'bg-blue-600 font-bold font-sm'}/>


          
    </section>
  )
}
