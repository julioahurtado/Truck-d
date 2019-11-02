import { MenuItem, Order, VendorInfo } from '../InterfaceFiles/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
type LoginThunkAction = ThunkAction<void, {}, {}, LoginAction>
export type LoginTypes = LOGIN_STATUS.BEGIN | LOGIN_STATUS.SUCCESS | LOGIN_STATUS.FAILURE

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

let vendor: VendorInfo = {
    name: "Test",
    description: "Description for test vendor",
    phone: 1234567890,
    city: "City",
    state: "State",
    address: "Address",
    menu: [{
        name: "food item",
        description: "food description",
        price: 1
    }]
};

const signIn = async (user: String, pass: String): Promise<VendorInfo> => {
    return vendor
};

const signUp = async (emai: String, pass: String): Promise<VendorInfo> => {
    return vendor
}

// attempt vendor sign-in
export const vendorSignIn = (user: String, pass: String): LoginThunkAction => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(signInBegin());
        signIn(user, pass).then((vendor: VendorInfo) => {
            dispatch(signInSuccess(vendor))
        }).catch((error: Error) => {
            dispatch(signInFailure(error))
        })
    }
}

// attempt vendor sign-up
export const vendorSignUp = (email: String, pass: String): LoginThunkAction => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(signUpBegin());
        signUp(email, pass).then((vendor: VendorInfo) => {
            dispatch(signUpSuccess(vendor))
        }).catch((error: Error) => {
            dispatch(signUpFailure(error))
        })
    }
}