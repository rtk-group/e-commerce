import React, { useContext } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Tittle from './Tittle';

const Cartotal = () => {

  const {currency, delivery_fee, getcartamount} = useContext(shopcontext);

  return (
    <div className='w-full'> 
    <div className="text-2xl">
      <Tittle text1={'CART'} text2={'TOTALS'}/>
    </div>
    <div className="flex flex-col gap-2 mt-2 text-sm">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>{currency}{getcartamount()}.00</p>
      </div>
      <hr/>
      <div className="flex justify-between">
        <p>Shipping Fee</p>
        <p>{currency} {delivery_fee}</p>
      </div>
      <hr/>
      <div className="flex justify-between">
        <b>Total</b>
        <b>{currency} {getcartamount() === 0? 0 : getcartamount() + delivery_fee}</b>
      </div>

    </div>
    </div>
  )
}

export default Cartotal