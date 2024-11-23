import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from './reducers'

const store = configureStore({
    reducer :{
        slice: expenseSlice
    }
})

export {store}