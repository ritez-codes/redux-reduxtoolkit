// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    incNum(state) {
      //! its ok to do this because immer makes it immoutable under the hood
      state.value++;
    },
    // decrement
    decNum(state) {
      state.value--;
    },
  },
});

export const { incNum, decNum } = counterSlice.actions;
export default counterSlice.reducer;
