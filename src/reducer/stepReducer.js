import { NEXT_STEP, PREV_STEP } from "../action/SignUpAction";

const initialState = {
    step: 1,
};

const stepReducer = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        case NEXT_STEP:
            return { step: state.step + 1 };
        case PREV_STEP:
            return { step: state.step - 1 };
        default:
            return state;
    }
};

export default stepReducer;
