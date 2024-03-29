const API_URL = 'http://www.omdbapi.com';
const API_KEY = 'd71fd0c8';

export const getMoviesByName = async(name='Batman') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${name}`);
  const data = await response.json();

  return data;
}

export const getMovieDetailsById = async (movieId='tt3032476') => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&i=${movieId}`);
  const data = await response.json();
  return data;
}

export const getMoviesBySearchTerm = async(searchInput, page=1) => {
  const response = await fetch(`${API_URL}/?apiKey=${API_KEY}&s=${searchInput}&page=${page}`);
  const data = await response.json();
  return data;
}
