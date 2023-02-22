import * as types from './cart.actionTypes';
import { addToCartAPI, removeFromCartAPI } from './cart.api';


export const addToCart = (payload) => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
        const data = await addToCartAPI(payload);
        dispatch({ type: types.ADD_TO_CART, payload: data });
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
};


export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
        let data = await removeFromCartAPI(id);
        dispatch({ type: types.REMOVE_FROM_CART, payload: data });
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
};