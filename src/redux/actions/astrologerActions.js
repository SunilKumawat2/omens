import { get_astro_profile } from "../../api/astrologer/Astrologer";
import {
    FETCH_ASTRO_PROFILE_REQUEST,
    FETCH_ASTRO_PROFILE_SUCCESS,
    FETCH_ASTRO_PROFILE_FAILURE,
} from "../types";


export const fetchAstroProfile = () => async (dispatch) => {
    dispatch({ type: FETCH_ASTRO_PROFILE_REQUEST }); 
    try {
        const token = localStorage.getItem("user_token"); 
        if (!token) {
            throw new Error("Token not found");
        }

        const headers = { Authorization: `Bearer ${token}` };
        const response = await get_astro_profile(headers);

        if (response?.data?.status) {
            dispatch({ type: FETCH_ASTRO_PROFILE_SUCCESS, payload: response.data.data });
        } else {
            dispatch({ type: FETCH_ASTRO_PROFILE_FAILURE, payload: "Failed to fetch profile" });
        }
    } catch (error) {
        dispatch({ type: FETCH_ASTRO_PROFILE_FAILURE, payload: error.message });
    }
};
