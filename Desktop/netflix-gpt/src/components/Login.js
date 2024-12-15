import React, { useState, useRef } from 'react'
import Header from './Header'
import {checkValidData} from '../utils/Validate'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, User_Avtar } from '../utils/constants';

//yha hm user ko auth.currentUser se bhi nikal skte hain
// or userCredential.user isse bhi nikal skte hain user ko
// ya fir store se nikal skte hain 

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null)
  const email = useRef(null); 
  const password = useRef(null);
  //useRef use only for boxes like button, input box
  // if we want to store then we can use state variable. 
 
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
     
    // email.current is refering to the input box
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return;

    //sign in / sign up login
    if(!isSignInForm){
      //signup logic 
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {

          const user = userCredential.user; 
          updateProfile(auth.currentUser, {
            //adding new data i.e displayName and photoURL in user
            displayName: name.current.value, photoURL: User_Avtar
          })
          .then(() => {
            //here auth is utility function  which is updated because user(store) is not updated
            const {uid, email, displayName, User_Avtar} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:User_Avtar}))
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
    else{
      //signin logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }

  }



  return (
    <div>
        <Header/>
        
        <div className='absolute'>
            <img className=' object-cover' src= {BG_URL}
             alt='logo' />
        </div>

       {/* if we don't change the default behavior of onSubmit then it automatically send data to server and refresh the page or it will try to submit the form*/}
        <form onSubmit={(e)=>e.preventDefault()} 
        className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
            <h1 className='font-bold text-3xl py-4'> {isSignInForm ?  "Sign In" : "Sign Up"}</h1>
            
            {!isSignInForm && 
             <input
              ref={name}
              type='text'
              placeholder='Full Name'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />}

            <input
              ref={email}
              type='text'
              placeholder='Email Address'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />
            <input
              ref={password}
              type='password'
              placeholder='Password'
              className='p-2 my-2 w-full rounded-md bg-gray-700'
            />

            <p className='text-red-600 font-bold'>{errorMessage}</p>

            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}> {isSignInForm ? "Sign In":"Sign Up"}</button>

            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> 
              { isSignInForm ?
               "New to Netflix? Sign Up Now" :
               "Already Registered Sign In"} </p>
        </form>
    </div>
  )
}

export default Login