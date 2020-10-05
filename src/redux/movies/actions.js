import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {searchActions} from '../../redux/search';
import {detailActions} from '../../redux/detail';
import {Actions} from 'react-native-router-flux';

export function updateList(newList) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList},
  };
  return action;
}

export const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading: loading},
  };
  return action;
};

export const setSelectedMovie = (movie) => {
  const action = {
    type: types.SET_SELECTEDMOVIE,
    payload: {movie: movie},
  };
  return action;
};

export const setNumPages = (numPages) => {
  const action = {
    type: types.SET_NUMPAGES,
    payload: {numPages: numPages},
  };
  return action;
};

export const setActualPage = (actualPage) => {
  const action = {
    type: types.SET_ACTUALPAGE,
    payload: {actualPage: actualPage},
  };
  return action;
};

export function refreshMovies() {
  return async (dispatch, getState) => {
    try {
      state = getState();
      dispatch(setLoading(true));
      const getMoviesRes = await api.getMovies(state.search.search);
      const list = getMoviesRes.data.Search ? getMoviesRes.data.Search : [];
      dispatch(searchActions.updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchMoviesByPage(page) {
  return async (dispatch, getState) => {
    try {
      state = getState();
      dispatch(setLoading(true));
      dispatch(setActualPage(page));
      const getMoviesRes = await api.getMovies(state.search.search, page);
      const list = getMoviesRes.data.Search ? getMoviesRes.data.Search : [];
      dispatch(searchActions.updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function fetchMovieDetail(movie) {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      dispatch(setSelectedMovie(movie));
      const getMovieDetailRes = await api.getMovieDetail(movie.imdbID);
      const movieDetail = getMovieDetailRes.data;
      dispatch(detailActions.setMovieDetail(movieDetail));
      console.log(movieDetail);
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export const addMovie = (data) => {
  return async (dispatch, getState) => {
    try {
      state = getState();
      dispatch(setLoading(true));
      if (!data.Poster) {
        var addedData = {
          Poster: 'null',
          imdbID: 'tt1436480',
          Year: '2012',
          Type: 'movie',
        };
      } else {
        var addedData = {
          imdbID: 'tt1436480',
          Year: '2012',
          Type: 'movie',
        };
      }

      var newData = Object.assign(data, addedData);
      var arrayData = [newData];
      list = state.search.list;
      Array.prototype.push.apply(list, arrayData);
      dispatch(searchActions.updateList(list));
      Actions.pop();
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
