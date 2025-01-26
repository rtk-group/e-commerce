import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { shopcontext } from '../Context/Shopcontext'
import Relatedproducts from '../Component/Relatedproducts';
import { assets } from '../assets/assets';



const Product = () => {

  const { products , currency , addtocart, cartitem } = useContext(shopcontext);
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
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-5" />
            <img src={assets.star_icon} className="w-5" />
            <img src={assets.star_icon} className="w-5" />
            <img src={assets.star_icon} className="w-5" />
            <img src={assets.star_icon} className="w-5" />
            
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
          <button onClick={()=>addtocart(productdata._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return & exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* description & preview section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 text-sm py-3">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorum corrupti cupiditate magnam nihil! Accusantium officiis ex ut nihil iure provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam laudantium numquam tempora est ullam iure, architecto recusandae Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus doloribus ipsum quasi optio perspiciatis! Nisi impedit eos amet cum aspernatur. fugiat culpa deleniti cumque, odio tenetur impedit? Veritatis expedita obcaecati ipsum porro. quidem veniam ipsum eius id est, repudiandae corporis. Vel?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolorum beatae, molestias assumenda dolor accusamus sequi? Doloribus quae, optio reiciendis dolorem esse ad at, autem earum alias recusandae eveniet nostrum!</p>
        </div>
      </div>

      {/* display related products */}
      <Relatedproducts category={productdata.category} subcategory={productdata.subcategory}/>
      
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product