import Product from "../../../apis/Product";

export const getproducts = ({ commit }) =>{//this action we will fetch data from api
    Product.all().then(response =>{
        commit('SET_PRODUCTS', response.data);
    }).catch((err) => console.log(err))
}


export const getproduct = ({ commit }, productId) =>{//this action we will fetch data from api
    Product.show(productId).then(response =>{
    commit('SET_PRODUCT', response.data);
})
}