<script>
import AppSearch from './components/AppSearch.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';
import axios from "axios";


export default{
  components:{
    AppSearch,
    AppMain,
   
  },
  data(){
    return{
      store,
    }
    
  },
  methods:{
    // get result from searchbar
    getResults(){
      this.getApiMovies();
      this.getApiSeries();
    },
    // api for movies
   getApiMovies(){
      axios
        .get(store.apiUrlMovie + store.apiKey +  `&query=${store.searchKey}` )
        .then((resp) => {
          this.store.movies = resp.data.results
        })
    },
    // api for series

    getApiSeries(){
      axios
        .get(store.apiUrlSeries + store.apiKey +  `&query=${store.searchKey}` )
        .then((resp) => {
          this.store.series = resp.data.results
        })
    }


  },
  created (){
    this.getResults()
  }
  
}
</script>

<template>

  <AppSearch @searchBtn="getResults" />
  <AppMain />

</template>


<style lang="scss">

@use "./styles/general.scss" ;

</style>