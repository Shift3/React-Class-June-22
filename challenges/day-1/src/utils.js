const API_URL = 'http://www.omdbapi.com';
const API_KEY = '';

export const getMoviesByName = async(name='Batman') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
  const data = await response.json();

  console.log('10 first results of movies:', data);
}

export const getMovieDetailsById = async (movieId='tt3032476') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&i=${movieId}`);
  const data = await response.json();
  console.log('Movie:', data);
}
