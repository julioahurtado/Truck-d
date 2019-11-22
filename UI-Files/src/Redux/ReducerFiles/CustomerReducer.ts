import { combineReducers } from "redux";
import { CustomerSearch, CustomerSearchState } from './CustomerReducers/CustomerSearchReducer';
import { Menu, MenuState } from './CustomerReducers/MenuReducer';
import { Checkout, CheckoutState } from './CustomerReducers/CheckoutReducer';

export interface CustomerState {
    search: CustomerSearchState
    menuPage: MenuState
    checkout: CheckoutState
}

export const Customer = combineReducers<CustomerState>({
    search: CustomerSearch,
    menuPage: Menu,
    checkout: Checkout
});