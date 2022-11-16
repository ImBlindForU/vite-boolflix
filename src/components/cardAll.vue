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
    },
  },
    methods: {
        divideNumb(vote){
            return Math.floor(vote / 2)
          },
        
    }  
}
</script>

<template>
  <div class="card-container"
        @mouseover="hover = true ; hide = false"
        @mouseleave="hover = false; hide=true">
    <div v-bind:class="{hidden : hover}"
    class="container-img ">
      <img :src="`${store.urlImg}${item.poster_path}`" alt="">
    </div>  
    <div v-bind:class="{active : hover, hidden : hide}"
    class=" container-text ">
      <div class="text">
        <h3>
          -Titolo:{{getTitle}}
        </h3> 
        <h4>
        -Titolo originale :{{getOriginalTitle}}
        </h4>
        <p>Overview: {{item.overview}}</p>
        <div class="language">
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
                <span v-for="number in 1" class="yellow">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 4" class="white">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-if="divideNumb(item.vote_average) === 2" >
                <span v-for="number in 2" class="yellow">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 3" class="white">
                  <i class="fa-regular fa-star"></i>
                </span>
                  
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 3">
                <span v-for="number in 3" class="yellow">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 2" class="white">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 4" >
                <span v-for="number in 4" class="yellow">
                  <i class="fa-solid fa-star"></i>
                </span>
                <span  v-for="num in 1" class="white">
                  <i class="fa-regular fa-star"></i>
                </span>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 5" v-for="number in 5" class="yellow">
                  <i class="fa-solid fa-star"></i>
          </small>
          <small v-else-if="divideNumb(item.vote_average) === 0" v-for="number in 0">
                  zero
          </small>
        </div>      
      </div>
          
    </div>
  </div>
    

</template>


<style lang="scss">
.card-container{
  border: 1px solid white;
  background-color: black;
  min-width: 15vw;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .8s;
  &:hover {
      transform: rotateY(180deg);
    }
  div{
    height: 100%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .container-img{
    backface-visibility: hidden;
    
  }
  .container-text{
    background-color: black;
    color: white;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    color: white;
    padding: 1rem;
    transform: rotateY(180deg);
    .text{
      margin-top: 3rem;
      padding: 1rem;

      h3{
        font-size: 2.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      h4{
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }

      p{
        font-style: 1.5rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
      .language{
      img{
        width: 50px;
        height: 30px;
      }
    }
    }
    
    

  }
}
</style>