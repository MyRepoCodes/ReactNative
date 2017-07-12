/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/


import { Actions } from 'react-native-router-flux';
import { reset } from 'redux-form';
import * as actionTypes from './actionTypes';
import axios from 'axios';
import { SIGNIN_URL,SIGNUP_URL,AUTH_URL } from '../../config/api';

export const signInUser = ({ email, password }) => (dispatch) => {
  const postObj = {email,password};
  dispatch({ type: actionTypes.SIGN_IN_REQUEST });
  return axios.post(SIGNIN_URL, postObj).then((response) => {
      const tokenObj = {
        username: postObj.email,
        password: postObj.password,
        client_id: 'bluePSCIE',
        client_secret: 'bluePSCIE-secret',
        grant_type: 'password'
      }
      axios.post(AUTH_URL,tokenObj).then((res) => {
        dispatch({
        type: actionTypes.SIGN_IN_SUCCESS,
        payload: res.data
      });
      dispatch(reset('signin'));
      Actions.main();
      })
    })
    .catch((error) => {
      console.log("error",error.response.status);
      dispatch({
        type: actionTypes.SIGN_IN_FAILURE,
        payload: authFailMessage(error.response.status)
      });
    });
};

export const signUpUser = ({ email, password, firstname, lastname }) => (dispatch) => {
  dispatch({ type: actionTypes.SIGN_UP_REQUEST });
  console.log("signup user");
  // firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then((user) => {
  //     firebase.database().ref('users').child(user.uid)
  //       .set({ firstname, lastname })
  //       .then(() => {
  //         dispatch({ type: actionTypes.SIGN_UP_SUCCESS, payload: user });

  //         dispatch(reset('signup'));

  //         Actions.post();
  //       });
  //   })
  //   .catch((error) => { dispatch({ type: actionTypes.SIGN_UP_FAILURE, payload: authFailMessage(error.code) }); });
};

export const clearState = () => (
  { type: actionTypes.SET_INITIAL_STATE }
);

export const signOutUser = () => (dispatch) => {
  dispatch({ type: actionTypes.SET_INITIAL_STATE });
  console.log("logout");
  // firebase.auth().signOut();
};

const authFailMessage = (errorCode) => {
  switch (errorCode) {
    case 401:
      return 'Email & Password do not match.';
    case 'auth/user-disabled':
      return 'User is disabled.';
    case 404:
      return 'User not found.';
    case 'auth/wrong-password':
      return 'Password is invalid.';
    case 'auth/email-already-in-use':
      return 'Email address is already in use.';
    case 'auth/weak-password':
      return 'Password is not strong enough.';
    default:
      return 'Authentication failed.';
  }
};



