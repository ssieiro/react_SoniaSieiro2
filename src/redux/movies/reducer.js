import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  movie: {},
  numPages: 1,
  actualPage: 1,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.SET_SELECTEDMOVIE:
      return {...state, movie: action.payload.movie};

    case types.SET_NUMPAGES:
      return {...state, numPages: action.payload.numPages};

    case types.SET_ACTUALPAGE:
      return {...state, actualPage: action.payload.actualPage};

    default:
      return state;
  }
};

export default reducer;
