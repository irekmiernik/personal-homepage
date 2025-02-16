import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError
} from "./personalHomepageSlice";

const loadingDelay = 10_000;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
};

export function* personalHomepageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};