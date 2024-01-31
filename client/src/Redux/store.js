import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./Features/CounterSlice"
import budgetsSlice from "./Features/BudgetsSlice"
import budgetSlice from "./Features/BudgetSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    budgets: budgetsSlice,
    budget: budgetSlice
  }
})