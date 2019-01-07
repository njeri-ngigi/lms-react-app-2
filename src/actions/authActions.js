import axios from 'axios';

import { urls, headerObject } from '../utils/endpoints';
import { authActionTypes } from './actionTypes';
const {
  SIGNED_UP,
  SIGNING_UP,
  LOGGING_IN,
  LOGGED_IN,
  SIGNUP_ERRORS,
  LOGIN_ERRORS,
  LOGOUT,
} = authActionTypes;

const loggingIn = () => ({
  type: LOGGING_IN,
  isLoginLoading: true,
});
const loggedIn = () => ({
  type: LOGGED_IN,
  isLoginLoading: false,
  isUserLoggedIn: true,
});
const loginErrors = (errors) => ({
  type: LOGIN_ERRORS,
  isLoginLoading: false,
  errors,
});
const signingUp = () => ({
  type: SIGNING_UP,
  isSignupLoading: true,
});
const signedUp = () => ({
  type: SIGNED_UP,
  isSignupLoading: false,
  signupSuccess: true,
});
const signupErrors = (errors) => ({
  type: SIGNUP_ERRORS,
  isLoginLoading: false,
  errors,
});
const onLogout = () => ({
  type: LOGOUT,
  isUserLoggedIn: false,
});

export const login = (body) => (dispatch) => {
  dispatch(loggingIn());
  axios
    .post(urls.LOGIN, body, headerObject(''))
    .then((resp) => {
      if (resp.status === 200) {
        localStorage.setItem('isUserLoggedIn', JSON.stringify(true));
        dispatch(loggedIn());
      } else {
        console.log(resp.data.message);
        dispatch(loginErrors(resp.data.message));
      }
    })
    .catch((resp) => {
      dispatch(loginErrors('Failed, please try again.'));
    });
};

export const signup = (body) => (dispatch) => {
  dispatch(signingUp());
  axios
    .post(urls.SIGNUP, body, headerObject(''))
    .then((resp) => {
      if (resp.status === 201) {
        console.log('success!', resp.data);
        dispatch(signedUp());
      } else {
        dispatch(signupErrors(resp.data.message));
      }
    })
    .catch((resp) => {
      dispatch(signupErrors('Failed, please try again.'));
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('isUserLoggedIn');
  dispatch(onLogout());
};
