import {
  GET_SAVED_PROJECTS,
  LOADING,
  CLEAR_SAVED_PROJECTS,
} from "../../actions/type";

const initialState = {
  savedProjects: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_SAVED_PROJECTS:
      return {
        ...state,
        savedProjects: action.payload,
        loading: false,
      };
    case CLEAR_SAVED_PROJECTS:
      return {
        ...state,
        savedProjects: null,
      };
    default:
      return state;
  }
}
