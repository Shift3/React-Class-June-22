import {useState} from "react";
import "./movieCard.css";
import MovieDetails from "./MovieDetails";

const MovieCard = ({movieId, title, type, posterUrl}) => {
  const [showDetails, setShowDetails] = useState(false);
  

  return (
    <>
    <div className="container" style={{cursor: "pointer"}} onClick={() => setShowDetails(true)}>
      <img src={posterUrl} alt={title}/>
      <p>{title}</p>
      <span>{type}</span>
    </div>

    {showDetails ? (<MovieDetails movieId={movieId} />): null}

    </>
  );
}

export default MovieCard;