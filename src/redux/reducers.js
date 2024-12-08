import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react';

let initialState = {
  expenseList: [],
  deletedExpense: [],
  incomeAmount: [],
};

let slice = createSlice({
  name: 'expenseSlice',
  initialState,
  reducers: {
    addIncome: (cState, action) => {},
    addExpense: (cState, action) => {
      cState.expenseList = [...cState.expenseList, action.payload];
    },
    deleteExpense: (cState, action) => {
      currentData = cState.expenseList;
      const filteredData = currentData.filter((ele, index) => {
        return index !== action.payload;
      });
      cState.expenseList = [...filteredData];
    },
  },
});

export let {addExpense, deleteExpense} = slice.actions;
export default slice.reducer;
