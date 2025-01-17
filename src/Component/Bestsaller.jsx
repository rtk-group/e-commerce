import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Tittle from './Tittle';
import Productitem from './Productitem';

const Bestsaller = () => {

    const { products } = useContext(shopcontext);
    const [bestseller, setbestseller] = useState([]);

    useEffect(() => {
        const bestproduct = products.filter((item) => (item.bestseller));
        setbestseller(bestproduct.slice(0, 5));
    },[])

    return (
        <div className='my-10'>
            <div className="text-center text-3xl py-8">
                <Tittle text1={'BEST'} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipiaerat blanditiis praesentium rem rohit kumar?
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                   bestseller.map((item, index)=>(
                        <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                   ))
                }
            </div>

        </div>
    );
}

export default Bestsaller