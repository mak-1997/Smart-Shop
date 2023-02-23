import { getItemSession } from "../../utility/localStorage";
import {
  ERROR,
  GET_USER,
  LOADING,
  Login,
  LOGOUT,
  REGISTER_SUCCESS,
} from "./auth.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: getItemSession("LoginUser") ? true : false,
  username: getItemSession("LoginUser") || "",
  users: [],
};

export const Authreducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        users: payload,
      };

    case GET_USER:
      return {
        ...state,
        users: payload,
      };

    case Login:
      return {
        ...state,
        isAuth: true,
        username: payload,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        username: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
