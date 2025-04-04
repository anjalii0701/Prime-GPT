import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlic";
import searchSliceReducer from "./searchSlice"


const appStore =configureStore({
    reducer:{
        user : userReducer,
        movies : movieReducer,
        gpt: gptReducer,
        config : configReducer ,
        search : searchSliceReducer
    },
})

export default appStore;