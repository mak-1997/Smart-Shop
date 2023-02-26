import { BiData } from "react-icons/bi";
import { GET_SINGLE_PRODUCT, UPDATE_SINGLE_PRODUCT } from "./single.ActionTypes";

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
