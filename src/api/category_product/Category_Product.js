import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// <----------------- User Register ----------------------->
export const Sub_Category_List = async (User_register_data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/sub-category-list`, User_register_data)
        return response
    } catch (error) {
        return error
    }
}

// <-------- Product List ------------------->
export const Product_List_Data = async ({ origin_id, shape_id, color_id, treatment_id, min_amount, max_amount }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-product-list`, {
            params: {
                // category_id,
                // subcategory_id,
                is_best: "1",
                origin_id,
                shape_id,
                color_id,
                treatment_id,
                min_amount,
                max_amount
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Product List ------------------->
export const Get_Product_Details = async ({ id, category_id, subcategory_id }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-product-list`, {
            params: {
                id,
                category_id,
                subcategory_id
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Get_Product_list ------------->
export const Get_Product_List = async ({ is_best, origin_id, shape_id, color_id, treatment_id, min_amount, max_amount }, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product-list`, {
            params: {
                // category_id,
                // subcategory_id,
                is_best: "1",
                origin_id,
                shape_id,
                color_id,
                treatment_id,
                min_amount,
                max_amount
            }
            , headers: headers
        }
        );
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Get_Product_list ------------->
export const Get_Product_List_Category_wise = async ({ category_id, subcategory_id, origin_id, shape_id, color_id, treatment_id, min_amount, max_amount }, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/product-list`, {
            params: {
                category_id,
                subcategory_id,
                origin_id,
                shape_id,
                color_id,
                treatment_id,
                min_amount,
                max_amount
            }
            , headers: headers
        }
        );
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Get_Product_list ------------->
export const Product_List_Data_Category_wise = async ({ category_id, subcategory_id, origin_id, shape_id, color_id, treatment_id, min_amount, max_amount }, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-product-list`, {
            params: {
                category_id,
                subcategory_id,
                origin_id,
                shape_id,
                color_id,
                treatment_id,
                min_amount,
                max_amount
            }
            , headers: headers
        }
        );
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Product List ------------------->
export const Add_To_Cart = async (add_to_cart_data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-to-cart`, add_to_cart_data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <-------- Get_Cart_List ------------------->
export const Get_Cart_List = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/cart-list`, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};
// <------------ Remove_Cart_List -------------->
export const Remove_Cart_List = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/remove-cart`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Remove_Cart_List -------------->
export const Update_Cart_List = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/update-cart`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Remove_Cart_List -------------->
export const Coupan_Code = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/coupon-check`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- shipping-address ------------->
export const Shipping_Address = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/shipping-address`, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- shipping-address ------------->
export const Add_Shipping_Address = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-shipping-address`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- shipping-address ------------->
export const Remove_Shipping_Address = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/remove-shipping-address`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- shipping-address ------------->
export const Update_Shipping_Address = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/update-shipping-address`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- order-place ------------->
export const Submit_Order_Place = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/order-place`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <--------- order-place ------------->
export const Get_Order_List = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/order-list`, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};
// <--------- order-place ------------->
export const Get_Order_Details = async (orderId, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/order-details`, {
            params: { orderId },
            headers,
        });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return Promise.reject(error);
    }
};

// <-------- add-to-fav       ------------->
export const Add_To_Fav = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-to-fav`, data, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};
// <-------- add-to-fav       ------------->
export const Add_To_Review = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-product-review`, data, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const Get_Wallet_Details = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/wallet-detail`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const wallet_amount_flag = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/wallet-amount-flag`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const add_wallet = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-wallet`, data, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const get_wallet_history = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/wallet-history`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const get_favourite_product_list = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/favourite-product-list`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const web_user_dashboard = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-user-dashboard`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- wallet-detail -------------->
export const get_return_policy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/return-policy`);
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};