import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// <----------------- User Login ----------------------->
export const Global_Dashboard = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dashboard`)
        return response
    } catch (error) {
        return error
    }
}

// <------------ Settings ------------------>
export const Global_Settings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/settings`)
        return response
    } catch (error) {
        return error
    }
}

// <------------ home Page Api's --------------->
export const Get_Home_Page = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/web-home`)
        return response
    } catch (error) {
        return error
    }
}
// <------------terms_conditions Api's --------------->
export const Get_Terms_Conditions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/terms-conditions`)
        return response
    } catch (error) {
        return error
    }
}

// <------------terms_conditions Api's --------------->
export const Get_Privacy_Policy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/privacy-policy`)
        return response
    } catch (error) {
        return error
    }
}

// <------------terms_conditions Api's --------------->
export const Get_return_policy = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/return-policy`)
        return response
    } catch (error) {
        return error
    }
}

// <------------terms_conditions Api's --------------->
export const Get_Faqs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/faqs`)
        return response
    } catch (error) {
        return error
    }
}

// <------------terms_conditions Api's --------------->
export const Get_About_us = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/about-us`)
        return response
    } catch (error) {
        return error
    }
}
// <------------subhmuharats Api's --------------->
export const Get_Subhmuharats = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/subhmuharats`)
        return response
    } catch (error) {
        return error
    }
}

// <------------subhmuharats Api's --------------->
export const Get_Subhmuharats_Details = async (orderId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/subhmuharats`, {
            params: { orderId },
        })
        return response
    } catch (error) {
        return error
    }
}


export const Get_Custom_Designs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/costom-design`)
        return response
    } catch (error) {
        return error
    }
}