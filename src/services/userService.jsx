import { API_BASE_URL } from "../config";
import { http } from "./httpService";

const apiEndpoint = API_BASE_URL + "/users";

export const tokenKey = "reem_token";

export const getUserToken = () => {
  return localStorage.getItem(tokenKey);
};

export const setUserToken = (api_token) => {
  return localStorage.setItem(tokenKey, api_token);
};

export const removeUserToken = () => {
  return localStorage.removeItem(tokenKey);
};

export const loginService = (data) => {
  return http.post(apiEndpoint + "/login", {}, { params: data });
};

export const registerService = (data) => {
  return http.get(apiEndpoint + "/register", { params: data });
};

export const getMyProfileService = () => {
  return http.get(apiEndpoint + "/getProfile", {
    params: { api_token: getUserToken() },
  });
};

export const getAllUsersService = () => {
  return http.get(apiEndpoint + "/all");
};

export const handleGetLinkService = (email) => {
  console.log(email);
  return http.post(apiEndpoint + "/check_email", { email });
};
export const changePassService = (password) => {
  return http.post(apiEndpoint + "/change-password", { password });
};
