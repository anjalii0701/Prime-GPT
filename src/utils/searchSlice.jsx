import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name:'search',
    initialState: {
        showSearchSlice:false,
        isTyping: false ,
        query:""
    },
    reducers:{
        toggleSearchSlice :(state) =>{
            state.showSearchSlice = !state.showSearchSlice;
            if(!state.showSearchSlice){
                state.isTyping =false;
                state.query = ""
            }
        },
        setQuery:(state ,action)=>{
           state.query=action.payload; 
            state.isTyping=action.payload.length>0
        },
        clearSearch:(state)=>{
            state.isTyping=false,
            state.query="",
            state.showSearchSlice=false
        }

    }
})

export const { toggleSearchSlice ,setQuery ,clearSearch}=searchSlice.actions;
export default searchSlice.reducer;