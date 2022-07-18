import {useState} from "react";
import "./movieCard.css";
import MovieDetails from "./MovieDetails";

const MovieCard = ({movie}) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    
    <>
    <div className="container" style={{cursor: "pointer"}} onClick={() => setShowDetails(true)}>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Title}</p>
      <span>{movie.Type}</span>
    </div>

    {showDetails ? (<MovieDetails movieId={movie.imdbID} />): null}

    </>
  );
}

export default MovieCard;