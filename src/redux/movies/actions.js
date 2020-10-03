import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

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

export const fetchMovieDetail = (movieID) => {
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
};
