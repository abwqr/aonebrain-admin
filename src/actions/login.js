import { SET_CREDENTIALS_LOGIN } from "./types";

export const setLogin = (username, password) => (dispatch) => {
    dispatch({
        type: SET_CREDENTIALS_LOGIN,
        payload: {
            username,
            password
        }
    });
}