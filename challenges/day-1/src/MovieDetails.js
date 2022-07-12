import {useState, useEffect} from "react";
import {getMovieDetailsById} from './utils';

const MovieDetails = ({movieId}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetailsById(movieId).then(response => {
      setMovie(response);
    })
  }, [movieId]);

  return (
    <>
    {
      !!movie ? (
        <div>
          {movie.Poster} ,{movie.Title}, {movie.Rated}
        </div>
      ) : 'Loading details'
    }
  </>
    
  );
}

export default MovieDetails;