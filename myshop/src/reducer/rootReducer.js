import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";

const rootReducer = combineReducers({
    modal: modalReducer,
    // auth: authReducer,
});

export default rootReducer;
