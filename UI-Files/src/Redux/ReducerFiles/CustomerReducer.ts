import { combineReducers } from "redux";
import { CustomerSearch, CustomerSearchState } from './CustomerReducers/CustomerSearchReducer';
import { Menu, MenuState } from './CustomerReducers/MenuReducer';

export interface CustomerState {
    search: CustomerSearchState
    menu: MenuState
}

export const Customer = combineReducers<CustomerState>({
    search: CustomerSearch,
    menu: Menu
});