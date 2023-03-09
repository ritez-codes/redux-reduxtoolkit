// DUCKS pattern
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
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

export const { incNum, decNum } = counterSlice.actions;
export default counterSlice.reducer;
