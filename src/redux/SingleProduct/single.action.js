import {
  GET_SINGLE_PRODUCT,
  SINGLE_ERROR,
  SINGLE_LOADING, UPDATE_SINGLE_PRODUCT
} from "./single.ActionTypes";
import { getSingleProduct, updateSingleProductAPI } from "./single.api";

export const GetSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_LOADING });
  try {
    let res = await getSingleProduct(id);
    dispatch({ type: GET_SINGLE_PRODUCT, payload: res });
  } catch (error) {
    dispatch({ type: SINGLE_ERROR });
  }
};


export const updateSingleProductData = (data, change) => async (dispatch) => {
  dispatch({ type: UPDATE_SINGLE_PRODUCT, payload: {data, change }})
  try {
    await updateSingleProductAPI(data, change)
  } catch (error) {
    dispatch({ type: SINGLE_ERROR });
  }
}

