import React, { useContext } from 'react';
import { shopcontext } from '../Context/Shopcontext';
import { Link } from 'react-router-dom';

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(shopcontext)

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden rounded'>
        <img src={image[0]} alt='' className='hover:scale-110 transition ease-in-out' />
      </div>
      <p className='pt-3 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default Productitem