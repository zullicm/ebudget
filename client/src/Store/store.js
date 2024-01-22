import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./Features/CounterSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})