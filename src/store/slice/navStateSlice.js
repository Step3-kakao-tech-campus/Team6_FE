import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  indicator: 0,
};

const navStateSlice = createSlice({
  name: "indicator",
  initialState: initialState,
  reducers: {
    setIndicator: (state, action) => {
      state.indicator = action.payload;
    },
  },
});

export const { setIndicator } = navStateSlice.actions;
export default navStateSlice.reducer;