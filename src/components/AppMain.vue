<script>
import { store } from '../store';

    export default{
        name: "AppMain",
        data(){
            return{
            store,
            }
        },methods:{
           
        }
    }
    
</script>

<template>
    <div class="container-card">
        <ul class="flex">
            <li class="movie" v-for="movie in store.movies" :key="movie.id" :movie="movie">
                <img :src="`${store.urlImg}${movie.poster_path}`" alt="">

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
                        
                <span >-voto: {{movie.vote_average}}</span>

            </li>
        </ul>

        <ul class="flex">
            <li class="serie" v-for="serie in store.series" :key="serie.id" :movie="series">

                <img :src="`${store.urlImg}${serie.poster_path}`" alt="">
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
                -voto: {{serie.vote_average}}
                
            </li>
        </ul>
    </div>
    

    
</template>


<style lang="scss" >
     .container-card{
        width: 100vw;
        
        background-color: #434343;
        .flex{
            display: flex;
            flex-wrap: wrap;
            
        }
        li{
            font-size: 3rem;
            text-align: center;
            margin: 1.5rem;
        }

       .movie{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            background-color: lightcoral;
            width: 15vw;
            border: 1px solid black;
         
            span{
                img{
                    width: 1.5vw;
                }
            }
        
       }
       .serie{
            background-color: lightblue;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;    
            width: 15vw;
            border: 1px solid black;
            span{
                img{
                    width: 1.5vw;
                }
            }
        
       }
     }
        
</style>