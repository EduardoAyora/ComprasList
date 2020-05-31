import * as ActionTypes from './ActionTypes';
import {PRODUCTS} from './data';
import { baseUrl } from '../shared/baseUrl';

export const addProduct = (name, aisle, description, inCart, marked) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: {
        name: name,
        aisle: aisle,
        description: description,
        inCart: inCart,
        marked: marked
    }
});

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    setTimeout(() => {
        dispatch(addProducts(PRODUCTS));
    }, 2000);
}

export const productsLoading = () => ({
    type: ActionTypes.PRODUCTS_LOADING
});

export const productsFailed = (errmess) => ({
    type: ActionTypes.PRODUCTS_FAILED,
    payload: errmess
});

export const addProducts = (products) => ({
    type: ActionTypes.ADD_PRODUCTS,
    payload: products
});
