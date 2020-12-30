import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
} from "../reducers/post";

// api

function addPostAPI(data) {
    return axios.post("/api/post", data);
}

// saga

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.data,
            },
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

// watcher

export function* watchPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}