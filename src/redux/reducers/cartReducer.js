import {
    FETCH_CART_LIST_REQUEST,
    FETCH_CART_LIST_SUCCESS,
    FETCH_CART_LIST_FAILURE,
} from "../types";

const initialState = {
    profile: null,
    isloading: false,
    error: null,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CART_LIST_REQUEST:
            return { ...state, isloading: true, error: null };
        case FETCH_CART_LIST_SUCCESS:
            return { ...state, isloading: false, cartlist: action.payload };
        case FETCH_CART_LIST_FAILURE:
            return { ...state, isloading: false, error: action.payload };
        default:
            return state;
    }
};

export default cartReducer;
