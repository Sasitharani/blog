"use client"
import React, { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import {app} from '@/FirebaseConfig.jsx'

export default function page() {
  const db = getDatabase(app)
    let [formData,setFormData]=useState({
        heading:'',
        description:'',
    })

    let submitBlog=(event)=>{
      event.preventDefault()
      let blogId =new  Date().getTime()
      console.log(blogId);
        set(ref(db, 'blogs/' + blogId),formData)
        //console.log('Check:'+formData.heading+' '+formData.description);
    
    }
    let handleChange=(event)=>{
        const {name , value}=event.target
        setFormData((formData)=>({
            ...formData,[name]:value,
               //console.log('prevFormData=:'+prevFormData),
        }))
        //console.log('value+name=:'+value+"  "+name);
        //console.log('formData=:'+formData.Heading+formData.description);
       
    }
    
    //console.log('Check:'+formData.heading+formData.description);
  return (
    <div>

      <form onSubmit={submitBlog} className='p-4 m-4'>
        <label htmlFor="heading" className="block my-4 md:text-lg text-sm font-medium text-gray-900">Heading</label>
        <input onChange ={handleChange} type="text" name="heading" rows="4" className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."/>
        <label htmlFor="desciption" className="block my-4 text-sm md:text-lg font-medium text-gray-900">Desciption</label>
        <textarea onChange ={handleChange} name="description" className="block min-h-[300px] mt-4 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        <div className="text-center">
            <button type="submit" className="transhtmlForm  w-[40%] rounded-md mt-10  bg-[black] text-white py-2 font-bold duration-300 hover:bg-[#4B0082] ">Add Blog</button>
        </div>
        </form>
  
   
    </div>
  )
}