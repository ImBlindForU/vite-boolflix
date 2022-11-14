import { reactive } from "vue";

export const store = reactive({
    apiUrlMovie:"https://api.themoviedb.org/3/search/movie?",
    apiUrlSeries:"",
    apiKey:"api_key=3f627171d96ffc90b496bcedc68373b9",
    searchKey:"",
    loading:false,
    movies:[],
    series:[],
})