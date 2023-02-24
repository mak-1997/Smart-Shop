import {
  GET_SINGLE_PRODUCT,
  SINGLE_ERROR,
  SINGLE_LOADING,
} from "./single.ActionTypes";
import { getSingleProduct } from "./single.api";

export const GetSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: SINGLE_LOADING });
  try {
    let res = await getSingleProduct(id);
    dispatch({ type: GET_SINGLE_PRODUCT, payload: res });
  } catch (error) {
    dispatch({ type: SINGLE_ERROR });
  }
};
