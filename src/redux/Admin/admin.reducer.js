import * as types from "./admin.actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  users: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADMIN_LOADING_GETPRODUCTS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.ADMIN_ERROR_GETPRODUCTS:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case types.ADMIN_LOADING_USERS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case types.ADMIN_ERROR_USERS:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.GET_ADMIN_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        products: payload,
      };
    case types.GET_ADMIN_USERS:
      return {
        ...state,
        users: payload,
      };

    case types.DELETE_ADMIN_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== payload),
      };
    case types.DELETE_ADMIN_USERS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== payload),
      };
    case types.ADD_PRODUCT_ADMIN_SUCCESS:
      return {
        ...state,
        products: [payload, ...state.products],
      };

    case types.ADMIN_UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: state.products.map((item) =>
          item.id === payload.id ? payload : item
        ),
      };

    default:
      return state;
  }
};
