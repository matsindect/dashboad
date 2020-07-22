import axios from "axios";
import setAuthToken from "../utils/setAutentication";
import JWT_DECODE from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, LOADING } from "./type";

const siteUrl = "http://widastructure.local/";
export const loginUser = (userData) => (dispatch) => {
  dispatch(setLoading());
  axios
    .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, userData)
    .then((res) => {
      const { token } = res.data;

      localStorage.setItem("jwtToken", token);

      setAuthToken(token);

      const decode = JWT_DECODE(token);

      console.log(decode);
      dispatch(setCurrentUser(decode));
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header from future request
  setAuthToken(false);
  // set current user auth
  dispatch(setCurrentUser({}));
};

// set projects loading
export const setLoading = () => {
  return {
    type: LOADING,
  };
};
