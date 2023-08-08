import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
  name: 'counter', // Change to a suitable name for your slice
  initialState: 0,
  reducers: {
    increment: (state, actions) => {
        console.log(actions)
      return state + actions.payload;
    },
    decrement: (state , actions)=>{
        return state - actions.payload;
    },
    resetAll:(state,action)=>{
        state=0
        return state;

    }
  },
});

export const { increment, decrement, resetAll } = counterSlice.actions;

export default counterSlice.reducer;





