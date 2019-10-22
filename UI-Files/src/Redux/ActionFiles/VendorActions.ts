import { MenuItem, Order, VendorInfo} from '../InterfaceFiles/types'

/*
* VENDOR ACTION TYPES
*/

export const SIGN_IN_BEGIN = 'SIGN_IN_BEGIN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const FETCH_VENDOR_BEGIN = 'FETCH_VENDOR_BEGIN';
export const FETCH_VENDOR_SUCCESS = 'FETCH_VENDOR_SUCCESS';
export const FETCH_VENDOR_FAILURE = 'FETCH_VENDOR_FAILURE';

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO';
export const UPDATE_MENU = 'UPDATE_MENU';

export const CANCEL_ORDER = 'CANCEL_ORDER';
export const FINISH_ORDER = 'FINISH_ORDER';

/*
* VENDOR ACTION CREATORS
*/

export const signInBegin = () => ({
    type: SIGN_IN_BEGIN
});

export const signInSuccess = (user: String, pass: String) => ({
    type: SIGN_IN_SUCCESS,
    payload: {
        user: user,
        pass: pass
    }
});

export const signInFailure = (error: Error) => ({
    type: SIGN_IN_FAILURE,
    payload: error
});

export const fetchVendorBegin = () => ({
    type: FETCH_VENDOR_BEGIN
});

export const fetchVendorSuccess = (vendor: VendorInfo) => ({
    type: FETCH_VENDOR_SUCCESS,
    payload: vendor
});

export const fetchVendorFailure = (error: Error) => ({
    type: FETCH_VENDOR_FAILURE,
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