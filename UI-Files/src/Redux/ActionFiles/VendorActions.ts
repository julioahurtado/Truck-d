import { MenuItem, Order, VendorInfo } from "../InterfaceFiles/types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { _POST } from "../../REST/restapiutil";
import { reject } from "q";

/*
 * VENDOR ACTION TYPES
 */

export enum LOGIN_STATUS {
  BEGIN = "LOGIN_BEGIN",
  SUCCESS = "LOGIN_SUCCESS",
  FAILURE = "LOGIN_FAILURE"
}

export enum UPDATE_PROFILE_STATUS {
  BEGIN = "UPDATE_PROFILE_BEGIN",
  SUCCESS = "UPDATE_PROFILE_SUCCESS",
  FAILURE = "UPDATE_PROFILE_FAILURE"
}

export enum GET_VENDOR_MENU_STATUS {
  BEGIN = "GET_VENDOR_MENU_BEGIN",
  SUCCESS = "GET_VENDOR_MENU_SUCCESS",
  FAILURE = "GET_VENDOR_MENU_FAILURE"
}

export enum ADD_MENU_ITEM_STATUS {
  BEGIN = "ADD_MENU_ITEM_BEGIN",
  SUCCESS = "ADD_MENU_ITEM_SUCCESS",
  FAILURE = "ADD_MENU_ITEM_FAILURE"
}

export enum DELETE_MENU_ITEM_STATUS {
  BEGIN = "DELETE_MENU_ITEM_BEGIN",
  SUCCESS = "DELETE_MENU_ITEM_SUCCESS",
  FAILURE = "DELETE_MENU_ITEM_FAILURE"
}

export enum EDIT_MENU_ITEM_STATUS {
  BEGIN = "EDIT_MENU_ITEM_BEGIN",
  SUCCESS = "EDIT_MENU_ITEM_SUCCESS",
  FAILURE = "EDIT_MENU_ITEM_FAILURE"
}

export enum CANCEL_ORDER_STATUS {
  BEGIN = "CANCEL_ORDER_BEGIN",
  SUCCESS = "CANCEL_ORDER_SUCCESS",
  FAILURE = "CANCEL_ORDER_FAILURE"
}

export enum FINISH_ORDER_STATUS {
  BEGIN = "FINISH_ORDER_BEGIN",
  SUCCESS = "FINISH_ORDER_SUCCESS",
  FAILURE = "FINISH_ORDER_FAILURE"
}

export enum FETCH_ORDERS_STATUS {
  BEGIN = "FETCH_ORDERS_BEGIN",
  SUCCESS = "FETCH_ORDERS_SUCCESS",
  FAILURE = "FETCH_ORDERS_FAILURE"
}

export const OPEN_ADD_MODAL = "OPEN_ADD_MODAL";
export const CLOSE_ADD_MODAL = "CLOSE_ADD_MODAL";

export const OPEN_EDIT_MODAL = "OPEN_EDIT_MODAL";
export const CLOSE_EDIT_MODAL = "CLOSE_EDIT_MODAL";

/*
 * VENDOR ACTION INTERFACES
 */

export type LoginTypes =
  | LOGIN_STATUS.BEGIN
  | LOGIN_STATUS.SUCCESS
  | LOGIN_STATUS.FAILURE;
export type LoginThunkAction = ThunkAction<void, {}, {}, LoginAction>;
export type LoginThunkDispatch = ThunkDispatch<{}, {}, LoginAction>;

export type GetVendorMenuTypes =
  | GET_VENDOR_MENU_STATUS.BEGIN
  | GET_VENDOR_MENU_STATUS.SUCCESS
  | GET_VENDOR_MENU_STATUS.FAILURE;
export type GetVendorMenuThunkAction = ThunkAction<
  void,
  {},
  {},
  GetVendorMenuAction
>;
export type GetVendorMenuThunkDispatch = ThunkDispatch<
  {},
  {},
  GetVendorMenuAction
>;

export type UpdateProfileTypes =
  | UPDATE_PROFILE_STATUS.BEGIN
  | UPDATE_PROFILE_STATUS.SUCCESS
  | UPDATE_PROFILE_STATUS.FAILURE;
