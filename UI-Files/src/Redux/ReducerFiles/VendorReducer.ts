import { combineReducers } from "redux";
import { Login, LoginState } from './VendorReducers/LoginReducer';
import { Profile, ProfileState } from './VendorReducers/ProfileReducer';

export interface VendorState {
    login: LoginState,
    profile: ProfileState
}

export const Vendor = combineReducers<VendorState>({
    login: Login,
    profile: Profile
})