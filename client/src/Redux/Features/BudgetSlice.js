import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
  name: 'budget',
  initialState: {
    budget: {}
  },
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload
    },
  }
})

export const {setBudget} = budgetSlice.actions
export default budgetSlice.reducer