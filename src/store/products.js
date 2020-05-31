import * as ActionTypes from './ActionTypes';

// este reducer tiene que estar dentro del de abajo, existe solo un reducer para para cada
// parte del estado que quiero afectar
// export const products = (state = PRODUCTS, action) => {
export const products = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      var product = action.payload;
      return state.concat(product);
    default:
      return state;
  }
};

export const Products = (state = { isLoading: true,
    errMess: null,
    products:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PRODUCTS:
            return {...state, isLoading: false, errMess: null, products: action.payload};

        case ActionTypes.PRODUCTS_LOADING:
            return {...state, isLoading: true, errMess: null, products: []}

        case ActionTypes.PRODUCTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
