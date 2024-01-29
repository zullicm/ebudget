import { createSlice } from '@reduxjs/toolkit'

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: [],
  reducers: {
      addBudget: (state, action) => {
        state.push(action.payload)
      },
      deleteBudget: (state, action) => {
        state = state.filter((budget) => budget.id !== action.payload
        )
      }
    }
  }
)

export const {addBudget, deleteBudget} = budgetsSlice.actions

export default budgetsSlice.reducer

// [...budgets, data]
// initial state, then new budget