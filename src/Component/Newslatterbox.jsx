import React from 'react'

const Newslatterbox = () => {
  const onsubmithandler = (event)=>{
    event.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
        <p className="text-gray-400 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora sunt asperiores culpa nulla vero </p>
    <form onSubmit={onsubmithandler} className='w-full sm:w-1/2 border flex items-center gap-3 my-6 pl-3 mx-auto'>
        <input type="email" className='w-full sm:flex-1 outline-none' placeholder='Enter your email'/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBMIT</button>
    </form>
    </div>

  )
}

export default Newslatterbox