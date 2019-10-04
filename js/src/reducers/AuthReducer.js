import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
  } from '../actions/types';
  
  //A reducer is a function that returns some data

  // an action is an object that tells the reducer how to change its data
  //action must have a type property

  // a state is data for our app to use

  // store is an object that holds the application's data {state and reducers}

  const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EMAIL_CHANGED:
        return { ...state, email: action.payload };
      case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
      case LOGIN_USER:
        return { ...state, loading: true, error: '' };
      case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
      case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed.', password: '', loading: false };
      default:
        return state;
    }
  };
