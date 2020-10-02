import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';
import store from '../../config/redux';

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
      console.log(getMoviesRes);
      const list = getMoviesRes.data.Search ? getMoviesRes.data.Search : [];
      dispatch(updateList(list));
      console.log('store', store.getState());
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
