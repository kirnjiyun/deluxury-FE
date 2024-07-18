import { combineReducers } from "redux";
import modalReducer from "../reducer/modalReducer";
import stepReducer from "../reducer/stepReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import likeReducer from "./likeReducer";
const rootReducer = combineReducers({
    modal: modalReducer,
    step: stepReducer,
    user: userReducer,
    category: categoryReducer,
    cart: cartReducer,
    like: likeReducer,
});

export default rootReducer;
