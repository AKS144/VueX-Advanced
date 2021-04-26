import Api from './Api';

const END_POINT = 'products';

export default {
    all(){
        return Api.get(END_POINT);//is from api link check above code in action 
    },
    show(id){
        return Api.get(`${END_POINT}/${id}`);
    }
}
