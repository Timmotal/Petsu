import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//   value: number
// }

const initialState = {
//   value: 0,
products: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        const item = state.products.find(item => item.id === action.payload.id)

        if(item){
            item.quantity += action.payload.quantity
        } 
        else {
            state.products.push(action.payload);
        }
        // state.push(action.payload)
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.value += 1
    },
    removeItem: (state, action) => {
        state.products = state.products.filter(item => item.id !== action.payload)
    //   state.value -= 1
    },
    resetCart: (state) => {
        state.products = []
    //   state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions

export default cartSlice.reducer