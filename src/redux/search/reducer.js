import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  search: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};

    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.SET_SEARCH:
      return {...state, search: action.payload.search};

    default:
      return state;
  }
};

export default reducer;
