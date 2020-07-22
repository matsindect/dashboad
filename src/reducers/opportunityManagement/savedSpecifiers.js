import {
  GET_SAVED_SPECIFIERS,
  LOADING,
  CLEAR_SAVED_SPECIFIERS,
} from "../../actions/type";

const initialState = {
  savedSpecifiers: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_SAVED_SPECIFIERS:
      return {
        ...state,
        savedSpecifiers: action.payload,
        loading: false,
      };
    case CLEAR_SAVED_SPECIFIERS:
      return {
        ...state,
        savedSpecifiers: null,
      };
    default:
      return state;
  }
}
