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
    background-color:#434343;
    height: 90vh;
    .card-list{
    background-color:#434343;
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