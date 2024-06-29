import {
    LOGIN,
    LOGOUT,
    SET_USER,
    LOGIN_WITH_TOKEN_REQUEST,
    LOGIN_WITH_TOKEN_SUCCESS,
    LOGIN_WITH_TOKEN_FAIL,
} from "../action/userAction";

const initialState = {
    isLoggedIn: false,
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case LOGIN_WITH_TOKEN_REQUEST:
            return {
                ...state,
                // Optionally update any loading state if needed
            };
        case LOGIN_WITH_TOKEN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
            };
        case LOGIN_WITH_TOKEN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
