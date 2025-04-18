import { combineReducers } from "redux";
import astrologerReducer from "./astrologerReducer";
import userReducer from "./userProfileReducer";
import cartReducer from "./cartReducer";

const rootreducer = combineReducers({
    astrologer: astrologerReducer,
    user_profile: userReducer,
    cartlist:cartReducer
});

export default rootreducer;