// DUCKS pattern
import { createSlice } from "@reduxjs/toolkit";

// initial state initialized with object
const initialState = {
  value: 0,
};

// creating slice...
const counterSlice = createSlice({
  name: "counter",
  // state
  initialState,
  //reducers
  reducers: {
    // increment by 5
    incNum(state, action) {
      //! its ok to do this because immer makes it immoutable under the hood
      state.value = state.value + action.payload;
    },
    // decrement by 5
    decNum(state, action) {
      state.value = state.value - action.payload;
    },
  },
});

// exporting actions
export const { incNum, decNum } = counterSlice.actions;

// exporting reducer
export default counterSlice.reducer;
