import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkTheme: localStorage.getItem("isDarkTheme") || false,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem("isDarkTheme", state.isDarkTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = state => state.theme;
export const selectIsDarkTheme = state => selectThemeState(state).isDarkTheme;

export default themeSlice.reducer;