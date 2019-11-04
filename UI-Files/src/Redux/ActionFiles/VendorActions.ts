import { MenuItem, Order, VendorInfo } from '../InterfaceFiles/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { _POST } from '../../REST/restapiutil';

/*
* VENDOR ACTION TYPES
*/

export enum LOGIN_STATUS {
    BEGIN = 'LOGIN_BEGIN',
    SUCCESS = 'LOGIN_SUCCESS',
    FAILURE = 'LOGIN_FAILURE'
}

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
export const UPDATE_MENU = 'UPDATE_MENU';

export const CANCEL_ORDER = 'CANCEL_ORDER';
export const FINISH_ORDER = 'FINISH_ORDER';

/*
* VENDOR ACTION INTERFACES
*/

// TODO: Move types and action interfaces to /InterfaceFiles
export type LoginTypes = LOGIN_STATUS.BEGIN | LOGIN_STATUS.SUCCESS | LOGIN_STATUS.FAILURE
export type LoginThunkAction = ThunkAction<void, {}, {}, LoginAction>
export type LoginThunkDispatch = ThunkDispatch<{}, {}, LoginAction>

// TODO: Merge error prop with payload prop
export interface LoginAction {
    type: LoginTypes,
    payload?: VendorInfo
    error?: Error
}

export interface UpdateProfileInfoAction {
    type: typeof UPDATE_PROFILE_INFO,
    payload: MenuItem
}

export interface UpdateMenuAction {
    type: typeof UPDATE_MENU,
    payload: MenuItem
}

export interface CancelOrderAction {
    type: typeof CANCEL_ORDER,
    payload: Order
}

export interface FinishOrderAction {
    type: typeof FINISH_ORDER,
    payload: Order
}

/*
* VENDOR ACTION CREATORS
*/

export const signInBegin = (): LoginAction => ({
    type: LOGIN_STATUS.BEGIN
});

export const signInSuccess = (vendor: VendorInfo): LoginAction => ({
    type: LOGIN_STATUS.SUCCESS,
    payload: vendor
});

export const signInFailure = (error: Error): LoginAction => ({
    type: LOGIN_STATUS.FAILURE,
    error: error
});

export const signUpBegin = (): LoginAction => ({
    type: LOGIN_STATUS.BEGIN
});

export const signUpSuccess = (vendor: VendorInfo): LoginAction => ({
    type: LOGIN_STATUS.SUCCESS,
    payload: vendor
});

export const signUpFailure = (error: Error): LoginAction => ({
    type: LOGIN_STATUS.FAILURE,
    error: error
});

export const updateProfileInfo = (item: MenuItem): UpdateProfileInfoAction  => ({
    type: UPDATE_PROFILE_INFO,
    payload: item
});

export const updateMenu = (item: MenuItem): UpdateMenuAction => ({
    type: UPDATE_MENU,
    payload: item
});

export const cancelOrder = (order: Order): CancelOrderAction => ({
    type: CANCEL_ORDER,
    payload: order
});

export const finishOrder = (order: Order): FinishOrderAction => ({
    type: FINISH_ORDER,
    payload: order
});

/*
* THUNK ASYNC REQUESTS
*/

const signIn = async (email: String, pass: String): Promise<VendorInfo> => {
    const user = { email, password: pass };
    const vendor = await _POST('http://localhost:5000/authenticatevendor', JSON.stringify(user))
    return JSON.parse(vendor)
};

const signUp = async (email: String, pass: String): Promise<VendorInfo> => {
    const user = { email, password: pass };
    const vendor = await _POST('http://localhost:5000/createVendorAccount', JSON.stringify(user))
    return JSON.parse(vendor)
}

// attempt vendor sign-in
export const vendorSignIn = (email: String, pass: String): LoginThunkAction => {
    return (dispatch: LoginThunkDispatch) => {
        dispatch(signInBegin());
        signIn(email, pass).then((vendor: VendorInfo) => {
            dispatch(signInSuccess(vendor))
        }).catch((error: Error) => {
            dispatch(signInFailure(error))
        })
    }
}

// attempt vendor sign-up
export const vendorSignUp = (email: String, pass: String): LoginThunkAction => {
    return (dispatch: LoginThunkDispatch) => {
        dispatch(signUpBegin());
        signUp(email, pass).then((vendor: VendorInfo) => {
            dispatch(signUpSuccess(vendor))
        }).catch((error: Error) => {
            dispatch(signUpFailure(error))
        })
    }
}