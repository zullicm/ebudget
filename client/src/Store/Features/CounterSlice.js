import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducer: {
    plusCount: (state, action) => {
        return state + action.payload
      },
    minusCount: (state, action) => {
        return state - action.payload
    }
    }
  }
)

export const {plusCount, minusCount} = counterSlice.actions

export default counterSlice.reducer