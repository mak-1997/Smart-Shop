import * as types from './cart.actionTypes';


const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    CartTotal: 0,
};
export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.CART_LOADING: {
            return {
                ...state, isLoading: true, isError: false,
            }
        }
        case types.GET_CART_ITEMS: {
            return { ...state, isLoading: false, isError: false, data: payload }
        }
        case types.ADD_TO_CART: {
            return {
                ...state, isLoading: false, isError: false, data: [...state.data, payload],
            }
        }
        case types.DELETE_FROM_CART: {
      
            const updatedData = state.data.filter((elem) => elem.id !== payload);

            return {
                ...state, isLoading: false, isError: false, data: updatedData,
            }
        }
        case types.CART_ITEM_QUANTITY_UPDATE: {
            const updatedData = state.data.map((elem) => (elem.id === payload.data.id ? { ...elem, orderedQuantity: elem.orderedQuantity + payload.change, avilableQuantity: elem.avilableQuantity - payload.change } : elem));
            return {
                ...state, data: updatedData
            }
        }
        case types.CART_ERROR: {
            return {
                ...state, isLoading: false, isError: true,
            }
        }
        case types.CALCULATE_TOTAL: {
            let total = payload.reduce(
                (accumulate, elem) => accumulate + elem.price * elem.orderedQuantity, 0);
            return { ...state, cartTotal: total };
        }
        default: {
            return state;
        }
    }

}