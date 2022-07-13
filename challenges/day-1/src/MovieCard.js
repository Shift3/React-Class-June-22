import {useState, useEffect} from "react";
import "./movieCard.css";
import {getMoviesByName} from './utils';
import MovieDetails from "./MovieDetails";

const MovieCard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesByName('Batman').then(response => {
      setMovie(response.Search[0]);
    })
  }, []);

  return (
    !movie ? 'Loading the first movie' : (
    <>
    <div className="container" style={{cursor: "pointer"}} onClick={() => setShowDetails(true)}>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Title}</p>
      <span>{movie.Type}</span>
    </div>

    {showDetails ? (<MovieDetails movieId={movie.imdbID} />): null}

    </>
    )
  );
}

export default MovieCard;