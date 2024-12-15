import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //optional chaining isliye, if movies has null then it won't show any error.
  //before executing store, 1st time movies me null aa rha h and refresh krne k bad ye update ho rha h. and this return is called early return.
  if(movies == null) return;
   
   const mainMovie = movies[0];
   const {original_title, overview, id } = mainMovie;

    return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer