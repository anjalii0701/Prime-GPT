import { createSlice } from "@reduxjs/toolkit"


const moviesSlice = createSlice ({
    name: "movies" ,
    initialState :{
        nowPlayingmovies : null,
        trailerVideo :null
    },
    reducers:{
        addNowPlayingMovies :(state ,action)=>{
            state.nowPlayingmovies =action.payload
        },
        addTrailerVideo :(state, action)=>{
            state.trailerVideo =action.payload;
        }
    }
})

export const {addNowPlayingMovies ,addTrailerVideo} =moviesSlice.actions;

export default moviesSlice.reducer;