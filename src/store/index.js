import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Products} from './products';

const store = createStore(
  combineReducers({
      products: Products
  }),
  applyMiddleware(thunk)
);

export default store;
