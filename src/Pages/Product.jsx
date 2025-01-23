import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { shopcontext } from '../Context/Shopcontext'



const Product = () => {

  const { products , currency } = useContext(shopcontext);
  const { productid } = useParams();
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState('');
  const [size, setsize] = useState('')

  const fetchproductdata = async () => {

    products.map((item) => {

      if (item._id === productid) {
        setproductdata(item);
        setimage(item.image[0]);
        // console.log(item);
        return null;
      }
    })

  }

  useEffect(() => {
    fetchproductdata();
  }, [productid]);


  return productdata ? (
    <div className='border-top-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product image */}
        <div className="flex-1 flex flex-col-revers gap-3 sm:flex-row">
          <div className="flex flex-col overflow-x-auto sm:overflow-y-scroll justify-bertween sm:justify-normal sm:w-[18.7%] w-full">
            {
              productdata.image.map((item, index) => (
                <img onClick={() => setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className="w-full sm:w-[80%]">
            <img className='w-full h-auto' src={image} alt="main image" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1 border border-black">
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <span className="w-3">*</span>
            <span className="w-3">*</span>
            <span className="w-3">*</span>
            <span className="w-3">*</span>
            <span className="w-3">*</span>
            <p className="pl-2">(112)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productdata.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productdata.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {
                productdata.size.map((item, index)=>(
                  <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size? 'border-orange-500': ''}`} key={index}>{item}</button>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product