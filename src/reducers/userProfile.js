import {
  GET_USER_PROFILE,
  PROFILE_LOADING,
  CLEAR_USER_PROFILE,
} from "../actions/type";

const initialState = {
  profile: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
}
