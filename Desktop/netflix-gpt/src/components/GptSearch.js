import React from 'react'
import GptSerchBar from './GptSerchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
   
  return (
    <div >
      <div className='fixed -z-10'>
          <img className='h-full object-cover'  src={BG_URL} alt='logo'/>
      </div>
      <div className=''>
        <GptSerchBar/>
        <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearch