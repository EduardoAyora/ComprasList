export const addProduct = (name, aisle, description, inCart) => ({
    type: 'ADD_PRODUCT',
    payload: {
        name: name,
        aisle: aisle,
        description: description,
        inCart: inCart
    }
});

export const loadProducts = (payload) => ({
    type: 'LOAD_PRODUCTS',
    payload: payload
});
