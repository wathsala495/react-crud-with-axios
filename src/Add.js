import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Add() {

  const [inputData,setInputData]=useState({name:'',email:''})
  const navigate=useNavigate();

 const handleSumit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:3030/users',inputData)
  .then(res=>{
    alert("Data Added Successfully!")
    navigate('/')
  }).catch(err=>console.log(err))
  }
  

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <form onSubmit={handleSumit}>
        <div >
        <label hrmlFor="name" className='font-bold'>Name:</label>
       <input type='text' name='name' placeholder='Enter your Name' className='border p-[5px] ml-[5px]' onChange={(e)=>setInputData({...inputData,name:e.target.value})}/>

        </div>
        <div className='mt-[10px]'>
        <label hrmlFor="email" className='font-bold'>Email:</label>
        <input type='email' name='email' placeholder='Enter your Email' className='border p-[5px]  ml-[5px]' onChange={(e)=>setInputData({...inputData,email:e.target.value})}/>
        </div>
        <button className='border bg-[#028A0F] p-[5px] rounded mt-[10px]'>Submit</button>
        </form>
      </div>
    </div>
  )
}
