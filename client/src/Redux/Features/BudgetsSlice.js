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
      },
      clearBudgets: (state, action) => {
        state.budgets = []
      }
    }
  }
)

export const {setBudgets, addBudget, deleteBudget, clearBudgets} = budgetsSlice.actions

export default budgetsSlice.reducer


// dispatch =   const dispatch = useDispatch()
// selector =   const count = useSelector(state => state.counter.count)
