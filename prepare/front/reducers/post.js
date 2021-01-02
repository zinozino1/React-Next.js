import { handleActions, createAction } from "redux-actions";
import shortId from "shortid";
import produce from "immer";
import faker from "faker";

// initial state

const initialState = {
    mainPosts: [
        {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
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
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
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
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
};

// dummy data

export const generateDummyPost = (number) =>
    Array(number)
        .fill()
        .map((v, i) => ({
            id: shortId.generate(),
            Images: [
                {
                    src: faker.image.image(),
                },
            ],
            Comments: [
                {
                    User: {
                        id: shortId.generate(),
                        nickname: faker.name.findName(),
                    },
                    content: faker.lorem.sentence(),
                },
            ],
            User: {
                id: shortId.generate(),
                nickname: faker.name.findName(),
            },
            content: faker.lorem.paragraph(),
        }));

const dummyPost = (data) => ({
    id: data.id, // id 임시로 생성할 때 유용 또는 id 정하기 어려울 때
    User: {
        id: 1,
        nickname: data.nickname,
    },
    content: data.content,
    Images: [],
    Comments: [],
});

// action type

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

// action creator

export const addPostRequestAction = createAction(
    ADD_POST_REQUEST,
    (data) => data,
);

export const addCommentRequestAction = createAction(
    ADD_COMMENT_REQUEST,
    (data) => data,
);

export const removePostReqeustAction = createAction(
    REMOVE_POST_REQUEST,
    (id) => id,
);

export const loadPostsRequestAction = createAction(LOAD_POSTS_REQUEST);

// reducer

const reducer = handleActions(
    {
        [ADD_POST_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
            }),
        [ADD_POST_SUCCESS]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            mainPosts: [dummyPost(action.data), ...state.mainPosts],
            addPostLoading: false,
            addPostDone: true,
            addPostError: null,
        }),
        [ADD_POST_FAILURE]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨

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

            mainPosts: state.mainPosts.map((v, i) => {
                if (v.id === action.data.postId) {
                    return {
                        ...v,
                        Comments: v.Comments.concat({
                            content: action.data.content,
                            User: {
                                ...v.Comments.User,
                                nickname: action.data.userId,
                            },
                        }),
                    };
                }
                return v;
            }),
            addCommentLoading: false,
            addCommentDone: true,
            addCommentError: action.data,
        }),
        [ADD_COMMENT_FAILURE]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            addCommentLoading: false,
            addCommentDone: false,
            addCommentError: action.error,
        }),
        [REMOVE_POST_REQUEST]: (state, action) => ({
            ...state,
            removePostLoading: true,
            removePostDone: false,
            removePostError: null,
        }),
        [REMOVE_POST_SUCCESS]: (state, action) => ({
            ...state,
            removePostLoading: false,
            removePostDone: true,
            removePostError: null,
            mainPosts: state.mainPosts.filter((v, i) => {
                if (v.id !== action.id) return { ...v };
            }),
        }),
        [REMOVE_POST_FAILURE]: (state, action) => ({
            ...state,
            removePostLoading: false,
            removePostDone: false,
            removePostError: action.error,
        }),
        [LOAD_POSTS_REQUEST]: (state, action) => ({
            ...state,
            loadPostsLoading: true,
            loadPostsDone: false,
            loadPostsError: null,
        }),
        [LOAD_POSTS_SUCCESS]: (state, action) => ({
            ...state,
            loadPostsLoading: false,
            loadPostsDone: true,
            loadPostsError: null,
            mainPosts: state.mainPosts.concat(generateDummyPost(5)),
        }),
        [LOAD_POSTS_FAILURE]: (state, action) => ({
            ...state,
            loadPostsLoading: false,
            loadPostsDone: false,
            loadPostsError: null,
        }),
    },
    initialState,
);

export default reducer;
