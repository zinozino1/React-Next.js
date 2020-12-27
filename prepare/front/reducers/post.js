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
            content: "첫 번째 게시글",
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
    ],
    imagePaths: [],
    postAdded: false,
};

// dummy data

const dummyPost = {
    id: 2,
    content: "더미데이터임",
    User: {
        id: 1,
        nickname: "제로초",
    },
    Images: [],
    Comments: [],
};

// action type

const ADD_POST = "ADD_POST";

// action creator

export const addPostAction = createAction(ADD_POST);

// reducer

const reducer = handleActions(
    {
        [ADD_POST]: (state, action) => ({
            ...state,
            // 잎에 추가를 해야 위에서 부터 추가됨
            mainPosts: state.mainPosts.concat(dummyPost),
            //[dummyPost, ...state.mainPosts],
        }),
    },
    initialState,
);

export default reducer;
