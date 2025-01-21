import { UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_SUCCESS } from "../types";
import { Update_Cart_List, Remove_Cart_List } from "../../api/category_product/Category_Product";
import { toast } from "react-toastify";

export const updateCartItem = (cart_id, newQty, energization, certificate) => async (dispatch, getState) => {
    const state = getState();
    const cartItem = state.cartlist.cartlist.find(item => item.id === cart_id);

    if (!cartItem) {
        toast.error("Cart item not found.");
        return;
    }

    const maxStock = cartItem.product?.current_stock;

    console.log("Max Stock:", maxStock);
    console.log("Requested Quantity:", newQty);

    // Step 1: Check if requested quantity exceeds stock
    if (newQty > maxStock) {
        toast.error(`Only ${maxStock} items available in stock.`);
        return;
    }

    // Step 2: Handle case where new quantity is 0 (Remove the item from cart)
    if (newQty <= 0) {
        try {
            const token = localStorage.getItem("user_token");
            if (!token) throw new Error("User token not found");

            // Remove item from cart
            await Remove_Cart_List(cart_id, { Authorization: `Bearer ${token}` });

            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cart_id });
            toast.success("Item removed from cart.");
        } catch (error) {
            toast.error("Failed to remove item.");
        }
        return;
    }

    // Step 3: Calculate total price based on new quantity
    const totalPrice = cartItem.product?.purchase_price * newQty; // Recalculate the total price

    const update_data = {
        cart_id,
        quantity: newQty,
        energization,
        certificate,
        total_price: totalPrice,
    };

    console.log("Update Data: ", update_data);  // Add this log to check data being passed

    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
        const token = localStorage.getItem("user_token");
        if (!token) throw new Error("User token not found");

        const response = await Update_Cart_List(update_data, { Authorization: `Bearer ${token}` });

        console.log("Update Response:", response);  // Check if the API response is coming back

        if (response?.data?.status == "200") {
            dispatch({
                type: UPDATE_CART_ITEM_SUCCESS,
                payload: { cart_id, quantity: newQty, total_price: totalPrice, energization, certificate },
            });
            toast.success("Cart updated successfully.");
        } else {
            throw new Error("Failed to update cart");
        }
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });
        toast.error("Error updating cart.");
    }
};
