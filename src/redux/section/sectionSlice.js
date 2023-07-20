import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  selectedSection: null,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState: INITIAL_STATE,
  reducers: {
    // getSection: (state) => {
    //   return state;
    // },
    selectSection: (state, action) => {
      return {
        ...state,
        selectedSection:
          action.payload !== state.selectedSection ? action.payload : null,
      };
    },
  },
});

export const { getSection, selectSection } = sectionSlice.actions;

export default sectionSlice.reducer;
