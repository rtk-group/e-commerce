import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentstate, setcurrentstate] = useState('login');
  const {token, settoken, navigate, backendurl} = useContext(shopcontext)

  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')

  const onsubmithandler = async (e)=>{
    e.preventDefault();
    try{
      if (currentstate === 'sign up') {
        const response = await axios.post('http://localhost:4000' + '/api/user/register', {name, email, password})
        console.log(response);
        if (response.data.success){
          settoken(response.data.token);
          localStorage.setItem('token', response.data.token)
        }else{
          toast.error(response.data.message)
          toast.error("something went wrong")
        }
      }else{
        const response = await axios.post('http://localhost:4000' + '/api/user/login', {email, password})
        // console.log(response)
        if (response.data.success) {
          settoken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }else(
          toast.error(response.data.message)
        )
      }
    }catch(error){
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onsubmithandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentstate}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      { currentstate === 'login' ? "":<input onChange={(e)=>setname(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
        <input onChange={(e)=>setemail(e.target.value)} value={email} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input onChange={(e)=>setpassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forget your password</p>
          {
            currentstate === "login"? 
            <p onClick={()=>setcurrentstate('sign up')} className='cursor-pointer'>Create account</p>: 
            <p onClick={()=>setcurrentstate('login')} className='cursor-pointer'>Login here</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentstate === 'login'? 'sign in' : 'sign up'}</button>
    </form>
  )
}

export default Login



