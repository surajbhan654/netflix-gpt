import {API_OPTIONS} from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

//fetch movies trailer and put it into the store  this is called modular coding  i am creating the smaller peace of code and smaller module. 
//every small components has it's own job. it also promotes separation of concern
// if i have only one parameter then don't do this ({movieId});
const useMovieTrailer = (movieId) => {

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
      const json = await data.json();
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const Trailer = filterData.length ? filterData[0] : json.result[0];
      dispatch(addTrailerVideo(Trailer));
  }

  useEffect (()=>{
     !trailerVideo && getMovieVideos();
  },[])
}

export default useMovieTrailer