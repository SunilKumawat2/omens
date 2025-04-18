import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

export const Get_Pooja_List = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pooja-list`);
        return response;
    } catch (error) {
        return error;
    }
};
// user-booked-pooja-list
export const Get_User_Booked_Pooja_List = async (header) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user-booked-pooja-list`, { headers: header });
        return response;
    } catch (error) {
        return error;
    }
};
export const Get_Pooja_List_Category_id = async ({ category_id, pooja_date }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pooja-list`, {
            params: {
                category_id,
                pooja_date
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

// <---------- Get Pooja details ----------->
export const Get_Pooja_List_Details = async ({ id, category_id }) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pooja-list`, {
            params: {
                id,
                category_id
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Book Pooja -------------->
export const Book_Pooja = async (data, header) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/book-pooja`, data, { headers: header });
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Book Pooja -------------->
export const Astro_Book_pooja_Order_List = async ({ status }, headers) => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}/astro-pooja-orders`,
            {
                params: {
                    status
                }
                , headers: headers
            }
        );
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Book Pooja -------------->
export const Pooja_Status_Update = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/pooja-status-update`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};

// <------------ Book Pooja -------------->
export const Post_pooja_review = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-pooja-review`, data, { headers: headers });
        return response;
    } catch (error) {
        return error;
    }
};
