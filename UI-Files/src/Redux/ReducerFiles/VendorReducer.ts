import { combineReducers } from "redux";
import { Login, LoginState } from './VendorReducers/LoginReducer';
import { Profile, ProfileState } from './VendorReducers/ProfileReducer';
import { Orders, OrdersState } from './VendorReducers/OrdersReducer';

export interface VendorState {
    login: LoginState
    profile: ProfileState
    queue: OrdersState
}

export const Vendor = combineReducers<VendorState>({
    login: Login,
    profile: Profile,
    queue: Orders
})