import axios from "axios";
import { GET_USER_PROFILE, PROFILE_LOADING } from "./type";

const Url = "http://widastructure.local/wp-json";
// get user profile
export const getUserProfile = () => (dispatch) => {
  dispatch(setProfileoading());

  axios
    .get(`${Url}/wp/v2/users/me`)
    .then((res) =>
      dispatch({
        type: GET_USER_PROFILE,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_USER_PROFILE,
        payload: {},
      });
    });
};

export const updateUserProfile = (profileData, history) => (dispatch) => {
  axios
    .post(`${Url}/wp/v2/users/me`, profileData)
    .then((res) => history.push("/account-details"))
    .catch((err) => {
      console.log(err);
      console.log(err);
    });
};
// set user profile loading
export const setProfileoading = () => {
  return {
    type: PROFILE_LOADING,
  };
};
