import { handleActions, createAction } from "redux-actions";

// initial state

const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "제로초",
            },
            content: "첫 번째 게시글 #해시태그 #키키 #ㄴㄴㄴ ##adf",
            Images: [
                {
                    src:
                        "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
                },
                {
                    src:
                        "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg",
                },
                {
                    src:
                        "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "nero",
                    },
                    content: "우와 개정판이 나왔군요~",
                },
                {
                    User: {
                        nickname: "hero",
                    },
                    content: "얼른 사고싶어요~",
                },
            ],
        },
        {
            id: 2,
            User: {
                id: 1,
                nickname: "제로초",
            },
            content: "첫 번째 게시글",
            Images: [
                {
                    src:
                        "https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "nero",
                    },
                    content: "우와 개정판이 나왔군요~",
                },
                {
                    User: {
                        nickname: "hero",
                    },
                    content: "얼른 사고싶어요~",
                },
            ],
        },
    ],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

// dummy data

const dummyPost = {
    id: 3,
    content: "더미데이터임",
    User: {
        id: 1,
        nickname: "제로초",
    },
    Images: [],
    Comments: [],
};

// action type

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

// action creator

export const addPostRequestAction = createAction(
    ADD_POST_REQUEST,
    (data) => data,
);

// reducer

const reducer = handleActions(
    {
        [ADD_POST_REQUEST]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            mainPosts: state.mainPosts.concat(dummyPost),
            addPostLoading: true,
            addPostDone: false,
            addPostError: null,
        }),
        [ADD_POST_SUCCESS]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            mainPosts: [dummyPost, ...state.mainPosts],
            addPostLoading: false,
            addPostDone: true,
            addPostError: null,
        }),
        [ADD_POST_FAILURE]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            mainPosts: [dummyPost, ...state.mainPosts],
            addPostLoading: false,
            addPostDone: false,
            addPostError: action.error,
        }),
        [ADD_COMMENT_REQUEST]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            addCommentLoading: true,
            addCommentDone: false,
            addCommentError: null,
        }),
        [ADD_COMMENT_SUCCESS]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            addCommentLoading: false,
            addCommentDone: true,
            addCommentError: null,
        }),
        [ADD_COMMENT_FAILURE]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            addCommentLoading: false,
            addCommentDone: false,
            addCommentError: action.error,
        }),
    },
    initialState,
);

export default reducer;
