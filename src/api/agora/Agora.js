import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

export const Agora_Generate_Token = async ({ receiver_id, type }, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/generate-token`, {
            params: {
                receiver_id,
                type
            }
            , headers: headers
        })
        return response
    } catch (error) {
        return error
    }
}

// <----------- call store ------------>
export const Call_Store = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/call-store`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}
