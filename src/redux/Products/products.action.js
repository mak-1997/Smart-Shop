import * as types from './products.actionTypes';
import { getFilteredData, getProductsDataAPI, updateAddProductAPI, updateRemoveProductAPI } from './products.api';



export const setCat = (value) => (dispatch)=>{
    dispatch({type: types.SET_CAT, payload: value});
}
export const setPrice = (value) => (dispatch)=>{
    dispatch({type: types.SET_PRICE, payload: value});
}
export const setOrder = (value) => (dispatch)=>{
    dispatch({type: types.SET_ORDER, payload: value});
}
export const setPage = (value) => (dispatch)=>{
    dispatch({type: types.SET_PAGE, payload: value});
}

export const getData = (page) => async (dispatch) => {
    dispatch({ type: types.PRODUCTS_LOADING });
    try {
        let data = await getProductsDataAPI(page);
        dispatch({ type: types.GET_PRODUCTS, payload: data });
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const getFilteredAndPaginatedData = (category, maxPrice, order, page) => async (dispatch) => {
    console.log(page)
    try {
        let data = await getFilteredData(category, maxPrice, order, page)
        dispatch({ type: types.GET_FILTERED_AND_PAGINATED_DATA, payload: data })
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const updateAddProductsData = (data) => async (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT_UPDATE, payload: data });
    try {
        await updateAddProductAPI(data);
        // dispatch({type: types.ADD_PRODUCT_UPDATE, payload : res});
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const updateRemoveProductsData = (data) => async (dispatch) => {
    dispatch({ type: types.REMOVE_PRODUCT_UPDATE, payload: data });
    try {
        await updateRemoveProductAPI(data);
        // dispatch({type: types.REMOVE_PRODUCT_UPDATE, payload : res});
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const setCategory = (category, maxPrice, order, page) => async (dispatch) => {
    try {
        let data = await getFilteredData(category, maxPrice, order, page)
        dispatch({ type: types.SET_CATEGORY, payload: data });
    }
    catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const setMaxPrice = (category, maxPrice, order, page) => async (dispatch) => {
    try {
        let data = await getFilteredData(category, maxPrice, order, page);
        dispatch({ type: types.SET_MAX_PRICE, payload: data });
    }
    catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const setSortingOrder = (category, maxPrice, order, page) => async (dispatch) => {
    try {
        let data = await getFilteredData(category, maxPrice, order, page);
        dispatch({ type: types.SET_SORTING, payload: data })
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

