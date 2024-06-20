import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";
import stepReducer from "../reducer/stepReducer";
const rootReducer = combineReducers({
    modal: modalReducer,
    step: stepReducer,
});

export default rootReducer;
