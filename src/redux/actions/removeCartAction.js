import { Remove_Cart_List } from "../../api/category_product/Category_Product";
import { 
    REMOVE_CART_ITEM_REQUEST, 
    REMOVE_CART_ITEM_SUCCESS, 
    REMOVE_CART_ITEM_FAILURE 
} from "../types";

export const removeCartItem = (cart_id) => async (dispatch) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST });

    try {
        const token = localStorage.getItem("user_token");
        if (!token) {
            throw new Error("Token not found");
        }

        const headers = { Authorization: `Bearer ${token}` };
        const data = { cart_id };

        const response = await Remove_Cart_List(data, headers);

        if (response?.data?.status === "200") {
            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cart_id });
        } else {
            dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: "Failed to remove cart item" });
        }
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });
    }
};
