import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/151f3e1e-b2c9-4626-afcd-6b39d0b2694f/web/IN-en-20241028-TRIFECTA-perspective_bce9a321-39cb-4cce-8ba6-02dab4c72e53_large.jpg'
             alt='logo' />
        </div>

        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-3xl py-4'> {isSignInForm ?  "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm && 
             <input
              type='text'
              placeholder='Full Name'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />}

            <input
              type='text'
              placeholder='Email Address'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />
            <input
              type='password'
              placeholder='Password'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'> {isSignInForm ? "Sign In":"Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm} > 
              { isSignInForm ?
               "New to Netflix? Sign Up Now" :
               "Already Registered Sign In"} </p>
        </form>
    </div>
  )
}

export default Login