export type UpdateProfileThunkAction = ThunkAction<
  void,
  {},
  {},
  UpdateProfileAction
>;
export type UpdateProfileThunkDispatch = ThunkDispatch<
  {},
  {},
  UpdateProfileAction
>;

export type AddMenuItemTypes =
  | ADD_MENU_ITEM_STATUS.BEGIN
  | ADD_MENU_ITEM_STATUS.SUCCESS
  | ADD_MENU_ITEM_STATUS.FAILURE;
export type AddMenuItemThunkAction = ThunkAction<
  void,
  {},
  {},
  AddMenuItemAction
>;
export type AddMenuItemThunkDispatch = ThunkDispatch<{}, {}, AddMenuItemAction>;

export type DeleteMenuItemTypes =
  | DELETE_MENU_ITEM_STATUS.BEGIN
  | DELETE_MENU_ITEM_STATUS.SUCCESS
  | DELETE_MENU_ITEM_STATUS.FAILURE;
export type DeleteMenuItemThunkAction = ThunkAction<
  void,
  {},
  {},
  DeleteMenuItemAction
>;
export type DeleteMenuItemThunkDispatch = ThunkDispatch<
  {},
  {},
  DeleteMenuItemAction
>;

export type EditMenuItemTypes =
  | EDIT_MENU_ITEM_STATUS.BEGIN
  | EDIT_MENU_ITEM_STATUS.SUCCESS
  | EDIT_MENU_ITEM_STATUS.FAILURE;
export type EditMenuItemThunkAction = ThunkAction<
  void,
  {},
  {},
  EditMenuItemAction
>;
export type EditMenuItemThunkDispatch = ThunkDispatch<
  {},
  {},
  EditMenuItemAction
>;

export type CancelOrderTypes =
  | CANCEL_ORDER_STATUS.BEGIN
  | CANCEL_ORDER_STATUS.SUCCESS
  | CANCEL_ORDER_STATUS.FAILURE;
export type CancelOrderThunkAction = ThunkAction<
  void,
  {},
  {},
  CancelOrderAction
>;
export type CancelOrderThunkDispatch = ThunkDispatch<{}, {}, CancelOrderAction>;

export type FinishOrderTypes =
  | FINISH_ORDER_STATUS.BEGIN
  | FINISH_ORDER_STATUS.SUCCESS
  | FINISH_ORDER_STATUS.FAILURE;
export type FinishOrderThunkAction = ThunkAction<
  void,
  {},
  {},
  FinishOrderAction
>;
export type FinishOrderThunkDispatch = ThunkDispatch<{}, {}, FinishOrderAction>;

export type FetchOrdersTypes =
  | FETCH_ORDERS_STATUS.BEGIN
  | FETCH_ORDERS_STATUS.SUCCESS
  | FETCH_ORDERS_STATUS.FAILURE;
export type FetchOrdersThunkAction = ThunkAction<
  void,
  {},
  {},
  FetchOrdersAction
>;
export type FetchOrdersThunkDispatch = ThunkDispatch<{}, {}, FetchOrdersAction>;

export interface LoginAction {
  type: LoginTypes;
  payload?: VendorInfo;
  error?: Error;
}

export interface OpenModalAction {
  type: typeof OPEN_ADD_MODAL | typeof OPEN_EDIT_MODAL;
  payload?: number;
}

export interface CloseModalAction {
  type: typeof CLOSE_ADD_MODAL | typeof CLOSE_EDIT_MODAL;
}

export interface GetVendorMenuAction {
  type: GET_VENDOR_MENU_STATUS;
  payload?: MenuItem[];
  error?: Error;
}

export interface UpdateProfileAction {
  type: UPDATE_PROFILE_STATUS;
  payload?: VendorInfo;
  error?: Error;
}

export interface AddMenuItemAction {
  type: ADD_MENU_ITEM_STATUS;
  payload?: MenuItem;
  error?: Error;
}

export interface DeleteMenuItemAction {
  type: DELETE_MENU_ITEM_STATUS;
  payload?: MenuItem;
  error?: Error;
}

export interface EditMenuItemAction {
  type: EDIT_MENU_ITEM_STATUS;
  payload?: MenuItem;
  error?: Error;
}

