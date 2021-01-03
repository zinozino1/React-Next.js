import { takeLatest, call, put, delay, throttle } from "redux-saga/effects";
import {
    ADD_POST_REQUEST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE,
    REMOVE_POST_REQUEST,
    REMOVE_POST_SUCCESS,
    REMOVE_POST_FAILURE,
    LOAD_POSTS_REQUEST,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE,
} from "../reducers/post";
import {
    ADD_POST_TO_ME,
    REMOVE_POST_OF_ME,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
} from "../reducers/user";
import shortId from "shortid";

// api

function addPostAPI(data) {
    return axios.post("/api/post", data);
}

function addCommentAPI(data) {
    return axios.post(`/api/post/${data.postId}/comment`, data);
}

// saga

function* loadPosts(action) {
    yield delay(1500);
    try {
        yield put({ type: LOAD_POSTS_SUCCESS });
    } catch (error) {
        console.log(error);
        yield put({ type: LOAD_POSTS_FAILURE, error: error.response.data });
    }
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();

        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                id,
                content: action.payload.content,
                nickname: action.payload.nickname,
            },
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: { id, content: action.payload.content },
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function* addComment(action) {
    try {
        // const result = yield call(addPostAPI, action.data);

        yield delay(1000);

        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.payload,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function* removePost(action) {
    try {
        yield delay(1000);

        yield put({ type: REMOVE_POST_SUCCESS, id: action.payload });
        yield put({ type: REMOVE_POST_OF_ME, id: action.payload });
    } catch (error) {
        console.log(error);
        yield put({ type: REMOVE_POST_FAILURE, error: error.response.data });
    }
}

function* follow(action) {
    try {
        yield delay(1000);
        yield put({ type: FOLLOW_SUCCESS, post: action.payload });
    } catch (error) {
        console.log(error);
        yield put({ type: FOLLOW_FAILURE });
    }
}

function* unFollow(action) {
    try {
        yield delay(1000);
        yield put({ type: UNFOLLOW_SUCCESS, post: action.payload });
    } catch (error) {
        console.log(error);
        yield put({ type: UNFOLLOW_FAILURE });
    }
}

// watcher

export function* watchPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
    yield takeLatest(FOLLOW_REQUEST, follow);
    yield takeLatest(UNFOLLOW_REQUEST, unFollow);
}
