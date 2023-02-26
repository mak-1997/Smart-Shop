import { updateAddProductAPI, updateRemoveProductAPI } from '../Products/products.api';
import * as types from './cart.actionTypes';
import { addToCartAPI, changeQuantityAPI, deleteFromCartAPI, getCartItemsAPI } from './cart.api';


export const addToCart = (payload) => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
        const data = await addToCartAPI(payload);
        dispatch({ type: types.ADD_TO_CART, payload: data });
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
};


export const deleteFromCart = (data) => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
        dispatch({ type: types.DELETE_FROM_CART, payload: data.id });
        await deleteFromCartAPI(data.id);
        await updateRemoveProductAPI(data);
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
};

export const getCartItems = () => async (dispatch) => {
    dispatch({ type: types.CART_LOADING });
    try {
        let data = await getCartItemsAPI();
        dispatch({ type: types.GET_CART_ITEMS, payload: data })
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
}

export const handleQuantityChange = (data,change) => async(dispatch) =>{
    
    dispatch({ type: types.CART_ITEM_QUANTITY_UPDATE, payload: {data, change }})
    try {
        await changeQuantityAPI(data,change);
        await updateAddProductAPI(data,change);
    } catch (error) {
        dispatch({ type: types.CART_ERROR });
    }
}

