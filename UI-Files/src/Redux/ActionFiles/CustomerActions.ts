import { MenuItem, CustomerInfo, VendorInfo } from '../InterfaceFiles/types'

/*
* CUSTOMER ACTION TYPES
*/

export const VENDOR_SEARCH_BEGIN = 'VENDOR_SEARCH_BEGIN';
export const VENDOR_SEARCH_SUCCESS = 'VENDOR_SEARCH_SUCCESS';
export const VENDOR_SEARCH_FAILURE = 'VENDOR_SEARCH_FAILURE';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ITEM_TYPE_FROM_CART = 'REMOVE_ITEM_TYPE_FROM_CART';
export const SEND_ORDER = 'SEND_ORDER';

/*
* CUSTOMER ACTION CREATORS
*/

export const vendorSearchBegin = () => ({
    type: VENDOR_SEARCH_BEGIN
});

export const vendorSearchSuccess = (vendors: VendorInfo[]) => ({
    type: VENDOR_SEARCH_SUCCESS,
    payload: vendors
});

export const vendorSearchFailure = (error: Error) => ({
    type: VENDOR_SEARCH_FAILURE,
    error: error
});

export const addToCart = (item: MenuItem) => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = (item: MenuItem) => ({
    type: REMOVE_FROM_CART,
    payload: item
});

export const removeItemTypeFromCart = (item: MenuItem) => ({
    type: REMOVE_ITEM_TYPE_FROM_CART,
    payload: item
});

export const sendOrder = (info: CustomerInfo) => ({
    type: SEND_ORDER,
    payload: info
});