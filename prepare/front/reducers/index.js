import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

const rootReducer = combineReducers({
    // next에서 ssr하기 위해 필요
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return action.payload;
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;
