<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from "axios";

export default{
  components:{
    AppSearch,
    AppMain,
  } ,
  data(){
    return{
      store,
    }
    
  },methods:{
   getApiCall(){
      axios
        .get(store.apiUrlMovie + store.apiKey +  `&query=${store.searchKey}` )
        .then((resp) => {console.log(resp)})
    }
  },
  created (){
    this.getApiCall();
  }
  
}
</script>

<template>

  <AppSearch @searchBtn="getApiCall"/>
  <AppMain />

</template>


<style lang="scss">

@use "./styles/general.scss" ;

</style>