import {
  GET_SINGLE_PRODUCT,
  SINGLE_ERROR,
  SINGLE_LOADING,
  UPDATE_SINGLE_PRODUCT
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

    case UPDATE_SINGLE_PRODUCT: {
      const { data, change } = payload;
      if (change === 1) {
        return {
          ...state, singleProduct: { ...data, isAdded: true, orderedQuantity: 1, avilableQuantity: data.avilableQuantity - 1 }
        }
      } else {
        return {
          ...state, singleProduct: { ...data, isAdded: false, orderedQuantity: 0, avilableQuantity: data.avilableQuantity + 1 }
        }
      }
    }
    default:
      return state;
  }
};
