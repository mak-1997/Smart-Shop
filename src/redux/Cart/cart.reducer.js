import * as types from './cart.actionTypes';


const initialState = {
    isLoading: false,
    isError: false,
    data: [],
};
export const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.CART_LOADING: {
            return {
                ...state, isLoading: true, isError: false,
            }
        }
        case types.ADD_TO_CART: {
            return {
                ...state, isLoading: false, isError: false, data: [...state.data, payload],
            }
        }
        case type.REMOVE_FROM_CART: {
            const updatedData = state.data.filter((elem) => elem.id !== payload);
            return {
                ...state, isLoading: false, isError: false, data: updatedData,
            }
        }
        case types.CART_ERROR: {
            return {
                ...state, isLoading: false, isError: true,
            }
        }
        default: {
            return state;
        }
    }

}