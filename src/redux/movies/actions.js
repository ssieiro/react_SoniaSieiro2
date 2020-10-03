import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {searchActions} from '../../redux/search';

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

export const setMovieID = (movieID) => {
  const action = {
    type: types.SET_SEARCH,
    payload: {search: search},
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

export function fetchMovieDetail(movieID) {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      dispatch(setMovieId(movieId));
      const getMovieDetailRes = await api.getMovieDetail(movieID);
      console.log(getMovieDetailRes);
      //const list = getMoviesRes.data.Search ? getMoviesRes.data.Search : [];
      //dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
}
