import { combineReducers } from "redux";
import alert from "./alert";
import login from "./login";
import register from "./register";
export default combineReducers({
    alert,
    login,
    register
    
})