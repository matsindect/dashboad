import { SET_CURRENT_USER, LOADING } from "../actions/type";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
