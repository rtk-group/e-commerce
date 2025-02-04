import React from 'react'
import Tittle from '../Component/Tittle';
import Newslatterbox from '../Component/Newslatterbox'
import {assets} from '../assets/assets.js'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Tittle text1={'CONTCT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-full md:max-w-[448px]' src={assets.contact_img} alt="contact image"/>
        <div className="flex flex-col justify-center items-start gap-600">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>7887 willms station <br /> suite 677, washington, usa</p>
          <p className='text-gray-500'>Tel: (788) 788-6784-5 <br />Email: Rohit@email.com</p>
          <p className='font-semibold text-xl text-gray-600' >RTk group</p>
          <p className='text-gray-500'>Learn more about our teams and job opening.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore jobs</button>
        </div>
      </div>

    <Newslatterbox/>

    </div>
  )
}

export default Contact