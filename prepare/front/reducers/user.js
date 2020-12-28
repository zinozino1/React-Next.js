import { handleActions, createAction } from "redux-actions";

// initial state

const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
};

// action type

const LOGIN = "LOG_IN";
const LOGOUT = "LOG_OUT";

// action creator

export const loginAction = createAction(LOGIN);
export const logoutAction = createAction(LOGOUT);

// reducer

const reducer = handleActions(
    {
        [LOGIN]: (state, action) => ({
            ...state,
            isLoggedIn: true,
            user: action.data,
        }),
        [LOGOUT]: (state, action) => ({
            ...state,
            isLoggedIn: false,
        }),
    },
    initialState,
);

export default reducer;
