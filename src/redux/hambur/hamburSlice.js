import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: true,
};

const hamburSlice = createSlice({
  name: "Toglehambur",
  initialState: INITIAL_STATE,
  reducers: {
    toggleHiddenHambur: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { toggleHiddenHambur } = hamburSlice.actions;

export default hamburSlice.reducer;
