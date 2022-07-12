import {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import {getMoviesByName} from './utils';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesByName('Batman').then(response => {
      setMovies(response.Search);
    })
  }, []);
  return (
    <>
      {movies.length ? (
        <div className="App">
        <MovieCard 
          movieId={movies[0].imdbID}
          title={movies[0].Title} 
          type={movies[0].Type} 
          posterUrl={movies[0].Poster}/>
      </div>
      ) : 'Loading data..'}
    </>
    
  );
}

export default App;
