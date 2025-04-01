import { createSlice } from "@reduxjs/toolkit"


const moviesSlice = createSlice ({
    name: "movies" ,
    initialState :{
        nowPlayingmovies : null,
        trailerVideo :null,
        PopularMovies :null,
        SearchMovies :null,
        clearSearchMovies:null,

    },
    reducers:{
        addNowPlayingMovies :(state ,action)=>{
            state.nowPlayingmovies =action.payload;
        },
        addPopularMovies :(state ,action)=>{
            state.popularmovies =action.payload;
        },
        addTrailerVideo :(state, action)=>{
            state.trailerVideo =action.payload;
        },
        addSearchMovies :(state ,action)=>{
            state.searchVideo =action.payload;
        },
        clearSearchMovies :(state,action)=>{
            state.searchVideo=[];
        }
    }
})

export const {addNowPlayingMovies ,addTrailerVideo ,addPopularMovies ,addSearchMovies,clearSearchMovies} =moviesSlice.actions;

export default moviesSlice.reducer;