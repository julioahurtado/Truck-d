import { MenuItem, Order, VendorInfo } from '../InterfaceFiles/types'

/*
* VENDOR ACTION TYPES
*/

export const SIGN_IN_BEGIN = 'SIGN_IN_BEGIN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_BEGIN = 'SIGN_UP_BEGIN';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
export const UPDATE_MENU = 'UPDATE_MENU';

export const CANCEL_ORDER = 'CANCEL_ORDER';
export const FINISH_ORDER = 'FINISH_ORDER';

/*
* VENDOR ACTION CREATORS
*/

export const signInBegin = (user: String, pass: String) => ({
    type: SIGN_IN_BEGIN,
    payload: {
        user: user,
        pass: pass
    }
});

export const signInSuccess = (vendor: VendorInfo) => ({
    type: SIGN_IN_SUCCESS,
    payload: vendor
});

export const signInFailure = (error: Error) => ({
    type: SIGN_UP_FAILURE,
    payload: error
});

export const signUpBegin = (email: String, user: String, pass: String) => ({
    type: SIGN_UP_BEGIN,
    payload: {
        email: email,
        user: user,
        pass: pass
    }
});

export const signUpSuccess = (vendor: VendorInfo) => ({
    type: SIGN_UP_SUCCESS,
    payload: vendor
});

export const signUpFailure = (error: Error) => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

export const updateProfileInfo = (item: MenuItem) => ({
    type: UPDATE_PROFILE_INFO,
    payload: item
});

export const updateMenu = (item: MenuItem) => ({
    type: UPDATE_MENU,
    payload: item
});

export const cancelOrder = (order: Order) => ({
    type: CANCEL_ORDER,
    payload: order
});

export const finishOrder = (order: Order) => ({
    type: FINISH_ORDER,
    payload: order
});