import {useState, useEffect} from "react";
import {getMovieDetailsById} from '../utils';
import "./movieDetails.css";

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
      !movie ? 'Loading details' : (
        <div className="movie">
          <img src={movie.Poster} alt="movie.Title" style={{paddingRight:'2rem'}} />
          <div className="movieDetail">
            <h2>{movie.Title}</h2>
            <h1 style={{color: 'blue'}}>{movie.imdbRating}</h1> 

            <div>
              <span>{movie.Rated}</span>  
              <span>{movie.Runtime}</span>  
            </div>

            <div>
              <span>{movie.Genre}</span>
            </div>

            <div>
              <h4>Plot</h4>
              <p>{movie.Plot}</p>  
            </div>

            <div>
              <h4>Actors</h4>
              <p>{movie.Actors}</p>
            </div> 
          </div> 
        </div>
      )
    }
  </>
    
  );
}

export default MovieDetails;