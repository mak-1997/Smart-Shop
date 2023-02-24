import {
  ADD_ADMIN_PRODUCT_ERROR,
  ADD_ADMIN_PRODUCT_LOADING,
  ADD_PRODUCT_ADMIN_SUCCESS,
  ADMIN_AUTH,
  ADMIN_ERROR,
  ADMIN_ERROR_GETPRODUCTS,
  ADMIN_ERROR_USERS,
  ADMIN_LOADING,
  ADMIN_LOADING_GETPRODUCTS,
  ADMIN_LOADING_USERS,
  ADMIN_UPDATE_PRODUCT_SUCCESS,
  DELETE_ADMIN_PRODUCT,
  DELETE_ADMIN_USERS,
  GET_ADMIN_PRODUCT_SUCCESS,
  GET_ADMIN_USERS,
} from "./admin.actionTypes";
import {
  AddProudctAdmin,
  deleteProduct,
  deleteUser,
  getAdminProduct,
  getAdminUser,
  updateProductAdmin,
} from "./admin.api";

export const getAdminProducts = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING_GETPRODUCTS });
  try {
    let res = await getAdminProduct();
    dispatch({ type: GET_ADMIN_PRODUCT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR_GETPRODUCTS });
  }
};

export const getAdminUsers = () => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING_USERS });
  try {
    let res = await getAdminUser();
    dispatch({ type: GET_ADMIN_USERS, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR_USERS });
  }
};

export const DeleteAdminProducts = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await deleteProduct(id);
    dispatch({ type: DELETE_ADMIN_PRODUCT, payload: id });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};

export const DeleteAdminUser = (id) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await deleteUser(id);
    dispatch({ type: DELETE_ADMIN_USERS, payload: id });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};

export const AddProductInAdmin = (data) => async (dispatch) => {
  dispatch({ type: ADD_ADMIN_PRODUCT_LOADING });
  try {
    let res = await AddProudctAdmin(data);
    dispatch({ type: ADD_PRODUCT_ADMIN_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ADD_ADMIN_PRODUCT_ERROR });
  }
};

export const UpdateProductInAdmin = (id, data) => async (dispatch) => {
  dispatch({ type: ADMIN_LOADING });
  try {
    let res = await updateProductAdmin(id, data);

    dispatch({ type: ADMIN_UPDATE_PRODUCT_SUCCESS, payload: res });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
};

export const AdminLogin = () => (dispatch) => {
  dispatch({ type: ADMIN_LOADING });

  try {
    dispatch({ type: ADMIN_AUTH, payload: true });
  } catch (error) {
    dispatch({ type: ADMIN_ERROR });
  }
}; 
