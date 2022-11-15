<script>
import { store } from '../store';

export default{
  
  name:"cardAll", 
  props:{
    item:Object,
  },
  data(){
        return{
            store,
        }
  },
  computed:{
    getTitle(){
      return this.item.title ? this.item.title : this.item.name;
    },
    getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
    }
  },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/images/${imgName}.png`, import.meta.url).href;
        },
        divideNumb(vote){
            return Math.floor(vote / 2)
            
          }
    }  
}
</script>

<template>
    <div class="container-img ">
    <img :src="`${getImgUrl}`" alt="">
    </div>  
    <div class="container-text ">
        <h3>
          -Titolo:{{getTitle}}
        </h3> 
        <p>
        -Titolo originale :{{getOriginalTitle}}
        </p>
        <div>
          -lingua: 
            <span v-if="item.original_language === 'it'">
                <img src="https://i.pinimg.com/564x/db/0d/7a/db0d7a27d2f84cd939a743e5a06e4981.jpg" alt="">
            </span> 
            <span v-else-if="item.original_language === 'en'">
                <img src="https://i.pinimg.com/564x/60/e1/2e/60e12ef8f91004862d6413b7f26f0b13.jpg" alt="">
            </span>
            <span v-else-if="item.original_language === 'fr'">
                <img src="https://i.pinimg.com/564x/b8/65/53/b86553087e766ae92c392f1067714dce.jpg" alt="">
            </span>
            <span v-else>
                {{item.original_language}} 
            </span>    
        </div>
        <div>
          <span>
                    {{divideNumb(item.vote_average)}}
            </span>
            <small v-if="divideNumb(item.vote_average) === 1" v-for="number in 1">
                    <i class="fa-solid fa-star"></i>
            </small>
            <small v-if="divideNumb(item.vote_average) === 2" v-for="number in 2">
                    <i class="fa-solid fa-star"></i>
            </small>
            <small v-else-if="divideNumb(item.vote_average) === 3" v-for="number in 3">
                    <i class="fa-solid fa-star"></i>
            </small>
            <small v-else-if="divideNumb(item.vote_average) === 4" v-for="number in 4">
                    <i class="fa-solid fa-star"></i>
            </small>
            <small v-else-if="divideNumb(item.vote_average) === 5" v-for="number in 5">
                    <i class="fa-solid fa-star"></i>
            </small>
            <small v-else-if="divideNumb(item.vote_average) === 0" v-for="number in 0">
                    no star
            </small>
        </div>         
      </div>


</template>


<style lang="scss">


</style>