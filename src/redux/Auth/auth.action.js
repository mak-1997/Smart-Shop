// import { setItem } from "../../utility/localStorage";
// import * as types from "./auth.actionTypes";
// import {
//   AddAdminApi,
//   AddUserApi,
//   DeleteUserAPI,
//   GetAllAdminAPI,
//   GetAllUseresAPI,
//   LoginApi,
//   LogoutApi,
// } from "./auth.api";

import { removeItemSession, setItemSession } from "../../utility/localStorage";
import {
  ERROR,
  LOADING,
  Login,
  LOGOUT,
  REGISTER_SUCCESS,
} from "./auth.actionTypes";
import { getUsers, Register } from "./auth.api";



export const RegisterUser = (user) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await Register(user);

    dispatch({ type: REGISTER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const GetUsersData = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await getUsers();

    dispatch({ type: REGISTER_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const LoginCheck = (username) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    dispatch({ type: Login, payload: username });
    setItemSession("LoginUser", username);
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const LogoutUser = () => (dispatch) => {
  dispatch({ type: LOADING });

  try {
    dispatch({ type: LOGOUT, payload: "" });
    removeItemSession("LoginUser");
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const AdminLoginInfo = (cred) => (dispatch) => {
  try {

  } catch (error) {}
};
