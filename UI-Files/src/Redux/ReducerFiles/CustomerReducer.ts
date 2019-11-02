import { combineReducers } from "redux";
import { CustomerSearch, CustomerSearchState } from './CustomerReducers/CustomerSearchReducer';

export interface CustomerState {
    search: CustomerSearchState
}

export const Customer = combineReducers<CustomerState>({
    search: CustomerSearch
});