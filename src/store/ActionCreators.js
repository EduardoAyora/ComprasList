export const addProduct = (name, aisle, description, inCart) => ({
    type: 'ADD_PRODUCT',
    payload: {
        name: name,
        aisle: aisle,
        description: description,
        inCart: inCart
    }
});
