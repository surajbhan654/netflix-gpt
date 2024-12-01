import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const handleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful
    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }

  useEffect ( () => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
     
      if (user) {
        // User is signed in, see docs for a list of available properties
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL} ))
        navigate('/browse')
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate('/')
      } 
    
    });

  //when the component will unmount this will unload the onAuthStateChanged
  return () => unSubscribe();
  },[])

  return (
    <div className='absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo' />

      {user && <div className='flex flex-row p-2 items-center'>
        <img
          className='w-8 h-8'
          alt='user icon'
          src={user?.photoURL} />

        <button onClick={handleSignOut} className='text-white font-bold px-1'>Sign out</button>
      </div>}

    </div>
  )
}

export default Header