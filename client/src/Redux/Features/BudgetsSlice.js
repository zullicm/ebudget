import { createSlice } from '@reduxjs/toolkit'

export const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: [],
  reducers: {
      addBudget: (state, action) => {
        state.push(action.payload)
      },
    }
  }
)

export const {addBudget} = budgetsSlice.actions

export default budgetsSlice.reducer

// [...budgets, data]
// initial state, then new budget