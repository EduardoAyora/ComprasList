import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

// ADD ---

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

  return fetch(baseUrl + 'create.php', {
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

// UPDATE ---

export const updateProduct = (product) => ({
    type: ActionTypes.UPDATE_PRODUCT,
    payload: product
});

export const postUpdateProduct = (id, name, aisle, description, inCart, marked) => (dispatch) => {
  const updatedProduct = {
      id: id,
      name: name,
      aisle: aisle,
      description: description,
      inCart: inCart,
      marked: marked
  };

  return fetch(baseUrl + 'update.php', {
      method: "POST",
      body: JSON.stringify(updatedProduct),
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
  .then(response => dispatch(updateProduct(response)))
  .catch(error =>  { console.log('post products', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

// export const postUpdateProduct = (id, name, aisle, description, inCart, marked) => (dispatch) => {
//   const updatedProduct = {
//       id: id,
//       name: name,
//       aisle: aisle,
//       description: description,
//       inCart: inCart == true ? '1' : '0',
//       marked: marked == true ? '1' : '0'
//   };
//
//   dispatch(updateProduct(updatedProduct));
// };

// DELETE ---

export const deleteProduct = (deleted) => ({
    type: ActionTypes.DELETE_PRODUCT,
    payload: deleted
});

export const postDeleteProduct = (id) => (dispatch) => {

  const objId = {
      id: id
  };

  return fetch(baseUrl + 'delete.php', {
      method: "POST",
      body: JSON.stringify(objId),
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
  .then(response => dispatch(deleteProduct(response)))
  .catch(error =>  { console.log('post products', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

// FETCH ---

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
