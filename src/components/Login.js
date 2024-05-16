import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='logo'/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black text-white my-36 mx-auto left-0 right-0 rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl py-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type="text" placeholder='Mobile or Email Address' className='p-4 my-4 w-full bg-gray-700'/>
        <input type="text" placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        
        
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>


          <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
            
            </p>

      </form>
    </div>
  )
}

export default Login