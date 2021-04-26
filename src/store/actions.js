//import axios from 'axios';//after otherway of declaring Api disabled
//import Product from "../apis/Product";//added after api creation
//import Cart from "../apis/Cart";

/*
export const getproducts = ({ commit }) =>{//this action we will fetch data from api
    axios.get('http://127.0.0.1:8000/api/products')
    .then(response =>{
        commit('SET_PRODUCTS', response.data);
    })
}*/
/*// 1 copied to action product
export const getproducts = ({ commit }) =>{//this action we will fetch data from api
    Product.all().then(response =>{
        commit('SET_PRODUCTS', response.data);
    }).catch((err) => console.log(err))
}*/

//Product.vue
/*export const getproduct = ({ commit }, productId) =>{//this action we will fetch data from api
    axios.get(`http://127.0.0.1:8000/api/products/${productId}`)
    .then(response =>{
        commit('SET_PRODUCT', response.data);
    })
}*/

/* //2 copied to action product
export const getproduct = ({ commit }, productId) =>{//this action we will fetch data from api
        Product.show(productId).then(response =>{
        commit('SET_PRODUCT', response.data);
    })
}
*/


//cart
/*export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product ,quantity });

    //prevent delete items from cart after page refresh 
    axios.post('http://127.0.0.1:8000/api/cart',{
        product_id: product.id, //product_id,quantity are table attributes
        quantity         //store into backend database
    });
}*/

/*
export const addProductToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product ,quantity });

    //prevent delete items from cart after page refresh 
    Cart.store({
        product_id: product.id, //product_id,quantity are table attributes
        quantity         //store into backend database
    });
}

/*export const getCartItems = ({commit}) =>{
    axios.get('http://127.0.0.1:8000/api/cart')
    .then(response =>{
        commit('SET_CART',response.data);
    });
}*/
/*
export const getCartItems = ({commit}) =>{
   Cart.all().then(response =>{
        commit('SET_CART',response.data);
    });
}
*/
/*export const removeProductFromCart =({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART',product);

    axios.delete(`http://127.0.0.1:8000/api/cart/$(product.id)`);//removes from DB
}*/
/*
export const removeProductFromCart =({commit}, product) => {
    commit('REMOVE_PRODUCT_FROM_CART',product);
    Cart.delete(product.id);
}

/*export const clearCartItem = ({commit}) => {
    commit('CLEAR_CART_ITEM');

    axios.delete(`http://127.0.0.1:8000/api/cart`);//clear cart items from DB
};*/
/*
export const clearCartItem = ({commit}) => {
    commit('CLEAR_CART_ITEM');
    Cart.deleteAll();
};
*/