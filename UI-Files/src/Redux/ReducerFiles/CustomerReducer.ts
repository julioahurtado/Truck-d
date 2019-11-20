import { combineReducers } from "redux";
import { CustomerSearch, CustomerSearchState } from './CustomerReducers/CustomerSearchReducer';
import { Menu, MenuState } from './CustomerReducers/MenuReducer';

export interface CustomerState {
    search: CustomerSearchState
    menuPage: MenuState
}

export const Customer = combineReducers<CustomerState>({
    search: CustomerSearch,
    menuPage: Menu
});