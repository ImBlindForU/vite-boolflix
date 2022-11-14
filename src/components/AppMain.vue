<script>
import { store } from '../store';

    export default{
        name: "AppMain",
        data(){
            return{
            store,
            }
        }
    }
    
</script>

<template>
    <ul class="movie" v-for="movie in store.movies" :key="movie.id" :movie="movie">
        <li>
            -Titolo:{{movie.title}} <br>
            -Titolo originale :{{movie.original_title}} <br>
            -lingua: {{movie.original_language}}  <br>
            -voto: {{movie.vote_average}}
            <hr>
        </li>
    </ul>
    <ul class="serie" v-for="serie in store.series" :key="serie.id" :movie="series">
        <li>
            -Titolo:{{serie.name}} <br>
            -Titolo originale :{{serie.original_name}} <br>
            -lingua: {{serie.original_language}}  <br>
            -voto: {{serie.vote_average}}
            <hr>
        </li>
    </ul>
</template>


<style lang="scss" >
       li{
        font-size: 3rem;
       }

       .movie{
        background-color: lightcoral;
       }
       .serie{
        background-color: lightblue;
       }
</style>