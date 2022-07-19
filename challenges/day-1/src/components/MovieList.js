import styled from 'styled-components';
import MovieCard from './MovieCard';

const MovieList = ({ movies, pageNum, totalPages, nextPage, previousPage }) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <MovieListContainer>
        {
          movies.map(movie => (<MovieCard movie={movie} key={movie.imdbID}/>))
        }
      </MovieListContainer>

      <div style={{margin: "3rem auto"}}>
        <button style={{
          marginRight: "1rem",
          cursor: pageNum === 1 ? "" : "pointer",
          fontSize: "2rem",
          padding: "1rem 2rem"
        }}
        disabled={pageNum === 1}
        onClick={previousPage}>&lt;</button>

        <button style={{
          cursor: pageNum === totalPages ? "" : "pointer",
          fontSize: "2rem",
          padding: "1rem 2rem"
        }}
        disabled={pageNum === totalPages}
        onClick={nextPage}>&gt;</button>

        <p style={{
          marginTop: "2rem",
          textAlign: "center",
          fontWeight: "bold"
        }}>
          Page {pageNum} of {totalPages}
        </p>
      </div>
    </div>
  );
}

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: auto 1fr;
  gap: 2rem;
`;
export default MovieList;