import { LOGIN, LOGOUT, SET_USER } from "../action/userAction";

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

        default:
            return state;
    }
};

export default userReducer;
