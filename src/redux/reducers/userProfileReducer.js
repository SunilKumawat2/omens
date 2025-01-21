import {
    FETCH_USER_PROFILE_REQUEST,
    FETCH_USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE_FAILURE,
} from "../types";

const initialState = {
    profile: null,
    isloading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE_REQUEST:
            return { ...state, isloading: true, error: null };
        case FETCH_USER_PROFILE_SUCCESS:
            return { ...state, isloading: false, profile: action.payload };
        case FETCH_USER_PROFILE_FAILURE:
            return { ...state, isloading: false, error: action.payload };
        default:
            return state;
    }
};

export default userReducer;
