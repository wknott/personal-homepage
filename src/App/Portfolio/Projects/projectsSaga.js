import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import { fetchProjects, fetchProjectsError, fetchProjectsSuccess } from "./projectsSlice";

function* handleWatchFetchProjects() {
  try {
    yield delay(2000); //just for loader demo
    const projects = yield call(getProjects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsError);
  }

};

export function* watchFetchProjects() {
  yield takeEvery(fetchProjects.type, handleWatchFetchProjects);
};