import axios from "axios";
import { API_BASE_URL } from "../../config/Config";

// <----------------- User Register ----------------------->
export const UserRegister = async (User_register_data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/register`,
      User_register_data
    );
    return response;
  } catch (error) {
    return error;
  }
};

// <----------------- User Register ----------------------->
export const User_Otp_Verify = async (User_Otp_Verify_data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/match-otp`,
      User_Otp_Verify_data
    );
    return response;
  } catch (error) {
    return error;
  }
};

// <----------------- User Login ----------------------->
export const UserLogin = async (User_login_data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, User_login_data);
    return response;
  } catch (error) {
    return error;
  }
};

// <----------------- User Login ----------------------->
export const UserProfile = async (header) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user-profile`, {
      headers: header,
    });
    return response;
  } catch (error) {
    return error;
  }
};

// <----------------- User Login ----------------------->
export const UserProfileUpdate = async (data, header) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/profile-update`, data, {
      headers: header,
    });
    return response;
  } catch (error) {
    return error;
  }
};

// <----------- User & Astro Logout ------------- >
export const logout = async (header) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/logout`, {
      headers: header,
    });
    return response;
  } catch (error) {
    return error;
  }
};
