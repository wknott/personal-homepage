import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./Portfolio/Projects/projectsSlice";
import themeSlice from "./themeSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchProjects } from "./Portfolio/Projects/projectsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeSlice,
    projects: projectsSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchProjects);

export default store;