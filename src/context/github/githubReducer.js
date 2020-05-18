import { SEARCH_USERS, SET_LOADING, GET_USER, GET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    default:
      return state;
  }
};
