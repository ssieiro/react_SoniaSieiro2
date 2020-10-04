import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import {moviesActions} from '../../redux/movies';

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

export const setSearch = (search) => {
  const action = {
    type: types.SET_SEARCH,
    payload: {search: search},
  };
  return action;
};

export const fetchMovies = (search) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      dispatch(setSearch(search));
      const getMoviesRes = await api.getMovies(search);
      const list = getMoviesRes.data.Search ? getMoviesRes.data.Search : [];
      const results = parseInt(getMoviesRes.data.totalResults, 10);
      var pages;
      if (results % 10 === 0) {
        pages = results / 10;
      } else {
        pages = parseInt((results / 10 + 1).toFixed(0));
      }
      dispatch(moviesActions.setNumPages(pages));
      dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
