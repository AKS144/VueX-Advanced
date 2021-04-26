<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <div class="container">            
            <div class="nav navbar-nav">
               <!-- <a class="nav-item nav-link active" href="#">Home</a>-->
                <router-link to="/" class="nav-item nav-link active">Home</router-link>
              <a class="nav-item nav-link" href="#">Product</a>
            </div>


            <div>
                <div class="dropdown open">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                         {{ cartItemCount }}  Cart 
                        </button>
                       <div class="dropdown-menu" style="min-width:320px; right:0; left:auto" aria-labelledby="triggerId">
                          <div @click="$event.stopPropagation()">
                               <div v-for="item in cart" :key="item.product.id">
                                <div class="px-2 d-flex justify-content-between">
                                    <div>
                                         <strong>{{item.product.title}}</strong>
                                         <br />
                                         {{item.quantity}}*{{item.product.price}}  
                                    </div>
                                    <div>
                                         <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(item.product)">Remove</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <span>Total: ${{ cartTotalPrice }}</span>
                                <a href="#" @click.prevent="clearCartItem()">Clear Cart</a>
                            </div>
                        </div>               
                </div>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
//import MiniCart from './components/MiniCart';
import { mapGetters,mapState,mapActions } from 'vuex';

export default {
    component:{
        //MiniCart,        
    },

    computed:{
      /*  cart(){//cart used in forloop
            return this.$store.state.cart;
        },*/
       
        /*
        cartItemCount(){
            return this.$store.getters.cartItemCount;
        },
       
        cartTotalPrice(){
            return this.$store.getters.cartTotalPrice;
        }*/

        /*...mapState({
            cart:"cart"
        }),*/

        ...mapState({
            cart: state=> state.cart.cart
        }),

        ...mapGetters({          
            cartItemCount:"cartItemCount",
            cartTotalPrice:"cartTotalPrice"
        })        
    },

    //computed: mapGetters({cartItemCount:"cartItemCount"}), other way to describe

    mounted(){//mounted means executed when call cart item fetched from api
        //this.$store.dispatch('getCartItems');//
        this.getCartItems();//fetch cart items from API
    },

    methods:{
       /*step 1
        removeProductFromCart(product){
            this.$store.dispatch('removeProductFromCart',product);
        },

        clearCartItem(){
            this.$store.dispatch('clearCartItem');
        }
        */
       //step 2 
       /*...mapActions({
           removeProductFromCart:"removeProductFromCart",
           clearCartItem:"clearCartItem"
       }),*/

    //step 3
       ...mapActions(['removeProductFromCart','clearCartItem','getCartItems'])//getCartItems from mounted
    }
};
</script>