import { createStore } from 'redux';
import {PRODUCTS} from './products';

const initialState = {
  products: PRODUCTS
};

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    })
  }
  return state;
};

const store = createStore(reducer);

export default store;
