import { MenuItem, VendorInfo, Order } from "../InterfaceFiles/types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { _GET, _POST } from "../../REST/restapiutil";

/*
 * CUSTOMER ACTION TYPES
 */

export enum SEARCH_STATUS {
  BEGIN = "CUSTOMER_SEARCH_BEGIN",
  SUCCESS = "CUSTOMER_SEARCH_SUCCESS",
  FAILURE = "CUSTOMER_SEARCH_FAILURE"
}

export enum GET_MENU_STATUS {
  BEGIN = "GET_MENU_BEGIN",
  SUCCESS = "GET_MENU_SUCCESS",
  FAILURE = "GET_MENU_FAILURE"
}

export enum SEND_ORDER_STATUS {
  BEGIN = "SEND_ORDER_BEGIN",
  SUCCESS = "SEND_ORDER_SUCCESS",
  FAILURE = "SEND_ORDER_FAILURE"
}

export const UPDATE_VENDOR = "UPDATE_VENDOR";
export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const REMOVE_ITEM_TYPE_FROM_CART = "REMOVE_ITEM_TYPE_FROM_CART";

export const UPDATE_CUSTOMER_NAME = "UPDATE_CUSTOMER_NAME";
export const UPDATE_CUSTOMER_EMAIL = "UPDATE_CUSTOMER_EMAIL";
export const UPDATE_CUSTOMER_PHONE = "UPDATE_CUSTOMER_PHONE";

/*
 * CUSTOMER ACTION INTERFACES
 */

export type SearchTypes =
  | SEARCH_STATUS.BEGIN
  | SEARCH_STATUS.SUCCESS
  | SEARCH_STATUS.FAILURE;
export type SearchThunkAction = ThunkAction<void, {}, {}, SearchAction>;
export type SearchThunkDispatch = ThunkDispatch<{}, {}, SearchAction>;

export type GetMenuTypes =
  | GET_MENU_STATUS.BEGIN
  | GET_MENU_STATUS.SUCCESS
  | GET_MENU_STATUS.FAILURE;
export type GetMenuThunkAction = ThunkAction<void, {}, {}, GetMenuAction>;
export type GetMenuThunkDispatch = ThunkDispatch<{}, {}, GetMenuAction>;

export type SendOrderTypes =
  | SEND_ORDER_STATUS.BEGIN
  | SEND_ORDER_STATUS.SUCCESS
  | SEND_ORDER_STATUS.FAILURE;
export type SendOrderThunkAction = ThunkAction<void, {}, {}, SendOrderAction>;
export type SendOrderThunkDispatch = ThunkDispatch<{}, {}, SendOrderAction>;

export interface SearchAction {
  type: SearchTypes;
  payload?: VendorInfo[];
  error?: Error;
}

export interface GetMenuAction {
  type: GetMenuTypes;
  payload?: MenuItem[];
  error?: Error;
}

export interface UpdateVendorAction {
  type: typeof UPDATE_VENDOR;
  payload: VendorInfo;
}

export interface AddItemToCartAction {
  type: typeof ADD_ITEM_TO_CART;
  payload: MenuItem;
}

export interface RemoveItemFromCartAction {
  type: typeof REMOVE_ITEM_FROM_CART;
  payload: MenuItem;
}

export interface RemoveItemTypeFromCartAction {
  type: typeof REMOVE_ITEM_TYPE_FROM_CART;
  payload: MenuItem;
}

export interface SendOrderAction {
  type: SEND_ORDER_STATUS;
  payload?: number;
  error?: Error;
}

export interface UpdateCustomerDetailAction {
  type:
    | typeof UPDATE_CUSTOMER_NAME
    | typeof UPDATE_CUSTOMER_EMAIL
    | typeof UPDATE_CUSTOMER_PHONE;
  payload: string;
}

/*
 * CUSTOMER ACTION CREATORS
 */

export const searchBegin = (): SearchAction => ({
  type: SEARCH_STATUS.BEGIN
});

export const searchSuccess = (vendors: VendorInfo[]): SearchAction => ({
  type: SEARCH_STATUS.SUCCESS,
  payload: vendors
});

