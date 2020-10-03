import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  movieID: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.SET_MOVIEID:
      return {...state, movieID: action.payload.movieID};

    default:
      return state;
  }
};

export default reducer;
