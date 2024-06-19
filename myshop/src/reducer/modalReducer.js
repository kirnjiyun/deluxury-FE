import { OPEN_SEARCH_MODAL, CLOSE_SEARCH_MODAL } from "../action/modalAction";

const initialState = {
    isSearchModalOpen: false,
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SEARCH_MODAL:
            return { ...state, isSearchModalOpen: true };
        case CLOSE_SEARCH_MODAL:
            return { ...state, isSearchModalOpen: false };
        default:
            return state;
    }
};

export default modalReducer;
