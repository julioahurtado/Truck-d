import { combineReducers } from "redux";
import { CustomerSearch, CustomerSearchState } from './CustomerReducers/CustomerSearchReducer';
import { MenuPage, MenuPageState } from './CustomerReducers/MenuReducer';

export interface CustomerState {
    search: CustomerSearchState
    menuPage: MenuPageState
}

export const Customer = combineReducers<CustomerState>({
    search: CustomerSearch,
    menuPage: MenuPage
});