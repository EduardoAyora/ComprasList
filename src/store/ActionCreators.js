import * as ActionTypes from './ActionTypes';
import {PRODUCTS} from './data';
import { baseUrl } from '../shared/baseUrl';

export const addProduct = (product) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: product
});

export const postProduct = (name, aisle, description, inCart, marked) => (dispatch) => {
  const newProduct = {
      name: name,
      aisle: aisle,
      description: description,
      inCart: inCart,
      marked: marked
  };

  return fetch(baseUrl + 'create', {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addProduct(response)))
  .catch(error =>  { console.log('post products', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const fetchProducts = () => (dispatch) => {
    dispatch(productsLoading(true));

    return fetch(baseUrl + 'read.php')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(products => dispatch(addProducts(products)))
    .catch(error => dispatch(productsFailed(error.message)));
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
