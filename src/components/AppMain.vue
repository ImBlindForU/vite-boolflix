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
            <h2>Series</h2>

            <div class="card-list">
                <cardAll v-for="serie in store.series" :key="serie.id" :item="serie" />
            </div>
        </section>
        
    </div>
    
</template>


<style lang="scss" >
.main-container{
    background-color:#141414;
    height: 90vh;
    .card-list{
    background-color:#141414;
    display: flex;
    margin-top: 3rem;
    overflow-y: hidden;
    }
    h2{
        font-size: 3rem;
        color: white;
        padding-top: 3rem;
        padding-left: 1rem;
    }
}

        
</style>