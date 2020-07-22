import axios from "axios";
import { GET_SAVED_PROJECTS, LOADING } from "./type";

const Url = "http://widastructure.local/wp-json";
// get saved projects
export const getSavedProjects = () => (dispatch) => {
  dispatch(setProjectsLoading());

  axios
    .get(`${Url}/myroute/v1/project-bookmarks`)
    .then((res) =>
      dispatch({
        type: GET_SAVED_PROJECTS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch({
        type: GET_SAVED_PROJECTS,
        payload: {},
      });
    });
};

// set projects loading
export const setProjectsLoading = () => {
  return {
    type: LOADING,
  };
};
