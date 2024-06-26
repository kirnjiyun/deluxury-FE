import { SET_CATEGORIES } from "../action/categoryAction";

const initialState = {
    bigCategory: "",
    mainCategory: "",
    subCategory: "",
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default categoryReducer;
