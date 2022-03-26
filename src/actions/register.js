import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const registerSuccess = (userToken) => dispatch => {
    dispatch({
        type: REGISTER_SUCCESS,
        payload: {
            token: userToken,
        }
    })
}

export const registerFail = () => dispatch => {
    dispatch({
        type: REGISTER_FAIL,
        payload: {
            token: null,
        }
    })
}

export const loginSuccess = (userToken) => dispatch => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: {
            token: userToken,
        }
    })
}

export const loginFail = () => dispatch => {
    dispatch({
        type: LOGIN_FAIL,
        payload: {
            token: null,
        }
    })
}