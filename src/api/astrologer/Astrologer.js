import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// <----------------- User Register ----------------------->
export const Get_Astrologer_List = async (is_live, filters) => {
    const { languages, skills, min_amount, max_amount } = filters;
    try {
        const response = await axios.get(`${API_BASE_URL}/web-astrologers`, {
            params: {
                is_live,
                languages,
                skills,
                min_amount,
                max_amount
            }
        })
        return response
    } catch (error) {
        return error
    }
}

// <----------------- User Register ----------------------->
export const Get_Web_Astrologer_Details = async (is_live, id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-astrologers`, {
            params: {
                is_live,
                id
            }
        })
        return response
    } catch (error) {
        return error
    }
}
// <----------------- User Register ----------------------->
export const Get_Astrologer_Details = async (is_live, id, headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astrologers`, {
            params: {
                is_live,
                id
            }, headers: headers
        })
        return response
    } catch (error) {
        return error
    }
}

// <-------- astro-profile-update ------------>

export const Astrolger_Profile_Update = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/astro-profile-update`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}
export const get_astro_profile = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-profile`, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Pooja List Category ------------>
export const get_pooja_list_category = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/master-data`, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Pooja List Category ------------>
export const Post_Pooja = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/post-pooja`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Pooja List Category ------------>
export const Astologer_Get_Pooja = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-pooja`, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Pooja List Category ------------>
export const Astologer_Delete_Pooja = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/astro-pooja-delete`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}
// <---------- add-follow-astro ------------>
export const Add_follow_Astro = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/add-fav-astro`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Get_follow_Astro ------------>
export const Get_follow_Astro = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/get-fav-astro`, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}
// <---------- Add_Astrologer_Bank_Details ------------>
export const Add_Astrologer_Bank_Details = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/post-astro-bank`, data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Add_Astrologer_Bank_Details ------------>
export const Get_Astrologer_Bank_Details = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-bank-data`, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}


// <---------- Astro Permission Update ------------>
export const Astro_Permission_Update = async (data, headers) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/astro-permission-update`,data, { headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <---------- Astro Permission Update ------------>
export const get_astro_dashboard = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-dashboard`,{ headers: headers })
        return response
    } catch (error) {
        return error
    }
}

// <--------- wallet-detail -------------->
export const get_astro_wallet_history = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-wallet-history`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};
// <--------- wallet-detail -------------->
export const get_astro_wallet_detail = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-wallet-detail`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- language-and-skills -------------->
export const get_language_and_skills = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/language-and-skills`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};

// <--------- astro-call-history -------------->
export const get_astro_call_history = async (headers) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/astro-call-history`, { headers: headers });
        return response;
    } catch (error) {
        console.error("Error fetching order details:", error);
        return error;
    }
};