import { createSlice } from '@reduxjs/toolkit'

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: {
    budgets: []
  },
  reducers: {
      setBudgets: (state, action) => {
        state.budgets = action.payload
      },
      addBudget: (state, action) => {
        state.budgets.push(action.payload)
      },
      deleteBudget: (state, action) => {
        state.budgets = state.budgets.filter((budget) => budget.id !== action.payload)
      }
    }
  }
)

export const {setBudgets, addBudget, deleteBudget} = budgetsSlice.actions

export default budgetsSlice.reducer
