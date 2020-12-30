import { handleActions, createAction } from "redux-actions";

// initial state

const initialState = {
    isLoggingIn: false, // 로그인 시도중
    isLoggingOut: false, // 로그아웃 시도중
    isLoggedIn: false, // 로그인 성공
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

// action creator

export const loginRequestAction = createAction(LOG_IN_REQUEST, (data) => data);
export const logoutRequestAction = createAction(LOG_OUT_REQUEST);

// reducer

const dummyMe = { nickname: "zino" };

const reducer = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) => ({
            ...state,
            isLoggingIn: true,
        }),
        [LOG_IN_SUCCESS]: (state, action) => ({
            ...state,
            isLoggingOut: false,
            isLoggedIn: true,
            me: dummyMe,
        }),
        [LOG_IN_FAILURE]: (state, action) => ({
            ...state,
            //me: action.data,
        }),
        [LOG_OUT_REQUEST]: (state, action) => ({
            ...state,
            isLoggingOut: true,
        }),
        [LOG_OUT_SUCCESS]: (state, action) => ({
            ...state,
            isLoggingIn: false,
            isLoggingOut: false,
            isLoggedIn: false,
            me: null,
        }),
        [LOG_OUT_FAILURE]: (state, action) => ({
            ...state,
            isLoggedIn: false,
        }),
    },
    initialState,
);

export default reducer;
