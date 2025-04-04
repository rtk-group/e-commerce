import React from 'react'
import Tittle from '../Component/Tittle'
import { assets } from '../assets/assets.js'
import Newslatterbox from '../Component/Newslatterbox.jsx'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Tittle text1={'ABOUT'} text2={'US'} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='about img' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing elit. Fugiat, tempore corporis elit. Fugiat, tempore corporis enim earum distinctio expedita non, atque consequuntur corrupti tenetur quas dolorum molestiae similique doloremque quibusdam omnis eveniet. Sapiente, dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore corporissit amet consectetur adipisicing elit. Fugiat, tempore corporis enim earum distinctio expedita non, atque consequuntur corrupti tenetur quas dolorum molestiae similique doloremque quibusdam omnis eveniet. Sapiente, dolor.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, tempore corporis enim earum distinctio expedita non, atque consequuntur corrupti tenetur quas dolorum molestiae similique doloremque quibusdam omnis eveniet. Sapiente, dolor.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Tittle text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium et deserunt, excepturi dicta porro magni iusto sapiente sint dolorem volupt</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium et deserunt, excepturi dicta porro magni iusto sapiente sint dolorem volupt</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione praesentium et deserunt, excepturi dicta porro magni iusto sapiente sint dolorem volupt</p>
        </div>
      </div>

      <Newslatterbox />
    </div>
  )
}

export default About


