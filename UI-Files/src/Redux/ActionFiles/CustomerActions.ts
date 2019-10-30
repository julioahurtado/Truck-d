import { MenuItem, CustomerInfo, VendorInfo } from '../InterfaceFiles/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

/*
* CUSTOMER ACTION TYPES
*/
export enum VENDOR_SEARCH_STATUS {
    BEGIN = 'VENDOR_SEARCH_BEGIN',
    SUCCESS = 'VENDOR_SEARCH_SUCCESS',
    FAILURE = 'VENDOR_SEARCH_FAILURE'
}

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ITEM_TYPE_FROM_CART = 'REMOVE_ITEM_TYPE_FROM_CART';
export const SEND_ORDER = 'SEND_ORDER';

/*
* CUSTOMER ACTION INTERFACES
*/

export type VendorSearchTypes = VENDOR_SEARCH_STATUS.BEGIN | VENDOR_SEARCH_STATUS.SUCCESS | VENDOR_SEARCH_STATUS.FAILURE;

export interface VendorSearchAction {
    type: VendorSearchTypes
    payload?: VendorInfo[]
    error?: Error
};

export interface AddToCartAction {
    type: typeof ADD_TO_CART
    payload: MenuItem
};

export interface RemoveFromCartAction {
    type: typeof REMOVE_FROM_CART
    payload: MenuItem
};

export interface RemoveItemTypeFromCartAction {
    type: typeof REMOVE_ITEM_TYPE_FROM_CART
    payload: MenuItem
};

export interface SendOrderAction {
    type: typeof SEND_ORDER
    payload: CustomerInfo
};

/*
* CUSTOMER ACTION CREATORS
*/

export const vendorSearchBegin = (): VendorSearchAction => ({
    type: VENDOR_SEARCH_STATUS.BEGIN
});

export const vendorSearchSuccess = (vendors: VendorInfo[]): VendorSearchAction => ({
    type: VENDOR_SEARCH_STATUS.SUCCESS,
    payload: vendors
});

export const vendorSearchFailure = (error: Error): VendorSearchAction => ({
    type: VENDOR_SEARCH_STATUS.FAILURE,
    error: error
});

export const addToCart = (item: MenuItem): AddToCartAction => ({
    type: ADD_TO_CART,
    payload: item
});

export const removeFromCart = (item: MenuItem): RemoveFromCartAction => ({
    type: REMOVE_FROM_CART,
    payload: item
});

export const removeItemTypeFromCart = (item: MenuItem): RemoveItemTypeFromCartAction => ({
    type: REMOVE_ITEM_TYPE_FROM_CART,
    payload: item
});

export const sendOrder = (info: CustomerInfo): SendOrderAction => ({
    type: SEND_ORDER,
    payload: info
});

/*
* THUNK ASYNC REQUESTS
*/

let test_vendors: VendorInfo[] = [{
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
}];

const fetch_vendors = async (query: String): Promise<VendorInfo[]> => {
    return test_vendors
}

// retrieves vendor-list based on user search-string
export const fetchVendors = (query: String): ThunkAction<void, {}, {}, VendorSearchAction> => {
    return (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        dispatch(vendorSearchBegin());
        fetch_vendors(query).then((vendors: VendorInfo[]) => {
            dispatch(vendorSearchSuccess(vendors))
        }).catch((error: Error) => {
            dispatch(vendorSearchFailure(error))
        })
    }
}