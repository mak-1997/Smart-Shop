import * as types from './products.actionTypes';

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    cat: "",
    price: Infinity,
    order:"",
    page: 1,
}

export const reducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.SET_CAT : {
            return{
                ...state, cat: payload,
            }
        }
        case types.SET_PRICE : {
            return{
                ...state, price: payload,
            }
        }
        case types.SET_ORDER : {
            return{
                ...state, order: payload,
            }
        }
        case types.SET_PAGE : {
            return{
                ...state, page: payload,
            }
        }
        case types.GET_FILTERED_AND_PAGINATED_DATA: {
            return {
                ...state, isLoading: false, isError: false, data: [...payload],
            }
        }

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
        case types.SET_CATEGORY: {
            return {
                ...state, data: [...payload],
            }
        }
        case types.SET_MAX_PRICE: {
            return {
                ...state, data: [...payload],
            }
        }
        case types.SET_SORTING:{
            return{
                ...state, data:[...payload],
            }
        }
        default: {
            return state;
        }
    }
}