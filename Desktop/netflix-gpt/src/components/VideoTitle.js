import React from 'react'

const videoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold' >{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>

        <div>
            <button className='bg-white text-black p-2 px-6 text-lg rounded-lg hover:bg-opacity-50'>
             ▶ Play 
            </button>

            <button className='mx-2 bg-gray-500 text-white p-2 px-6 text-lg bg-opacity-50 rounded-lg'>
               ℹ More Info
            </button>
        </div>
    </div>
  )
}

export default videoTitle