import * as types from './types';

export const setMovieDetail = (movieDetail) => {
  const action = {
    type: types.SET_MOVIEDETAIL,
    payload: {movieDetail: movieDetail},
  };
  return action;
};
