import { ADD_TO_LIKE } from "../action/likeAction";

const initialState = {
    items: [],
};

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_LIKE:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};

export default likeReducer;
