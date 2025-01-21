import React, {useContext, useEffect, useState} from 'react'
import { shopcontext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';
import {useLocation} from 'react-router-dom'

const Searchbaar = () => {

    const {search , setsearch , showsearch , setshowsearch} = useContext(shopcontext);
    const [visible, setvisible] = useState(false);
    const location = useLocation()

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setvisible(true);
        }else{
            setvisible(false);
        }
    },[location])

    return showsearch && visible ? (
        <div className='border-t border-b  bg-gray-50 text-center'>
           <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
           <input value={search} onChange={(e)=>setsearch(e.target.value)} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search' />
           <img src={assets.search_icon} alt="" className='w-4 '/>
            </div> 
            <span onClick={()=>setshowsearch(false)} className='inline w-3 cursor-pointer'>X</span>
        </div>
      ) : null
}

export default Searchbaar




