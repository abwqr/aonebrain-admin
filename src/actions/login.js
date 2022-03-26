import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const setLogin = (token) => (dispatch) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            token
        }
    });
}