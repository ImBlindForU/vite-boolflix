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
        <div class="list">
                <ul>
                    <li>Home</li>
                    <li>Serie TV</li>
                    <li>Film</li>
                    <li>Originali</li>
                    <li>Aggiunti di recente</li>
                    <li>La mia lista</li>
                </ul>
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
                margin-left: 3rem;
                img{
                width: 10vw;
                }   
            }
            .list{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                ul{
                    list-style: none;
                    display: flex;
                    color: grey;
                    justify-content: space-between;
                    li{
                        padding: 1rem;
                        font-size: 2rem;
                        &:hover{
                            color: white;
                        }
                    }

                }
               
            }
           

        .input{
            margin-right: 3rem;
            input{
            line-height: 3rem;
            font-size: 3rem;
            }

            button{
            
            font-size: 3rem;
            }
        }   
        
    }
    
    
</style>