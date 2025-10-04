import { CToast } from "../../components/common/toast/CToast";
import {
  getMyProfileService,
  removeUserToken,
  setUserToken,
} from "../../services/userService";

export const TOGGLE_AUTH = "TOGGLE_AUTH";
export const GET_MY_PROFILE = "GET_MY_PROFILE";
export const TOGGLE_LOADING = "TOGGLE_LOADING";
export const toggleAuthAction = (data) => {
  return { type: TOGGLE_AUTH };
};

export const toggleLoadingAction = (isSendingRequest) => {
  return { type: TOGGLE_LOADING, payload: { isSendingRequest } };
};
