import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const AUTH_TOKEN = 'c18b6e4daa60e3e4af297dba0629174d';

//type 'day' or 'week'
export const getMoviesTrending = async (type, page) => {
  const response = await axios.get(
    `/trending/movie/${type}?api_key=${AUTH_TOKEN}&page=${page}`
  );
  return response.data;
};

export const getSearchMovie = async (query, page) => {
  const response = axios.get(
    `search/movie?api_key=${AUTH_TOKEN}&query=${query}&language=en-US&&page=${page}&include_adult=false`
  );
  return response;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${AUTH_TOKEN}&language=en-US&append_to_response=credits,reviews`
  );
  return response;
};
