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
            hover: false,
            hide: false,
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
        divideNumb(vote){
            return Math.floor(vote / 2)
          },
        
    }  
}
</script>

<template>
  <div class="card-container">
    <div 
        @mouseover="(hover = true),(hide = false)"
        @mouseleave="(hover = false),(hide=true)"
        v-bind:class="{hidden : hover}"
    class="container-img ">
      <img :src="`${store.urlImg}${item.poster_path}`" alt="">
    </div>  
    <div 
    v-bind:class="{active : hover, hidden : hide}"
    class=" container-text ">
        <h3>
          -Titolo:{{getTitle}}
        </h3> 
        <p>
        -Titolo originale :{{getOriginalTitle}}
        </p>
        <div>
          -lingua: 
            <span v-if="item.original_language === 'it'">
                <img src="../assets/img/it.jpg" alt="">
            </span> 
            <span v-else-if="item.original_language === 'en'">
                <img src="../assets/img/en.jpg" alt="">
            </span>
            <span v-else-if="item.original_language === 'fr'">
                <img src="../assets/img/fr.jpg" alt="">
            </span>
            <span v-else>
                {{item.original_language}} 
            </span>    
        </div>
        <div>
          <span>
                    {{divideNumb(item.vote_average)}}
          </span>
          <small v-if="divideNumb(item.vote_average) === 1">
                <span v-for="number in 1">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 4">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-if="divideNumb(item.vote_average) === 2" >
                <span v-for="number in 2">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 3">
                  <i class="fa-regular fa-star"></i>
                </span>
                  
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 3">
                <span v-for="number in 3">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 2">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 4" >
                <span v-for="number in 4">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 1">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 5" v-for="number in 5">
                  <i class="fa-solid fa-star"></i>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 0" v-for="number in 0">
                  zero
          </small>
        </div>         
    </div>
  </div>
    

</template>


<style lang="scss">
.card-container{
  border: 1px solid black;
  background-color: lightblue;
  min-width: 15vw;
  div{
    height: 100%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .container-text{
    background-color: black;
    color: white;
    text-align: center;
    vertical-align: center;
  span{
      img{
        width: 1.5rem;
      }
  }

}
}
</style>