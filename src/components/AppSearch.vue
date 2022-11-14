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
        <label for="search"></label>
        <input v-model="store.searchKey" type="text" name="search" >
        <button @click="$emit('searchBtn')">Cerca</button>
    </div>

</template>

<style lang="scss" >
    input{
        line-height: 3rem;
        font-size: 3rem;
    }

    button{
        line-height: 3rem;
        font-size: 3rem;
    }
    
</style>