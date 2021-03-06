import { all, put, call, fork } from "redux-saga/effects";
import { watchUser } from "./user";
import { watchPost } from "./post";

function* rootSaga() {
    yield all([fork(watchUser), fork(watchPost)]);
}

export default rootSaga;

/**
 * @author 박진호
 * @summary redux saga
 * @type dsafd
 */
