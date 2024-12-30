import {createSlice} from '@reduxjs/toolkit';

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
    serInitialValue: (cstate, action) => {
      cstate.expenseList = action.payload;
    },
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

export let {addExpense, deleteExpense, serInitialValue} = slice.actions;
export default slice.reducer;
