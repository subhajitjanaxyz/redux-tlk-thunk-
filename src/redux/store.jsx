// const { configureStore } = require("@reduxjs/toolkit");
import { configureStore } from '@reduxjs/toolkit'
import datafromApi from './dataSlice'
export const store=configureStore({
    reducer:{
        apidata:datafromApi
    }
})