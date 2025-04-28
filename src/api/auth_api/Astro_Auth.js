import axios from "axios";
import { API_BASE_URL } from "../../config/Config";


// <----------------- User Register ----------------------->
export const AstroRegister = async (User_register_data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, User_register_data)
        return response
    } catch (error) {
        return error
    }
}