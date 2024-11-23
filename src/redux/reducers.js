import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    list:[]
}

let slice = createSlice({
    name:"expenseSlice",
    initialState,
    reducers:{
        addExpense:(cState , action) =>{

        }
    }
})


export let {addExpense} = slice.actions
export default slice.reducer