export interface CancelOrderAction {
  type: CANCEL_ORDER_STATUS;
  payload?: Order;
  error?: Error;
}

export interface FinishOrderAction {
  type: FINISH_ORDER_STATUS;
  payload?: Order;
  error?: Error;
}

export interface FetchOrdersAction {
  type: FETCH_ORDERS_STATUS;
  payload?: Order[];
  error?: Error;
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

export const openAddModal = (): OpenModalAction => ({
  type: OPEN_ADD_MODAL
});

export const closeAddModal = (): CloseModalAction => ({
  type: CLOSE_ADD_MODAL
});

export const openEditModal = (id: number): OpenModalAction => ({
  type: OPEN_EDIT_MODAL,
  payload: id
});

export const closeEditModal = (): CloseModalAction => ({
  type: CLOSE_EDIT_MODAL
});

export const getVendorMenuBegin = (): GetVendorMenuAction => ({
  type: GET_VENDOR_MENU_STATUS.BEGIN
});

export const getVendorMenuSuccess = (
  menu: MenuItem[]
): GetVendorMenuAction => ({
  type: GET_VENDOR_MENU_STATUS.SUCCESS,
  payload: menu
});

export const getVendorMenuFailure = (error: Error): GetVendorMenuAction => ({
  type: GET_VENDOR_MENU_STATUS.FAILURE,
  error: error
});

export const updateProfileBegin = (): UpdateProfileAction => ({
  type: UPDATE_PROFILE_STATUS.BEGIN
});

export const updateProfileSuccess = (
  vendor: VendorInfo
): UpdateProfileAction => ({
  type: UPDATE_PROFILE_STATUS.SUCCESS,
  payload: vendor
});

export const updateProfileFailure = (error: Error): UpdateProfileAction => ({
  type: UPDATE_PROFILE_STATUS.FAILURE,
  error: error
});

export const addMenuItemBegin = (): AddMenuItemAction => ({
  type: ADD_MENU_ITEM_STATUS.BEGIN
});

export const addMenuItemSuccess = (item: MenuItem): AddMenuItemAction => ({
  type: ADD_MENU_ITEM_STATUS.SUCCESS,
  payload: item
});

export const addMenuItemFailure = (error: Error): AddMenuItemAction => ({
  type: ADD_MENU_ITEM_STATUS.FAILURE,
  error: error
});

export const deleteMenuItemBegin = (): DeleteMenuItemAction => ({
  type: DELETE_MENU_ITEM_STATUS.BEGIN
});

export const deleteMenuItemSuccess = (
  item: MenuItem
): DeleteMenuItemAction => ({
  type: DELETE_MENU_ITEM_STATUS.SUCCESS,
  payload: item
});

export const deleteMenuItemFailure = (error: Error): DeleteMenuItemAction => ({
  type: DELETE_MENU_ITEM_STATUS.FAILURE,
  error: error
});

export const editMenuItemBegin = (): EditMenuItemAction => ({
  type: EDIT_MENU_ITEM_STATUS.BEGIN
});

export const editMenuItemSuccess = (item: MenuItem): EditMenuItemAction => ({
  type: EDIT_MENU_ITEM_STATUS.SUCCESS,
  payload: item
});

export const editMenuItemFailure = (error: Error): EditMenuItemAction => ({
  type: EDIT_MENU_ITEM_STATUS.FAILURE,
  error: error
});

export const cancelOrderBegin = (): CancelOrderAction => ({
  type: CANCEL_ORDER_STATUS.BEGIN
});

export const cancelOrderSuccess = (order: Order): CancelOrderAction => ({
  type: CANCEL_ORDER_STATUS.SUCCESS,
  payload: order
});

export const cancelOrderFailure = (error: Error): CancelOrderAction => ({
  type: CANCEL_ORDER_STATUS.FAILURE,
  error: error
});

export const finishOrderBegin = (): FinishOrderAction => ({
  type: FINISH_ORDER_STATUS.BEGIN
});

export const finishOrderSucccess = (order: Order): FinishOrderAction => ({
  type: FINISH_ORDER_STATUS.SUCCESS,
  payload: order
});

export const finishOrderFailure = (error: Error): FinishOrderAction => ({
  type: FINISH_ORDER_STATUS.FAILURE,
  error: error
});

export const fetchOrdersBegin = (): FetchOrdersAction => ({
  type: FETCH_ORDERS_STATUS.BEGIN
});

export const fetchOrdersSucccess = (orders: Order[]): FetchOrdersAction => ({
  type: FETCH_ORDERS_STATUS.SUCCESS,
  payload: orders
});

export const fetchOrdersFailure = (error: Error): FetchOrdersAction => ({
  type: FETCH_ORDERS_STATUS.FAILURE,
  error: error
});

/*
 * THUNK ASYNC REQUESTS
 */

// attempt vendor sign-in
export const vendorSignIn = (form: signInForm): LoginThunkAction => {
  return (dispatch: LoginThunkDispatch) => {
    dispatch(signInBegin());
    signIn(form)
      .then((vendor: VendorInfo) => {
        dispatch(signInSuccess(vendor));
      })
      .catch((error: Error) => {
        dispatch(signInFailure(error));
      });
  };
};

// attempt vendor sign-up
export const vendorSignUp = (form: signUpForm): LoginThunkAction => {
  return (dispatch: LoginThunkDispatch) => {
    dispatch(signUpBegin());
    signUp(form)
      .then((vendor: VendorInfo) => {
        dispatch(signUpSuccess(vendor));
      })
      .catch((error: Error) => {
        dispatch(signUpFailure(error));
      });
  };
};

// retrieves menu for specified vendor
export const vendorGetMenu = (id: Number): GetVendorMenuThunkAction => {
  return (dispatch: GetVendorMenuThunkDispatch) => {
    dispatch(getVendorMenuBegin());
    fetch_menu(id)
      .then((menu: MenuItem[]) => {
        dispatch(getVendorMenuSuccess(menu));
      })
      .catch((error: Error) => {
        dispatch(getVendorMenuFailure(error));
      });
  };
};

export const vendorUpdateProfile = (
  vendor: VendorInfo
): UpdateProfileThunkAction => {
  return (dispatch: UpdateProfileThunkDispatch) => {
    dispatch(updateProfileBegin());
    update_profile(vendor)
      .then((vendor: VendorInfo) => {
        dispatch(updateProfileSuccess(vendor));
      })
      .catch((error: Error) => {
        dispatch(updateProfileFailure(error));
      });
  };
};

// id of menu item is vendor id
export const vendorAddMenuItem = (item: MenuItem): AddMenuItemThunkAction => {
  return (dispatch: AddMenuItemThunkDispatch) => {
    dispatch(addMenuItemBegin());
    add_to_menu(item)
      .then((item: MenuItem) => {
        dispatch(addMenuItemSuccess(item));
      })
      .catch((error: Error) => {
        dispatch(addMenuItemFailure(error));
      });
  };
};

export const vendorEditMenuItem = (item: MenuItem): EditMenuItemThunkAction => {
  return (dispatch: EditMenuItemThunkDispatch) => {
    dispatch(editMenuItemBegin());
    edit_menu_item(item)
      .then((item: MenuItem) => {
        dispatch(editMenuItemSuccess(item));
      })
      .catch((error: Error) => {
        dispatch(editMenuItemFailure(error));
      });
  };
};

export const vendorDeleteMenuItem = (
  item: MenuItem
): DeleteMenuItemThunkAction => {
  return (dispatch: DeleteMenuItemThunkDispatch) => {
    dispatch(deleteMenuItemBegin());
    delete_menu_item(item)
      .then((item: MenuItem) => {
        dispatch(deleteMenuItemSuccess(item));
      })
      .catch((error: Error) => {
        dispatch(deleteMenuItemFailure(error));
      });
  };
};

export const cancelOrder = (order: Order): CancelOrderThunkAction => {
  return (dispatch: CancelOrderThunkDispatch) => {
    dispatch(cancelOrderBegin());
    cancel_order(order)
      .then((order: Order) => {
        dispatch(cancelOrderSuccess(order));
      })
      .catch((error: Error) => {
        dispatch(cancelOrderFailure(error));
      });
  };
};

export const finishOrder = (order: Order): FinishOrderThunkAction => {
  return (dispatch: FinishOrderThunkDispatch) => {
    dispatch(finishOrderBegin());
    finish_order(order)
      .then((order: Order) => {
        dispatch(finishOrderSucccess(order));
      })
      .catch((error: Error) => {
        dispatch(finishOrderFailure(error));
      });
  };
};

// fetch orders for a vendor on timeout
export const fetchOrders = (id: number): FetchOrdersThunkAction => {
  return (dispatch: FetchOrdersThunkDispatch) => {
    dispatch(fetchOrdersBegin());
    fetch_orders(id)
      .then((orders: Order[]) => {
        dispatch(fetchOrdersSucccess(orders));
      })
      .catch((error: Error) => {
        dispatch(fetchOrdersFailure(error));
      });
  };
};

export interface signUpForm {
  email: String;
  password: String;
  name: String;
  description: String;
  cuisine: String;
  phone: String;
  address: String;
  city: String;
  state: String;
  open: Number;
  close: Number;
}
export interface signInForm {
  email: String;
  password: String;
}

const signIn = async (data: signInForm): Promise<VendorInfo> => {
  const resp = await _POST("http://localhost:5000/login", data);
  return new Promise<VendorInfo>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else {
      reject(new Error("Unable to login"));
    }
  });
};

