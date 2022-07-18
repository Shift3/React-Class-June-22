import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <MovieListContainer>
        {
          movies.map(movie => (<MovieCard movie={movie} key={movie.imdbID}/>))
        }
      </MovieListContainer>
    </div>
  );
}

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: auto 1fr;
  grid-gap: 2rem;
`;
export default MovieList;