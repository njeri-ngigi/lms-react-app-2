import { authActionTypes } from '../actions/actionTypes';
import getItem from '../utils/getItem';

const initialState = {
  loginErrors: [],
  signupErrors: [],
  isLoginLoading: false,
  isSignUpLoading: false,
  loginSuccess: false,
  signupSuccess: false,
  isUserLoggedIn: getItem('isUserLoggedIn'),
};
const {
  SIGNED_UP,
  SIGNING_UP,
  LOGGING_IN,
  LOGGED_IN,
  SIGNUP_ERRORS,
  LOGIN_ERRORS,
  LOGOUT,
} = authActionTypes;

const authReducer = (state = initialState, action) => {
  const {
    isLoginLoading,
    isSignUpLoading,
    errors,
    signupSuccess,
    isUserLoggedIn,
  } = action;
  switch (action.type) {
    case SIGNING_UP:
      return { ...state, isSignUpLoading };
    case SIGNED_UP:
      return { ...state, isSignUpLoading, signupSuccess };
    case LOGGING_IN:
      return { ...state, isLoginLoading };
    case LOGGED_IN:
      return { ...state, isLoginLoading, loginSuccess: true, isUserLoggedIn };
    case SIGNUP_ERRORS:
      return { ...state, signupErrors: errors };
    case LOGIN_ERRORS:
      return { ...state, loginErrors: errors };
    case LOGOUT:
      return { ...state, isUserLoggedIn: false };

    default:
      return false;
  }
};

export default authReducer;
