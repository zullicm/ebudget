import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'count',
  initialState: { count: 0},
  reducers: {
    plusCount: (state) => {
        state.count += 1
      },
    minusCount: (state) => {
        state.count -= 1
      }
    }
  }
)

export const {plusCount, minusCount} = counterSlice.actions

export default counterSlice.reducer