export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const loadProducts = (payload) => ({
    type: 'LOAD_PRODUCTS',
    payload: payload
});
