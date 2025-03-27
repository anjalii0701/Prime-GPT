import { createSlice } from "@reduxjs/toolkit"


const moviesSlice = createSlice ({
    name: "movies" ,
    initialState :{
        nowPlayingmovies : null,
        trailerVideo :null,
        PopularMovies :null

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
        }
    }
})

export const {addNowPlayingMovies ,addTrailerVideo ,addPopularMovies} =moviesSlice.actions;

export default moviesSlice.reducer;