const signUp = async (data: signUpForm): Promise<VendorInfo> => {
  const resp = await _POST("http://localhost:5000/createVendorAccount", data);
  return new Promise<VendorInfo>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else {
      reject(new Error("Unable to create user"));
    }
  });
};

const fetch_menu = async (id: Number): Promise<MenuItem[]> => {
  const menu_query = { id };
  const resp = await _POST("http://localhost:5000/menu", menu_query);
  return new Promise<MenuItem[]>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else {
      reject(new Error("Unable to fetch menu"));
    }
  });
};

const update_profile = async (vendor: VendorInfo): Promise<VendorInfo> => {
  const resp = await _POST("http://localhost:5000/editProfile", vendor);
  return new Promise<VendorInfo>((resolve, reject) => {
    if (resp.status == 201) {
      resolve(vendor);
    } else {
      reject(new Error("Unable to update profile"));
    }
  });
};

const add_to_menu = async (item: MenuItem): Promise<MenuItem> => {
  const resp = await _POST("http://localhost:5000/addItem", item);
  return new Promise<MenuItem>((resolve, reject) => {
    if (resp.status == 201) {
      item.id = resp.response;
      resolve(item);
    } else reject(new Error("Error adding menu item"));
  });
};

const edit_menu_item = async (item: MenuItem): Promise<MenuItem> => {
  const resp = await _POST("http://localhost:5000/editItem", item);
  return new Promise<MenuItem>((resolve, reject) => {
    if (resp.status == 201) {
      resolve(item);
    } else return reject(new Error("Error editing menu item"));
  });
};

const delete_menu_item = async (item: MenuItem): Promise<MenuItem> => {
  const resp = await _POST("http://localhost:5000/deleteItem", item);
  return new Promise<MenuItem>((resolve, reject) => {
    if (resp.status == 201) {
      resolve(item);
    } else reject(new Error("Error editing menu item"));
  });
};

const cancel_order = async (order: Order): Promise<Order> => {
  const resp = await _POST("http://localhost:5000/removeOrder", order);
  return new Promise<Order>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(order);
    } else reject(new Error("Error canceling order"));
  });
};

const finish_order = async (order: Order): Promise<Order> => {
  const resp = await _POST("http://localhost:5000/removeOrder", order);
  return new Promise<Order>((resolve, reject) => {
    if (resp.status == 200) {
      resolve(order);
    } else reject(new Error("Error finishing order"));
  });
};

const fetch_orders = async (id: number): Promise<Order[]> => {
  const order_query = { id }
  const resp = await _POST("http://localhost:5000/getOrder", order_query);
  return new Promise<Order[]>(resolve => {
    if (resp.status == 200) {
      resolve(JSON.parse(resp.response));
    } else reject(new Error("Unable to fetch orders"));
  });
};
