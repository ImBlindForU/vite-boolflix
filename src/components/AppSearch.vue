<script>
import { store } from '../store';

    export default{
        name: "AppSearch",
        data(){
            return{
            store,
            }
        },
        
    }
</script>

<template>

    <div class="container">
        <div class="logo">
            <img src="../assets/img/Logonetflix.png" alt="">
        </div>
        <div class="input">
            <label for="search"></label>
            <input v-model="store.searchKey" type="text" name="search" >
            <button  @click="$emit('searchBtn')">Cerca</button>
        </div>
        
    </div>

</template>

<style lang="scss" >
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
        height: 10vh;
        background-color: #000000;
        .logo{
            img{
                width: 10vw;
            }
        }
        .input{
            input{
            line-height: 3rem;
            font-size: 3rem;
            }

        button{
            line-height: 3rem;
            font-size: 3rem;
            }
        }   
        
    }
    
    
</style>