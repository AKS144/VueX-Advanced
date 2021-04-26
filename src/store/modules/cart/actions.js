import Cart from "../../../apis/Cart";

export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product ,quantity });

    //prevent delete items from cart after page refresh 
    Cart.store({
        product_id: product.id, //product_id,quantity are table attributes
        quantity         //store into backend database
    });
}

export const getCartItems = ({commit}) =>{
   Cart.all().then(response =>{
        commit('SET_CART',response.data);
    });
}

export const removeProductFromCart =({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART',product);
    Cart.delete(product.id);
}

export const clearCartItem = ({commit}) => {
    commit('CLEAR_CART_ITEM');
    Cart.deleteAll();
};
