const API_URL = 'http://www.omdbapi.com';
const API_KEY = '';

const getMoviesByName = async(name='Batman') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
  const data = await response.json();

  console.log('movies:', data);
}

getMoviesByName('Better call');