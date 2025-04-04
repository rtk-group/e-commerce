import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Tittle from '../Component/Tittle'
import Productitem from '../Component/Productitem'
import Customselect from '../Component/Customselect'
import { assets } from '../assets/assets.js'

const Collection = () => {

  const { products, search, showsearch } = useContext(shopcontext);
  const [showfiler, setshowfiler] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [shorttype, setshorttype] = useState('relavent')


  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => (
        prev.filter((cate) => cate !== e.target.value)
      ));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };

  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => (
        prev.filter((cate) => cate !== e.target.value)
      ));
    } else {
      setsubcategory((prev) => [...prev, e.target.value]);
    }
  }

  const applyfilter = () => {
    let productcopy = products.slice();

    if (showsearch && search) {
      productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productcopy = productcopy.filter((item) => category.includes(item.category));
    };
    setfilterproduct(productcopy);

    if (subcategory.length > 0) {
      productcopy = productcopy.filter((item) => subcategory.includes(item.subcategory));
    }
    setfilterproduct(productcopy);
  };

  const shortproduct = () => {
    let fpcopy = filterproduct.slice();

    switch (shorttype) {
      case 'low-high':
        setfilterproduct(fpcopy.sort((a, b) => (a.price - b.price)))
        break;

      case 'high-low':
        setfilterproduct(fpcopy.sort((a, b) => (b.price - a.price)))
        break;

      default:
        applyfilter();
        break;
    }
  }

  useEffect(() => {
    applyfilter();
  }, [category, subcategory, search, showsearch, products]);

  useEffect(() => {
    shortproduct();
  }, [shorttype]);

  const handleChange = (value) => {
    setSelectedValue(value);
    console.log('Selected:', value);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* flter option*/}
      <div className="min-w-60 ">
        <p onClick={() => setshowfiler(!showfiler)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTER
          {/* <span >Z</span> */}
          <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${showfiler ? "rotate-90" : ""} `} />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfiler ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value='Man' onChange={togglecategory} /> man
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='Women' onChange={togglecategory} /> women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='Kids' onChange={togglecategory} /> kids
            </p>
          </div>
        </div>
        {/* sub category */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfiler ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" value='Topwear' onChange={togglesubcategory} /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='Bottomwear' onChange={togglesubcategory} /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value='Winterwear' onChange={togglesubcategory} /> Winterwear
            </p>
          </div>
        </div>

      </div>

      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Tittle text1={'ALL'} text2={'COLLECTION'} />
          {/* product short */}
          <Customselect value={shorttype} onChange={(e) => setshorttype(e.target.value)}
            options={[
              { value: "relavent", label: "Short by: relavent" },
              { value: "low-high", label: "Short by: low-high" },
              { value: "high-low", label: "Short by: high-low" }
              // ... other options
            ]}
          />

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