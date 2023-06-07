//rootReducer //combineReducers

import { combineReducers } from "redux";
import {cartData,logedinUser} from "./Reducer";


export default combineReducers({
    logedinUser,cartData
})