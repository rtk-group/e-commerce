import React, { useContext, useState } from 'react'
import Tittle from '../Component/Tittle'
import Cartotal from '../Component/Cartotal'
import { shopcontext } from '../Context/Shopcontext'
import { toast } from 'react-toastify'
import axios from 'axios'
// import { Navigate } from 'react-router-dom';

const PlaceOrders = () => {

  const {navigate, token, cartitem, setcartitem, getcartamount, delivery_fee, products} = useContext(shopcontext);

  const [method, setmethod] = useState('cod');

  const [formdata, setformdata] = useState({
    firstname:'',
    lastname:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onchangehandler = (e)=>{
    const name = e.target.name
    const value = e.target.value

    setformdata(data => ({...data,[name]:value}))
  }

  const onsubmithandler = async(e)=>{
    e.preventDefault()
    try{
      let orderitems = []
      for(const items in cartitem){
        for(const item in cartitem[items]){
          if (cartitem[items][item] > 0){
            const iteminfo = structuredClone(products.find(product => product._id === items))
          if (iteminfo) {
            iteminfo.size = item
            iteminfo.quantity = cartitem[items][item]
            orderitems.push(iteminfo)
          }
          }
        }
      }

      // console.log(orderitems)

      let orderdata = {
        address: formdata,
        items: orderitems,
        amount: getcartamount() + delivery_fee
      }

      switch (method) {
        case 'cod':
          const response = await axios.post('http://localhost:4000' + '/api/order/place', orderdata, {headers:{token}})
          console.log(response)
          if (response.data.success) {
            setcartitem({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          
          break;
      
        default:
          break;
      }
      
    }catch(error){

    }
  }

  return (
    <form onSubmit={onsubmithandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Tittle text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className="flex gap-3">
          <input required onChange={onchangehandler} name='firstname' value={formdata.firstname} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input required onChange={onchangehandler} name='lastname' value={formdata.lastname} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
        <input required onChange={onchangehandler} name='email' value={formdata.email} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="email" placeholder='E-mail'/>
        <input required onChange={onchangehandler} name='street' value={formdata.street} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className="flex gap-3">
          <input required onChange={onchangehandler} name='city' value={formdata.city} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input onChange={onchangehandler} name='state' value={formdata.state} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className="flex gap-3">
          <input required onChange={onchangehandler} name='zipcode' value={formdata.zipcode} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="Number" placeholder='Zipcode'/>
          <input required onChange={onchangehandler} name='country' value={formdata.country} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input required onChange={onchangehandler} name='phone' value={formdata.phone} className='border border-gray-300 rounded py1.5 px-3.5 w-full' type="Number" placeholder='Phone-no.'/>

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
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrders