import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";
import stepReducer from "../reducer/stepReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
    modal: modalReducer,
    step: stepReducer,
    user: userReducer,
    category: categoryReducer,
});

export default rootReducer;
