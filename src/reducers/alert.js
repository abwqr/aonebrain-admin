import { SET_ALERT } from "../actions/types";

const intialState = [];

export default function(state = intialState, action){
    switch(action.type){
        case SET_ALERT:
            return [...state, action.payload]
        
            default:
                return state;
    }
        



}