import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null
};

export default function(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("token", payload.token)
            
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
            }
        
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            localStorage.removeItem("token")
            return {
                ...state,
                ...payload,
                isAuthenticated: false,
            }
            
            default:
                return state;  
    }
}