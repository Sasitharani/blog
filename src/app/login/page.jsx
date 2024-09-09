"use client"
import {React,useState} from 'react'


export default function Login() {
  let [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      login page
      <div className="min-h-screen flex items-center justify-center">
        {/* <!-- login form --> */}
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Sign in to Your Account
          </h2>

          <form className="space-y-5">
    

            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-bold text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Sign Up
            </button>
          <div className='text-center'>or</div>
        
            <button className="block w-full bg-blue-400 hover:bg-blue-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">
              Google Sign in
            </button>

          </form>
        </div>
      </div>
      
    </div>
  );
}
