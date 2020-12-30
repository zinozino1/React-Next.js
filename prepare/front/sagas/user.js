import {
    takeLatest,
    fork,
    put,
    delay,
    call,
    take,
    takeEvery,
} from "redux-saga/effects";
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
} from "../reducers/user";
// api

function logInAPI(data) {
    return axios.post("/api/login", data);
}

function logOutAPI() {
    return axios.post("/api/logout");
}

function signUpAPI() {
    return axios.post("/api/signUp");
}

function followAPI() {
    return axios.post("/api/follow");
}

// saga

function* logIn(action) {
    try {
        console.log("saga logIn");
        // const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

// watcher

export function* watchUser() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
