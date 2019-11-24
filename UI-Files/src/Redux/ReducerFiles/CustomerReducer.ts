import { combineReducers } from "redux";
import { Search, SearchState } from './CustomerReducers/SearchReducer';
import { Checkout, CheckoutState } from './CustomerReducers/CheckoutReducer';
import { Vendor, VendorState } from './CustomerReducers/VendorReducer';
import { Menu, MenuState } from './CustomerReducers/MenuReducer';
import { Cart, CartState } from './CustomerReducers/CartReducer';


export interface CustomerState {
    search: SearchState
    checkout: CheckoutState
    vendor: VendorState
    menu: MenuState
    cart: CartState
    
}

export const Customer = combineReducers<CustomerState>({
    search: Search,
    checkout: Checkout,
    vendor: Vendor,
    menu: Menu,
    cart: Cart
});