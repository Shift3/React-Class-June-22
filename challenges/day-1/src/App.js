import { useState, useEffect } from 'react';
import {getMoviesByName} from './utils';
import Header from './components/Header';
import Spinner from './components/Spinner';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import classes from './App.module.css';

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

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchTerm(prev => e.target.searchInput.value);
  }

  return (
    <>
      <Header />
      { isLoading ? (
        <Spinner />
      ) : (
        <div className={classes.main}>
          <SearchBar onSubmit={onSubmitHandler}/> 
          <MovieList movies={movies}/> 
        </div>
      )}
    </>
  );
}

export default App;
