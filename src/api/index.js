import axios from 'axios';
import {BASE_URL} from '../config/api';
import API_KEY from '../config/api/apikey';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getMovies = (search) => {
  const url = `/?apikey=${API_KEY}&s=${search}`;
  return instance.get(url);
};

export const getMovieDetail = (movieID) => {
  const url = `/?apikey=${API_KEY}&i=${movieID}`;
  return instance.get(url);
};
