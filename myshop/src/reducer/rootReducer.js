import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";
import stepReducer from "../reducer/stepReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    modal: modalReducer,
    step: stepReducer,
    user: userReducer,
});

export default rootReducer;
