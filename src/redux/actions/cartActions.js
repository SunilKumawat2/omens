import { Get_Cart_List } from "../../api/category_product/Category_Product";
import { FETCH_CART_LIST_REQUEST, FETCH_CART_LIST_SUCCESS, FETCH_CART_LIST_FAILURE } from "../types";

export const fetchCartList = () => async (dispatch) => {
    dispatch({ type: FETCH_CART_LIST_REQUEST });
    try {
        const token = localStorage.getItem("user_token");
        if (!token) {
            throw new Error("Token not found");
        }

        const headers = { Authorization: `Bearer ${token}` };
        const response = await Get_Cart_List(headers);

        if (response?.data?.status) {
            dispatch({ type: FETCH_CART_LIST_SUCCESS, payload: response.data.data?.cartlist });
        } else {
            dispatch({ type: FETCH_CART_LIST_FAILURE, payload: "Failed to fetch profile" });
        }
    } catch (error) {
        dispatch({ type: FETCH_CART_LIST_FAILURE, payload: error.message });
    }
};