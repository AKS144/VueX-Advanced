<template>
  <div>
     <!--<product-card />  
     <product-card /> 
     <product-card /> -->
     <product-card v-for="product in products" :key="product.id" :product="product"/><!--props:product and product from for loop-->
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import ProductCard from './ProductCard';
export default {
  components: { 
      ProductCard,
   },
   computed:{//acts as a getters,computed property calculates and returns a value
      /*products(){//:product="product"
         return this.$store.state.products;
      }*/
      //...mapState(['products'])//modules created for product
      ...mapState({
         products: state => state.product.products//product-module and products is state
   })
   },

   mounted(){//html DOM  is called
       //this.$store.dispatch('getproducts');//getproducts is a action 
       this.getproducts;
   },

   methods:{
      ...mapActions(['getproducts'])
   }
};
</script>

<style>

</style>