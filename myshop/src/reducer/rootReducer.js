import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";
import stepReducer from "../reducer/stepReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    modal: modalReducer,
    step: stepReducer,
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
});

export default rootReducer;
