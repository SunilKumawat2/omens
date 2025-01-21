import axios from "axios";
import { THIRD_PARTY_API_BASE_URL } from "../../config/Config";

// <------------ Book Pooja -------------->
export const Get_Geo_Details = async (data, header) => {
    try {
        const response = await axios.post(`${THIRD_PARTY_API_BASE_URL}/geo_details`, data, { headers: header });
        return response;
    } catch (error) {
        return error;
    }
};