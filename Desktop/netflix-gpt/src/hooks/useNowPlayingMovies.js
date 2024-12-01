
import { API_OPTIONS} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
//this customHook is fetching the now playing movies(recent movies) data and put it into the store 

//fetch data from here https://developer.themoviedb.org/reference/movie-now-playing-list
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.results); // Logs the JSON response
        dispatch(addNowPlayingMovies(json.results));
      } 
      catch (error) {
        console.error('Failed to fetch now playing movies:', error);
      }
  };

  useEffect( ()=> {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;