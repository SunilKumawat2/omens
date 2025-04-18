import React, { createContext, useState, useEffect } from 'react';
import { Get_Cart_List, Remove_Cart_List } from '../api/category_product/Category_Product';
import { User_Authentication } from '../user_authentication/User_Authentication';

export const Cart_Context = createContext();

export const CartProvider = ({ children }) => {
    const [cart_list, setCartList] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch the cart on initial render
    const fetchCart = async () => {
        try {
            setLoading(true);
            const token = User_Authentication();
            if (token) {
                const response = await Get_Cart_List({ Authorization: `Bearer ${token}` });
                setCartList(response?.data?.data?.cartlist || []);
            }
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch cart:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    // Remove an item from the cart
    const removeCartItem = async (cart_id) => {
        try {
            const token = User_Authentication();
            if (!token) return;

            const response = await Remove_Cart_List({ cart_id }, { Authorization: `Bearer ${token}` });
            if (response?.data?.status === "200") {
                setCartList((prev) => prev.filter(item => item.id !== cart_id));
            }
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    };

    // Add other cart-related actions (add, update) if needed

    return (
        <Cart_Context.Provider value={{ cart_list, loading, fetchCart, removeCartItem }}>
            {children}
        </Cart_Context.Provider>
    );
};
