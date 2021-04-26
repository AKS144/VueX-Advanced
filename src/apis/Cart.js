import Api from './Api';

const END_POINT = 'cart';

export default{
    all(){
        //return Api.get('cart');
        return Api.get(END_POINT);
    },
    store(data){
        //return Api.post('cart',data);
        return Api.post(END_POINT,data);    
    },
    delete(id){
        //return Api.delete(`cart/${id}`);
        return Api.delete(`${END_POINT}/${id}`);
    },
    deleteAll(){
        //return Api.delete('cart')//endpoint is cart
        return Api.delete(END_POINT)//endpoint is cart
    }
}