export const searchFailure = (error: Error): SearchAction => ({
  type: SEARCH_STATUS.FAILURE,
  error: error
});

export const getMenuBegin = (): GetMenuAction => ({
  type: GET_MENU_STATUS.BEGIN
});

export const getMenuSuccess = (menu: MenuItem[]): GetMenuAction => ({
  type: GET_MENU_STATUS.SUCCESS,
  payload: menu
});

export const getMenuFailure = (error: Error): GetMenuAction => ({
  type: GET_MENU_STATUS.FAILURE,
  error: error
});

export const updateVendor = (vendor: VendorInfo): UpdateVendorAction => ({
  type: UPDATE_VENDOR,
  payload: vendor
});

export const addItemToCart = (item: MenuItem): AddItemToCartAction => ({
  type: ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemFromCart = (
  item: MenuItem
): RemoveItemFromCartAction => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: item
});

export const removeItemTypeFromCart = (
  item: MenuItem
): RemoveItemTypeFromCartAction => ({
  type: REMOVE_ITEM_TYPE_FROM_CART,
  payload: item
});

export const sendOrderBegin = (): SendOrderAction => ({
  type: SEND_ORDER_STATUS.BEGIN
});

export const sendOrderSuccess = (orderNumber: number): SendOrderAction => ({
  type: SEND_ORDER_STATUS.SUCCESS,
  payload: orderNumber
});

export const sendOrderFailure = (error: Error): SendOrderAction => ({
  type: SEND_ORDER_STATUS.FAILURE,
  error: error
});

export const updateCustomerName = (
  name: string
): UpdateCustomerDetailAction => ({
  type: UPDATE_CUSTOMER_NAME,
  payload: name
});

export const updateCustomerEmail = (
  email: string
): UpdateCustomerDetailAction => ({
  type: UPDATE_CUSTOMER_EMAIL,
  payload: email
});

export const updateCustomerPhone = (
  phone: string
): UpdateCustomerDetailAction => ({
  type: UPDATE_CUSTOMER_PHONE,
  payload: phone
});

/*
 * THUNK ASYNC REQUESTS
 */

const fetch_vendors = async (query: String): Promise<VendorInfo[]> => {
  const search_query = {
    name: query,
    address: query,
    city: query,
    state: query
  };
  const resp = await _POST("http://localhost:5000/search", search_query);
  return new Promise<VendorInfo[]>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else reject(new Error("Error sending order"));
  });
};

const fetch_menu = async (id: Number): Promise<MenuItem[]> => {
  const menu_query = { id };
  const resp = await _POST("http://localhost:5000/menu", menu_query);
  return new Promise<MenuItem[]>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else reject(new Error("Error fetching menu"));
  });
};

const send_order = async (order: Order): Promise<number> => {
  const resp = await _POST("http://localhost:5000/addOrder", order);
  return new Promise<number>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(resp.response);
    } else reject(new Error("Error sending order"));
  });
};

// retrieves vendor-list based on user search-string
export const fetchVendors = (query: String): SearchThunkAction => {
  return (dispatch: SearchThunkDispatch) => {
    dispatch(searchBegin());
    fetch_vendors(query)
      .then((vendors: VendorInfo[]) => {
        dispatch(searchSuccess(vendors));
      })
      .catch((error: Error) => {
        dispatch(searchFailure(error));
      });
  };
};

// retrieves menu for specified vendor
export const fetchMenu = (id: Number): GetMenuThunkAction => {
  return (dispatch: GetMenuThunkDispatch) => {
    dispatch(getMenuBegin());
    fetch_menu(id)
      .then((menu: MenuItem[]) => {
        dispatch(getMenuSuccess(menu));
      })
      .catch((error: Error) => {
        dispatch(getMenuFailure(error));
      });
  };
};

// sends order to be fulfilled by vendor
export const sendOrder = (order: Order): SendOrderThunkAction => {
  return (dispatch: SendOrderThunkDispatch) => {
    dispatch(sendOrderBegin());
    send_order(order)
      .then((orderNumber: number) => {
        dispatch(sendOrderSuccess(orderNumber));
      })
      .catch((error: Error) => {
        dispatch(sendOrderFailure(error));
      });
  };
};
