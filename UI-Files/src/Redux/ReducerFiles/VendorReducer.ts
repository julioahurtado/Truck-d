import { combineReducers } from "redux";
import { Login, LoginState } from './VendorReducers/LoginReducer';

export interface VendorState {
    login: LoginState
}

export const Vendor = combineReducers<VendorState>({
    login: Login
})