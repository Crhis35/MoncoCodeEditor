import { createSlice } from '@reduxjs/toolkit';

export const initialState = false;

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toogleDarkMode(state) {
      return !state;
    },
  },
});
export const { toogleDarkMode } = darkModeSlice.actions;
const darkModeReducer = darkModeSlice.reducer;
export default darkModeReducer;
