import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import { assets } from '../assets/assets.js';
import Tittle from '../Component/Tittle'
import Cartotal from '../Component/Cartotal';

const Cart = () => {

  const { products , currency, cartitem ,updatequantity, navigate} = useContext(shopcontext);

  const [cartdata , setcartdata] = useState([]);

  useEffect(()=>{

    const tempdata = [];
    for(const items in cartitem){
      for(const item in cartitem[items]){
        if(cartitem[items][item] > 0){
          tempdata.push({
            _id: items,
            size:item,
            quantity: cartitem[items][item]
          })
        }
      }
    }
    setcartdata(tempdata);
  }, [cartitem])
  return (
    <div className='border-t pt-14'> 
      <div className="text-2xl mb-3">
        <Tittle text1={'YOR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartdata.map((item, index)=>{

            const productdata = products.find((product)=> product._id === item._id);

            return(
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className="flex items-start gap-6">
                  <img className='w-16 sm:w-20' src={productdata.image[0]} alt='image'/>
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productdata.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>
                    <input onChange={(e)=>e.target.value === "" || e.target.value === "0"? null:updatequantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-2' type="number" min={1} defaultValue={item.quantity} />
                    <img src={assets.bin_icon} onClick={()=>updatequantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer'/>
              </div>
            )

          })
        }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <Cartotal/>
          <div className="w-full text-end">
            <button onClick={()=>navigate('/placeorders')} className="bg-black text-white text-sm px-8 my-8 py-3">PROCEED TO PAY</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart