"use client"
import React, { useEffect, useState } from 'react'
import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from './FirebaseConfig';

export default function Body() {
  const db = getDatabase(app);
  const blogRef = ref(db, 'blogs');

  let[finalBlogData,setFinalBlogData]=useState([])
  console.log(finalBlogData);

  let getBlogs = () => {
      onValue(blogRef, (items) => {
          const data = items.val();
          //console.log(data);
          let finalArray=[]
          for(let key in data)
            {
              finalArray.push(data[key])
            }
            setFinalBlogData(finalArray)
            //console.log(finalArray);
            //finalArray.length = 0 ? 
            console.log(finalBlogData);
      });
  }
  useEffect(()=>{
    getBlogs()
  },[])

  return (
    
    <div className=''>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5 " >
          {
            finalBlogData.length >=1 
            ?
            finalBlogData.map((items,index)=>{
              return(
              <div key={index} className='border-2 shadow-gray-600 shadow-lg rounded-xl p-4 m-3'>
              <h1 className="text-xl capitalize font-bold">Demo</h1>
              <p>{items.heading}</p>
              <h1>{items.description}</h1>
              </div>
            )
 
            })

              :
              <div>Loading</div>
          }
              
      </div>
    </div>
  )
}
