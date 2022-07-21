import {useState} from "react";
import "./movieCard.css";
import MovieDetails from "./MovieDetails";
import Modal from "./Modal";

const MovieCard = ({movie}) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    
    <>
    <div className="container" style={{cursor: "pointer"}} onClick={() => setShowModal(!showModal)}>
      <img src={movie.Poster} alt={movie.Title}/>
      <p>{movie.Title}</p>
      <span>{movie.Type}</span>
    </div>
    <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
      <MovieDetails movieId={movie.imdbID} />
    </Modal>
    </>
  );
}

export default MovieCard;