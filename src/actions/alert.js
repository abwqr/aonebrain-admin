import { SET_ALERT } from "./types";

export const setAlert = (msg) => (dispatch) => {
    dispatch({
        type: SET_ALERT,
        payload: msg
    });
}