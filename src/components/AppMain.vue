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
    <ul v-for="movie in store.movies" :key="movie.id" :movie="movie">
        <li>
            -Titolo:{{movie.title}} <br>
            -Titolo originale :{{movie.original_title}} <br>
            -lingua: {{movie.original_language}}  <br>
            -voto: {{movie.vote_average}}
            <hr>
        </li>
    </ul>
</template>


<style lang="scss" >
       li{
        font-size: 3rem;
       }
</style>