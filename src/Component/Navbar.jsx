import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { shopcontext } from '../Context/Shopcontext.jsx';


const Navbar = () => {

  const [visible, setvisible] = useState(false)
  const {setshowsearch, getcartcount} = useContext(shopcontext)

  return (
    <div className='flex item-center justify-between py-5 font-medium'>
      <Link to='/'><div className='w-36'>NAVBAR</div></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-pink-700'>
        <NavLink to='/' className='flex flex-col item-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col item-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col item-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col item-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex item-center gap-6q'>
        
        <img onClick={()=>setshowsearch(true)} src={assets.search_icon} className='w-7 cursor-pointer' alt="" />

        <div className='group relative'>
        <Link to={'/login'}>
        <img src={assets.profile_icon} className='w-7 cursor-pointer' alt='' />
        </Link>
          
          <div className='group-hover:block  hidden     absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-state-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>my profile</p>
              <p className='cursor-pointer hover:text-black'>order</p>
              <p className='cursor-pointer hover:text-black'>logout</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-7 min-w-5' alt='' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[9px]'>{getcartcount()}</p>
        </Link>
        <img src={assets.menu_icon} onClick={() => setvisible(true)} className='w-5 cursor-pointer mx-2 sm:hidden' alt='' />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setvisible(false)} className='flex item-center gap-4 p-3 cursor-pointer'>
            <p>Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setvisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default Navbar