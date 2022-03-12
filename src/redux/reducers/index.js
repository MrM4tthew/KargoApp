import { combineReducers } from "redux";

import shipments from "redux/actions/shipments";
import truck from "redux/actions/trucks"

export default combineReducers({ shipments, truck })