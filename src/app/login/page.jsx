"use client";
import React, { useState } from "react";

export default function Login() {
  let [show, setShow] = useState(true);
  console.log(show);

  return (
    <>
    {
       show
       ?      <div className="" id="login">
       Login page
       <button onClick={setShow}>Login</button>
     </div>
       : 
       (
        <div className="bg-slate-400 text-center m-auto">
        Create new Account
        <button onClick={() => setShow(true)}>Login</button>
        </div>
       )
    }
 
      <div className="" id="signup">
        Create a New Account
        <button onClick={() => setShow(false)}>Create new account</button>
      </div>

     
    </>
  );
}
