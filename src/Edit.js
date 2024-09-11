import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Edit() {

    const {id}=useParams()
    const [data,setData]=useState({})
    const navigate =useNavigate()

useEffect(()=>{
   axios.get('http://localhost:3030/users/'+id) 
   .then(res=>setData(res.data))
   .catch(err=>console.log(err))
},[])

function handleSubmit(e){
    e.preventDefault()
    axios.put('http://localhost:3030/users/'+id,data)
    .then(res=>{
        alert("data update successfully !")
        navigate('/')
    })
}

  return (
    <div>
    <div className='flex justify-center items-center h-screen'>
      <div>
        <form onSubmit={handleSubmit}
        >
            <div >
        <label hrmlFor="name" className='font-bold'>
            ID:</label>
            <br></br>
       <input type='text' name='name' placeholder='Enter your Name' className='border p-[5px] ml-[5px]' value={data.id}  disabled onChange={(e)=>setData({...data,id:e.target.value})} />

        </div>
        <div >
        <label hrmlFor="name" className='font-bold'>Name:</label>
        <br></br>
       <input type='text' name='name' placeholder='Enter your Name' className='border p-[5px] ml-[5px]' value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>

        </div>
        <div className='mt-[10px]'>
        <label hrmlFor="email" className='font-bold'>Email:</label>
        <br></br>
        <input type='email' name='email' placeholder='Enter your Email' className='border p-[5px]  ml-[5px]' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        </div>
        <button className='border bg-[#028A0F] p-[5px] rounded mt-[10px]'>Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}








