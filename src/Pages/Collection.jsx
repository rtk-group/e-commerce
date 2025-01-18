import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Tittle from '../Component/Tittle'
import Productitem from '../Component/Productitem'

const Collection = () => {

  const { products } = useContext(shopcontext);
  // console.log(products)
  const [showfiler, setshowfiler] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);

  useEffect(() => {
    setfilterproduct(products);
  }, []);


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* flter option*/}
      <div className="min-w-60 ">
        <p onClick={() => setshowfiler(!showfiler)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER
          <span className={`h-3 sm:hidden ${showfiler ? "rotate-90" : ""}  `}>Z</span>
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfiler ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value='man' /> man
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='wpmen' /> women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='kids' /> kids
            </p>
          </div>
        </div>
        {/* sub category */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfiler ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value='topwear' /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='bottomwear' /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='winterwear' /> Winterwear
            </p>
          </div>
        </div>

      </div>

      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Tittle text1={'ALL'} text2={'COLLECTION'} />
          {/* product short */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Short by: Relavent </option>
            <option value="low-high">Short by: Low to High</option>
            <option value="high-low">Short by: High to Low</option>
          </select>
        </div>

        {/* map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 border">
          {
            filterproduct.map((item, index) => (
              <Productitem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>

      </div>



    </div>
  )
}

export default Collection