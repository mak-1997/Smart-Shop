import { GET_SINGLE_PRODUCT } from "./single.ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  singleProduct: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
      };
    default:
      return state;
  }
};
