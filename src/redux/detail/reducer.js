import * as types from './types';

const initialState = {
  movieDetail: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_MOVIEDETAIL:
      return {...state, movieDetail: action.payload.movieDetail};
    default:
      return state;
  }
};

export default reducer;
