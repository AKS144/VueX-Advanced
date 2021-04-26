export const ADD_TO_CART = (state, { product, quantity }) =>{//product and quantity is variable not parameter
    let productInCart = state.cart.find(item => {
        return item.product.id === product.id;//made error only single = sign
    });

    if(productInCart){
        productInCart.quantity += quantity; 
        return;
    }
    state.cart.push({ product, quantity });
}

export const SET_CART = (state, cartItems) => {//cartItems is payload data
    state.cart = cartItems;
}

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
    state.cart = state.cart.filter(item =>{
        return item.product.id !== product.id;//remove from cart but on refersh comes again so to remove from DB
    });
}
export const CLEAR_CART_ITEM = (state) =>{
    state.cart = [];
}