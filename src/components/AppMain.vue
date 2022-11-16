<script>
import { store } from '../store';
import cardAll from "./cardAll.vue"
    export default{
        name: "AppMain",
        components:{
            cardAll,
        
        },
        data(){
            return{
            store,
           
            }
        },methods:{
          divideNumb(vote){
            return Math.floor(vote / 2)
          },
     
    
        }
    }
    
</script>

<template>
    <div class="main-container">
        <section>
            <h2>Movies</h2>
            <div class="card-list">
                
                <cardAll v-for="movie in store.movies" :key="movie.id" :item="movie" />
            </div>
        </section>

        <section>
            <h2>Serie TV</h2>

            <div class="card-list">
                <cardAll v-for="serie in store.series" :key="serie.id" :item="serie" />
            </div>
        </section>
    </div>
    
    <!-- <div class="container-card">
        <ul class="flex">
            <li class="movie" v-for="movie in store.movies" :key="movie.id" :movie="movie" :divideNumb="divideNumb">
                <div 
                    @mouseover="hover = true"
                    @mouseleave="hover = false"
                    v-bind:class="{hidden : hover}"
                    class="container-img ">
                    <img :src="`${store.urlImg}${movie.poster_path}`" alt="">
                </div>  
                <div class="container-text hidden"

                @mouseover="over = false"
                @mouseleave="over = true"
                v-bind:class="{ active : over }"
                    >
                    -Titolo:{{movie.title}} <br>
                    -Titolo originale :{{movie.original_title}} <br>
                    -lingua: 
                        <span v-if="movie.original_language === 'it'">
                            <img src="https://i.pinimg.com/564x/db/0d/7a/db0d7a27d2f84cd939a743e5a06e4981.jpg" alt="">
                        </span> 
                        <span v-else-if="movie.original_language === 'en'">
                            <img src="https://i.pinimg.com/564x/60/e1/2e/60e12ef8f91004862d6413b7f26f0b13.jpg" alt="">
                        </span>
                        <span v-else-if="movie.original_language === 'fr'">
                            <img src="https://i.pinimg.com/564x/b8/65/53/b86553087e766ae92c392f1067714dce.jpg" alt="">
                        </span>
                        <span v-else>
                            {{movie.original_language}} 
                        </span>    
                        <br>
                        
                        <span>
                                {{divideNumb(movie.vote_average)}}
                        </span>
                        <small v-if="divideNumb(movie.vote_average) === 1" v-for="number in 1">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-if="divideNumb(movie.vote_average) === 2" v-for="number in 2">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(movie.vote_average) === 3" v-for="number in 3">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(movie.vote_average) === 4" v-for="number in 4">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(movie.vote_average) === 5" v-for="number in 5">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(movie.vote_average) === 0" v-for="number in 0">
                                no star
                        </small>

                </div>
                
            </li>
        </ul>

        <ul class="flex">
            <li class="serie" v-for="serie in store.series" :key="serie.id" :movie="series" :divideNumb="divideNumb">
                <div class="container-img">
                    <img :src="`${store.urlImg}${serie.poster_path}`" alt="">
                </div>

                <div class="container-text">
                    -Titolo:{{serie.name}} <br>
                    -Titolo originale :{{serie.original_name}} <br>
                    -lingua: 
                            <span v-if="serie.original_language === 'it'">
                                <img src="https://i.pinimg.com/564x/db/0d/7a/db0d7a27d2f84cd939a743e5a06e4981.jpg" alt="">
                            </span> 
                            <span v-else-if="serie.original_language === 'en'">
                                <img src="https://i.pinimg.com/564x/60/e1/2e/60e12ef8f91004862d6413b7f26f0b13.jpg" alt="">
                            </span>
                            <span v-else-if="serie.original_language === 'fr'">
                                <img src="https://i.pinimg.com/564x/b8/65/53/b86553087e766ae92c392f1067714dce.jpg" alt="">
                            </span>
                            <span v-else>
                                {{serie.original_language}}
                            </span>    
                            <br> 
                        -voto: {{divideNumb(serie.vote_average)}}
                        <small v-if="divideNumb(serie.vote_average) === 1" v-for="number in 1">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-if="divideNumb(serie.vote_average) === 2" v-for="number in 2">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(serie.vote_average) === 3" v-for="number in 3">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(serie.vote_average) === 4" v-for="number in 4">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(serie.vote_average) === 5" v-for="number in 5">
                                <i class="fa-solid fa-star"></i>
                        </small>
                        <small v-else-if="divideNumb(serie.vote_average) === 0" v-for="number in 0">
                                no star 
                        </small>
                </div>
                
            </li>
        </ul>
    </div> -->
    

    
</template>


<style lang="scss" >
.main-container{
    background-color:#434343;
    height: 90vh;
    .card-list{
    display: flex;
    margin-top: 3rem;
    overflow-y: hidden;
    overflow-x: scroll;

    }
}



    //  .container-card{
    //     width: 100vw;
    //     .container-img{
    //         width: 100%;
    //         img{
    //             object-fit: cover;
    //             width: 100%;
    //             height: 100%;
    //         }
    //     }
    //     background-color: #434343;
    //     .flex{
    //         display: flex;
    //         flex-wrap: wrap;
            
    //     }
    //     li{
    //         font-size: 3rem;
    //         text-align: center;
    //         margin: 1.5rem;
    //     }

    //    .movie{
    //         display: flex;
    //         flex-wrap: wrap;
    //         justify-content: center;

    //         background-color: lightcoral;
    //         width: 15vw;
    //         border: 1px solid black;
         

        
    //    }
    //    .serie{
    //         background-color: lightblue;
    //         display: flex;
    //         justify-content: center;
    //         flex-wrap: wrap;    
    //         width: 15vw;
    //         border: 1px solid black;
        
    //    }
    //  }
        
</style>