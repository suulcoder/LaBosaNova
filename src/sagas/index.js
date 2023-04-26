import { fork, all } from 'redux-saga/effects';

function* mainSaga() {
  yield all([
    // fork(watchFetchModels),
  ]);
}

export default mainSaga;