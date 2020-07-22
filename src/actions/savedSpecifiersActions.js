import axios from "axios";
import { GET_SAVED_SPECIFIERS, LOADING } from "./type";

const Url = "http://widastructure.local/wp-json";
// get saved SPECIFIER
export const getSavedSpecifiers = () => (dispatch) => {
  dispatch(setSpecifierLoading());

  axios
    .get(`${Url}/myroute/v1/specifier-bookmarks`)
    .then((res) =>
      dispatch({
        type: GET_SAVED_SPECIFIERS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_SAVED_SPECIFIERS,
        payload: {},
      });
    });
};

// set SPECIFIER loading
export const setSpecifierLoading = () => {
  return {
    type: LOADING,
  };
};
