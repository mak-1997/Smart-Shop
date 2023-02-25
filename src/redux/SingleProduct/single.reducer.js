import {
  GET_SINGLE_PRODUCT,
  SINGLE_ERROR,
  SINGLE_LOADING,
} from "./single.ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  singleProduct: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SINGLE_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        isLoading: false,
        singleProduct: payload,
      };
    case SINGLE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
