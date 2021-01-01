import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
} from "../reducers/post";

// api

function addPostAPI(data) {
    return axios.post("/api/post", data);
}

function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data);
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
        // yield put({
        //     type: ADD_POST_TO_ME,
        //     data: id,
        // });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function* addComment(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);

        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                id,
                content: action.data,
            },
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}

// watcher

export function* watchPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
