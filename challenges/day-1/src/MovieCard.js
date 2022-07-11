import "./movieCard.css";

const MovieCard = ({title, type, posterUrl}) => {
  return (
    <div className="container">
      <img src={posterUrl} alt={title}/>
      <p>{title}</p>
      <span>{type}</span>
    </div>
  );
}

export default MovieCard;