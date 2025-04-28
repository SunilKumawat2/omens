import { UserProfile } from "../../api/auth_api/Auth_Api";
import { FETCH_USER_PROFILE_REQUEST, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAILURE } from "../types";


export const fetchUserProfile = () => async (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_REQUEST }); 
    try {
        const token = localStorage.getItem("user_token"); // Replace with your User_Authentication logic if needed
        if (!token) {
            throw new Error("Token not found");
        }

        const headers = { Authorization: `Bearer ${token}` };
        const response = await UserProfile(headers);

        if (response?.data?.status) {
            dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: response.data.data });
        } else {
            dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: "Failed to fetch profile" });
        }
    } catch (error) {
        dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: error.message });
    }
};
