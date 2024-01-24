import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./Features/CounterSlice"
import budgetsSlice from "./Features/BudgetsSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    budgets: budgetsSlice
  }
})