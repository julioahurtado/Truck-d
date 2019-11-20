import { MenuItem, CustomerInfo, VendorInfo, OrderItem, Order, CartInfo } from '../InterfaceFiles/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import _GET, { _POST } from '../../REST/restapiutil';

/*
* CUSTOMER ACTION TYPES
*/

export enum CUSTOMER_SEARCH_STATUS {
    BEGIN = 'CUSTOMER_SEARCH_BEGIN',
    SUCCESS = 'CUSTOMER_SEARCH_SUCCESS',
    FAILURE = 'CUSTOMER_SEARCH_FAILURE'
}

export enum GET_MENU_STATUS {
    BEGIN = 'GET_MENU_BEGIN',
    SUCCESS = 'GET_MENU_SUCCESS',
    FAILURE = 'GET_MENU_FAILURE'
}

// possibly use to update menu state with selected vendor
export const UPDATE_MENU_WITH_VENDOR = 'UPDATE_MENU_WITH_VENDOR';

export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const CHECKOUT_ORDER = 'CHECKOUT_ORDER';

export enum SEND_ORDER_STATUS {
    BEGIN = 'SEND_ORDER_BEGIN',
    SUCCESS = 'SEND_ORDER_SUCCESS',
    FAILURE = 'SEND_ORDER_FAILURE'
}

/*
* CUSTOMER ACTION INTERFACES
*/

export type CustomerSearchTypes = CUSTOMER_SEARCH_STATUS.BEGIN | CUSTOMER_SEARCH_STATUS.SUCCESS | CUSTOMER_SEARCH_STATUS.FAILURE;
export type SearchThunkAction = ThunkAction<void, {}, {}, CustomerSearchAction>;
export type SearchThunkDispatch = ThunkDispatch<{}, {}, CustomerSearchAction>;

export type GetMenuTypes = GET_MENU_STATUS.BEGIN | GET_MENU_STATUS.SUCCESS | GET_MENU_STATUS.FAILURE
export type GetMenuThunkAction = ThunkAction<void, {}, {}, GetMenuAction>
export type GetMenuThunkDispatch = ThunkDispatch<{}, {}, GetMenuAction>

export interface CustomerSearchAction {
    type: CustomerSearchTypes
    payload?: VendorInfo[]
    error?: Error
};

export interface GetMenuAction {
    type: GetMenuTypes,
    payload?: MenuItem[]
    error?: Error
}

export interface UpdateMenuWithVendorAction {
    type: typeof UPDATE_MENU_WITH_VENDOR,
    payload?: VendorInfo,
}

export interface AddItemToCartAction {
    type: typeof ADD_ITEM_TO_CART,
    payload: MenuItem
};

export interface RemoveItemFromCartAction {
    type: typeof REMOVE_ITEM_FROM_CART,
    payload: MenuItem
};

export interface CheckoutOrderAction {
    type: typeof CHECKOUT_ORDER,
    payload: CartInfo
}

export interface SendOrderAction {
    type: SEND_ORDER_STATUS,
    payload?: CustomerInfo,
    error?: Error
};

/*
* CUSTOMER ACTION CREATORS
*/

export const customerSearchBegin = (): CustomerSearchAction => ({
    type: CUSTOMER_SEARCH_STATUS.BEGIN
});

export const customerSearchSuccess = (vendors: VendorInfo[]): CustomerSearchAction => ({
    type: CUSTOMER_SEARCH_STATUS.SUCCESS,
    payload: vendors
});

export const customerSearchFailure = (error: Error): CustomerSearchAction => ({
    type: CUSTOMER_SEARCH_STATUS.FAILURE,
    error: error
});

export const getMenuBegin = (): GetMenuAction => ({
    type: GET_MENU_STATUS.BEGIN,
});

export const getMenuSuccess = (menu: MenuItem[]): GetMenuAction => ({
    type: GET_MENU_STATUS.SUCCESS,
    payload: menu
});

export const getMenuFailure = (error: Error): GetMenuAction => ({
    type: GET_MENU_STATUS.FAILURE,
    error: error
});

export const updateMenuWithVendor = (vendor: VendorInfo): UpdateMenuWithVendorAction => ({
    type: UPDATE_MENU_WITH_VENDOR,
    payload: vendor
})

export const addItemToCart = (item: MenuItem): AddItemToCartAction => ({
    type: ADD_ITEM_TO_CART,
    payload: item
});

export const removeItemFromCart = (item: MenuItem): RemoveItemFromCartAction => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: item
});

export const checkoutOrder = (cart: CartInfo): CheckoutOrderAction => ({
    type: CHECKOUT_ORDER,
    payload: cart
})

// export const sendOrderBegin = (info: Order): SendOrderAction => ({
//     type: SEND_ORDER_STATUS.BEGIN,
//     payload: info
// });

/*
* THUNK ASYNC REQUESTS
*/

const fetch_vendors = async (query: String): Promise<VendorInfo[]> => {
    const search_query = { name: "", address: "", city: query, state: "" };
    const vendors = await _POST('http://localhost:5000/search', search_query)
    return JSON.parse(vendors)
}

const fetch_menu = async (id: Number): Promise<MenuItem[]> => {
    const menu_query = { id };
    const menu = await _POST('http://localhost:5000/menu', menu_query)
    console.log(JSON.parse(menu))
    return JSON.parse(menu)
}

// retrieves vendor-list based on user search-string
export const fetchVendors = (query: String): SearchThunkAction => {
    return (dispatch: SearchThunkDispatch) => {
        dispatch(customerSearchBegin());
        fetch_vendors(query).then((vendors: VendorInfo[]) => {
            dispatch(customerSearchSuccess(vendors))
        }).catch((error: Error) => {
            dispatch(customerSearchFailure(error))
        })
    }
}

// retrieves menu for specified vendor
export const fetchMenu = (id: Number): GetMenuThunkAction => {
    return (dispatch: GetMenuThunkDispatch) => {
        dispatch(getMenuBegin())
        fetch_menu(id).then((menu: MenuItem[]) => {
            dispatch(getMenuSuccess(menu))
        }).catch((error: Error) => {
            dispatch(getMenuFailure(error))
        })
    }
}