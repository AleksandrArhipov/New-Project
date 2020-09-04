import { saveStatus } from "../service/saveUserData";
export const LOG_IN = "LOG-IN";
export const LOG_OUT = "LOG-OUT";
export const REGISTRATION = "REGISTRATION";
export const END_SESSION = "END-SESSION";
export const SET_RESPONSE = "SHOW-RESPONSE";

export const registration = (user) => {
  return { type: REGISTRATION, payload: { user: user } };
};

export const logIn = (data) => (dispatch) => {
  dispatch({ type: LOG_IN, payload: { data: data } });
  saveStatus(true, data.token, data.profile.id, data.username);
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  saveStatus(false, null, null, null);
};

export const endSession = (value, reload) => {
  return { type: END_SESSION, payload: { value: value, reload: reload } };
};

export const setResponseMessage = (value, text) => {
  return { type: SET_RESPONSE, payload: { value: value, text: text } };
};
