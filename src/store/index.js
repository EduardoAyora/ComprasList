import { createStore } from 'redux';

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_PRODUCT') {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload)
    })
  }
  if (action.type === 'LOAD_PRODUCTS') {
    return {
      ...state,
      products: action.payload
    }
  }

  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
