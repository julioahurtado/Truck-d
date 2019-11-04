import { combineReducers } from "redux";
import { CustomerSearch } from './CustomerReducers/CustomerSearchReducer';

export const Customer = combineReducers({
    search: CustomerSearch
});