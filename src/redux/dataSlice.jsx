

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    isloading:false,
    error:null
}

//api
export const alldataapi=createAsyncThunk("subhajit/callApi",async ()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/posts");
    const datafromApi= await res.json();
    return datafromApi;
})

// slice
const data=createSlice({
    name:"subhajit",
    initialState,
    reducers:{},
    extraReducers:(a)=>{

                                a.addCase(alldataapi.pending,(state)=>{
                                 state.isloading=true;
                                }).addCase(alldataapi.fulfilled,(state,action)=>{
                                     state.data=action.payload
                                     state.isloading=false;
                                }).addCase(alldataapi.rejected,(state,action)=>{
                                     state.error=action.error.message;
                                     state.isloading=false;
                                })

    }
})
export default data.reducer




