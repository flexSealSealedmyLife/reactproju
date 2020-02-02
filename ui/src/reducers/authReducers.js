import * as actions from '../actions/types';
import { isEmpty } from 'ramda';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case actions.USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default authReducers;
