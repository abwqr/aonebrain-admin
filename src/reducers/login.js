import { SET_CREDENTIALS_LOGIN } from "../actions/types";

const intialState = [];

export default function(state = intialState, action){
    switch(action.type){
        case SET_CREDENTIALS_LOGIN:
            return [...state, action.payload]
        
            default:
                return state;
    }
        



}