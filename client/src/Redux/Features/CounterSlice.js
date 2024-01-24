import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'count',
  initialState: { count: 0},
  reducers: {
    plusCount: (state, action) => {
        state.count += parseInt(action.payload)
      },
    minusCount: (state, action) => {
        state.count -= parseInt(action.payload)
      }
    }
  }
)

export const {plusCount, minusCount} = counterSlice.actions

export default counterSlice.reducer