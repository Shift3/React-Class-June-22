import { useState, useEffect } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import {getMoviesByName} from './utils';
import Header from './components/Header';
import Spinner from './components/Spinner';
import MovieList from './components/MovieList';

function App() {
  const [searchTerm, setSearchTerm] = useState('batman');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMoviesByName(searchTerm).then(response => {
      setMovies(response.Search);
      console.log('movies: ', movies);
      setError(null);
    }).catch(err => {
      setMovies([]);
      setError(`Error occured: ${err}`);
    }).finally(() => setIsLoading(false));

  }, [searchTerm]);

  return (
    <>
      <Header />
      { isLoading ? (
        <Spinner />
      ) : (
        <MovieList movies={movies}/>
      )}
    </>
  );
}

export default App;
