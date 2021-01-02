import { handleActions, createAction } from "redux-actions";

// initial state

const initialState = {
    followLoading: false, // 팔로우 시도중
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
};

// action type

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

// action creator

export const loginRequestAction = createAction(LOG_IN_REQUEST, (data) => data);
export const logoutRequestAction = createAction(LOG_OUT_REQUEST);

export const signUpRequestAction = createAction(SIGN_UP_REQUEST);

// reducer

const dummyMe = { nickname: "zino" };

const dummyUser = (data) => ({
    // me에 들어갈 데이터
    ...data,
    nickname: "박진호",
    id: 1,
    Posts: [{ id: 1 }], // 내가 쓴 게시물
    Followings: [{ nickname: "zino" }, { nickname: "zin2o" }],
    Followers: [{ nickname: "zino" }, { nickname: "zin2o" }],
});

const reducer = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) => ({
            ...state,
            logInLoading: true,
            logInError: null,
            logInDone: false,
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            logInLoading: false,
            logInDone: true,
            logInError: null,
            me: dummyUser(action.data),
        }),
        [LOG_IN_FAILURE]: (state, action) => ({
            ...state,
            logInLoading: false,
            logInDone: false,
            logInError: action.error,
        }),
        [LOG_OUT_REQUEST]: (state, action) => ({
            ...state,
            logoutLoading: true,
            logOutDone: false,
            logOutError: null,
        }),
        [LOG_OUT_SUCCESS]: (state, action) => ({
            ...state,
            logOutLoading: false,
            logOutDone: true,
            logOutError: null,
            me: null,
        }),
        [LOG_OUT_FAILURE]: (state, action) => ({
            ...state,
            logoutLoading: false,
            logOutDone: false,
            logOutError: action.error,
        }),
        [SIGN_UP_REQUEST]: (state, action) => ({
            ...state,
            signUpLoading: true,
            signUpDone: false,
            signUpError: null,
        }),
        [SIGN_UP_SUCCESS]: (state, action) => ({
            ...state,
            signUpLoading: false,
            signUpDone: true,
            signUpError: null,
        }),
        [SIGN_UP_FAILURE]: (state, action) => ({
            ...state,
            signUpLoading: false,
            signUpDone: false,
            signUpError: action.error,
        }),
        [CHANGE_NICKNAME_REQUEST]: (state, action) => ({
            ...state,
            changeNicknameLoading: true, // 닉네임 변경 시도중
            changeNicknameDone: false,
            changeNicknameError: null,
        }),
        [CHANGE_NICKNAME_SUCCESS]: (state, action) => ({
            ...state,
            changeNicknameLoading: false, // 닉네임 변경 시도중
            changeNicknameDone: true,
            changeNicknameError: null,
        }),
        [CHANGE_NICKNAME_FAILURE]: (state, action) => ({
            ...state,
            changeNicknameLoading: false, // 닉네임 변경 시도중
            changeNicknameDone: false,
            changeNicknameError: action.error,
        }),
        [FOLLOW_REQUEST]: (state, action) => ({
            ...state,
            followLoading: true, // 팔로우 시도중
            followDone: false,
            followError: null,
        }),
        [FOLLOW_SUCCESS]: (state, action) => ({
            ...state,
            followLoading: false, // 팔로우 시도중
            followDone: true,
            followError: null,
        }),
        [FOLLOW_FAILURE]: (state, action) => ({
            ...state,
            followLoading: false, // 팔로우 시도중
            followDone: false,
            followError: null,
        }),
        [ADD_POST_TO_ME]: (state, action) => ({
            ...state,
            me: {
                ...state.me,
                Posts: state.me.Posts.concat({ id: action.data.id }),
            },
        }),
        [REMOVE_POST_OF_ME]: (state, action) => ({
            ...state,
            me: {
                ...state.me,
                Posts: state.me.Posts.filter((v, i) => {
                    if (v.id !== action.id) return { ...v };
                }),
            },
        }),
    },
    initialState,
);

export default reducer;
