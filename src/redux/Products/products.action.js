import * as types from './products.actionTypes';
import { getFilteredData, getProductsDataAPI, updateAddProductAPI, updateRemoveProductAPI } from './products.api';


export const getData = () => async (dispatch) => {
    dispatch({ type: types.PRODUCTS_LOADING });
    try {
        let data = await getProductsDataAPI();
        dispatch({ type: types.GET_PRODUCTS, payload: data });
    } catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}


export const updateAddProductsData = (data) => async (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT_UPDATE, payload: data });
    console.log("first")
    try {
        await updateAddProductAPI(data);
        console.log("second")

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

export const setCategory = (category, maxPrice, order) => async (dispatch) => {
    try {
        let data = await getFilteredData(category, maxPrice, order)
        dispatch({ type: types.SET_CATEGORY, payload: data });
    }
    catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const setMaxPrice = (category, maxPrice, order) => async (dispatch) => {
    try {
        let data = await getFilteredData(category, maxPrice, order);
        dispatch({ type: types.SET_MAX_PRICE, payload: data });

    }
    catch (error) {
        dispatch({ type: types.PRODUCTS_ERROR });
    }
}

export const setSortingOrder = (category, maxPrice, order) => async (dispatch) => {
    let data = await getFilteredData(category, maxPrice, order);
    dispatch({ type: types.SET_SORTING, payload: data })
}