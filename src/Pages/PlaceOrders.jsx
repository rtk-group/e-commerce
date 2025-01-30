import React, { useContext, useState } from 'react'
import Tittle from '../Component/Tittle'
import Cartotal from '../Component/Cartotal'
import { shopcontext } from '../Context/Shopcontext'
// import { Navigate } from 'react-router-dom';

const PlaceOrders = () => {

  const {navigate} = useContext(shopcontext);

  const [method, setmethod] = useState('cdo');

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Tittle text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="email" placeholder='E-mail'/>
        <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="Number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="Number" placeholder='Phone-no.'/>

      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <Cartotal/>
        </div>

        <div className="mt-12">
          <Tittle text1={'PAYMENT'} text2={'METHOD'}/>
          {/* payment method slection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setmethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe'? 'bg-green-400' : ''}`}></p>
              <span className="h-5 mx-4">Stripe</span>
            </div>
            <div onClick={()=>setmethod('rezorpay')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'rezorpay'? 'bg-green-400': '' }`}></p>
              <span className="h-5 mx-4">Razor Pay</span>
            </div>
            <div onClick={()=>setmethod('cod')}className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod'? 'bg-green-400': '' }`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrders