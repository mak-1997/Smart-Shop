import * as types from './products.actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
}

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.PRODUCTS_LOADING: {
            return {
                ...state, isLoading: true, isError: false,
            }
        }
        case types.GET_PRODUCTS: {
            return {
                ...state, isLoading: false, isError: false, data: payload,
            }
        }
        case types.ADD_PRODUCT_UPDATE: {
            const updatedData = state.data.map((elem) => elem.id === payload.id ? { ...elem, isAdded: true, orderedQuantity: 1, avilableQuantity: elem.avilableQuantity - 1 } : elem);
            return { ...state, data: updatedData };
        }
        case types.REMOVE_PRODUCT_UPDATE: {
            const updatedData = state.data.map((elem) => elem.id === payload.id ? { ...elem, isAdded: false, orderedQuantity: 0, avilableQuantity: elem.avilableQuantity + 1 } : elem);
            return { ...state, data: updatedData };
        }
        case types.PRODUCTS_ERROR: {
            return {
                ...state, isLoading: false, isError: true,
            }
        }
        default: {
            return state;
        }
    }
}