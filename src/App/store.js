import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./Portfolio/Projects/projectsSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice,
    projects: projectsSlice,
  },
});

export default store;