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