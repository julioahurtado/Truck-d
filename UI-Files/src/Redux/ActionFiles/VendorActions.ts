import { MenuItem, Order, VendorInfo } from '../InterfaceFiles/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { _POST } from '../../REST/restapiutil';
import { reject } from 'q';

/*
* VENDOR ACTION TYPES
*/

export enum LOGIN_STATUS {
    BEGIN = 'LOGIN_BEGIN',
    SUCCESS = 'LOGIN_SUCCESS',
    FAILURE = 'LOGIN_FAILURE'
}

export enum UPDATE_PROFILE_STATUS {
    BEGIN = 'UPDATE_PROFILE_BEGIN',
    SUCCESS = 'UPDATE_PROFILE_SUCCESS',
    FAILURE = 'UPDATE_PROFILE_FAILURE'
}

export enum ADD_MENU_ITEM_STATUS {
    BEGIN = 'ADD_MENU_ITEM_BEGIN',
    SUCCESS = 'ADD_MENU_ITEM_SUCCESS',
    FAILURE = 'ADD_MENU_ITEM_FAILURE'
}

export enum DELETE_MENU_ITEM_STATUS {
    BEGIN = 'DELETE_MENU_ITEM_BEGIN',
    SUCCESS = 'DELETE_MENU_ITEM_SUCCESS',
    FAILURE = 'DELETE_MENU_ITEM_FAILURE'
}

export enum EDIT_MENU_ITEM_STATUS {
    BEGIN = 'EDIT_MENU_ITEM_BEGIN',
    SUCCESS = 'EDIT_MENU_ITEM_SUCCESS',
    FAILURE = 'EDIT_MENU_ITEM_FAILURE'
}

export const UPDATE_VENDOR = 'UPDATE_VENDOR';

export const CANCEL_ORDER = 'CANCEL_ORDER';
export const FINISH_ORDER = 'FINISH_ORDER';

/*
* VENDOR ACTION INTERFACES
*/

export type LoginTypes = LOGIN_STATUS.BEGIN | LOGIN_STATUS.SUCCESS | LOGIN_STATUS.FAILURE
export type LoginThunkAction = ThunkAction<void, {}, {}, LoginAction>
export type LoginThunkDispatch = ThunkDispatch<{}, {}, LoginAction|UpdateVendorAction>

export type UpdateProfileTypes = UPDATE_PROFILE_STATUS.BEGIN | UPDATE_PROFILE_STATUS.SUCCESS | UPDATE_PROFILE_STATUS.FAILURE
export type UpdateProfileThunkAction = ThunkAction<void, {}, {}, UpdateProfileAction>
export type UpdateProfileThunkDispatch = ThunkDispatch<{}, {}, UpdateProfileAction>

export type AddMenuItemTypes = ADD_MENU_ITEM_STATUS.BEGIN | ADD_MENU_ITEM_STATUS.SUCCESS | ADD_MENU_ITEM_STATUS.FAILURE
export type AddMenuItemThunkAction = ThunkAction<void, {}, {}, AddMenuItemAction>
export type AddMenuItemThunkDispatch = ThunkDispatch<{}, {}, AddMenuItemAction>

export type DeleteMenuItemTypes = DELETE_MENU_ITEM_STATUS.BEGIN | DELETE_MENU_ITEM_STATUS.SUCCESS | DELETE_MENU_ITEM_STATUS.FAILURE
export type DeleteMenuItemThunkAction = ThunkAction<void, {}, {}, DeleteMenuItemAction>
export type DeleteMenuItemThunkDispatch = ThunkDispatch<{}, {}, DeleteMenuItemAction>

export type EditMenuItemTypes = EDIT_MENU_ITEM_STATUS.BEGIN | EDIT_MENU_ITEM_STATUS.SUCCESS | EDIT_MENU_ITEM_STATUS.FAILURE
export type EditMenuItemThunkAction = ThunkAction<void, {}, {}, EditMenuItemAction>
export type EditMenuItemThunkDispatch = ThunkDispatch<{}, {}, EditMenuItemAction>

export interface LoginAction {
    type: LoginTypes,
    payload?: VendorInfo,
    error?: Error
}

export interface UpdateProfileAction {
    type: UPDATE_PROFILE_STATUS,
    payload?: VendorInfo,
    error?: Error
}

export interface AddMenuItemAction {
    type: ADD_MENU_ITEM_STATUS,
    payload?: MenuItem,
    error?: Error
}

export interface DeleteMenuItemAction {
    type: DELETE_MENU_ITEM_STATUS,
    payload?: MenuItem,
    error?: Error
}

export interface EditMenuItemAction {
    type: EDIT_MENU_ITEM_STATUS,
    payload?: MenuItem,
    error?: Error
}

export interface UpdateVendorAction {
    type: typeof UPDATE_VENDOR,
    payload: VendorInfo
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

export const updateVendor = (vendor: VendorInfo): UpdateVendorAction => ({
    type: UPDATE_VENDOR,
    payload: vendor
})

export const updateProfileBegin = (): UpdateProfileAction  => ({
    type: UPDATE_PROFILE_STATUS.BEGIN
});

export const updateProfileSuccess = (vendor: VendorInfo): UpdateProfileAction  => ({
    type: UPDATE_PROFILE_STATUS.SUCCESS,
    payload: vendor
});

export const updateProfileFailure = (error: Error): UpdateProfileAction  => ({
    type: UPDATE_PROFILE_STATUS.FAILURE,
    error: error
});

export const addMenuItemBegin = (): AddMenuItemAction  => ({
    type: ADD_MENU_ITEM_STATUS.BEGIN
});

export const addMenuItemSuccess = (item: MenuItem): AddMenuItemAction  => ({
    type: ADD_MENU_ITEM_STATUS.SUCCESS,
    payload: item
});

export const addMenuItemFailure = (error: Error): AddMenuItemAction  => ({
    type: ADD_MENU_ITEM_STATUS.FAILURE,
    error: error
});

export const deleteMenuItemBegin = (): DeleteMenuItemAction  => ({
    type: DELETE_MENU_ITEM_STATUS.BEGIN
});

export const deleteMenuItemSuccess = (item: MenuItem): DeleteMenuItemAction  => ({
    type: DELETE_MENU_ITEM_STATUS.SUCCESS,
    payload: item
});

export const deleteMenuItemFailure = (error: Error): DeleteMenuItemAction  => ({
    type: DELETE_MENU_ITEM_STATUS.FAILURE,
    error: error
});

export const editMenuItemBegin = (): EditMenuItemAction  => ({
    type: EDIT_MENU_ITEM_STATUS.BEGIN
});

export const editMenuItemSuccess = (item: MenuItem): EditMenuItemAction  => ({
    type: EDIT_MENU_ITEM_STATUS.SUCCESS,
    payload: item
});

export const editMenuItemFailure = (error: Error): EditMenuItemAction  => ({
    type: EDIT_MENU_ITEM_STATUS.FAILURE,
    error: error
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

export interface signUpForm { email: String, password: String, name: String, description: String, cuisine: String, phone: String, address: String, city: String, state: String, open: Number, close: Number }
export interface signInForm { email: String, password: String }

const signIn = async (data: signInForm): Promise<VendorInfo> => {
    const vendor = await _POST('http://localhost:5000/login', data)
    return JSON.parse(vendor)
};

const signUp = async (data: signUpForm): Promise<VendorInfo> => {
    const vendor = await _POST('http://localhost:5000/createVendorAccount', data)
    return JSON.parse(vendor)
};

// attempt vendor sign-in
export const vendorSignIn = (form: signInForm): LoginThunkAction => {
    return (dispatch: LoginThunkDispatch) => {
        dispatch(signInBegin());
        signIn(form).then((vendor: VendorInfo) => {
            dispatch(signInSuccess(vendor))
            dispatch(updateVendor(vendor))
        }).catch((error: Error) => {
            dispatch(signInFailure(error))
        })
    }
}

// attempt vendor sign-up
export const vendorSignUp = (form: signUpForm): LoginThunkAction => {
    return (dispatch: LoginThunkDispatch) => {
        dispatch(signUpBegin());
        signUp(form).then((vendor: VendorInfo) => {
            dispatch(signUpSuccess(vendor))
            dispatch(updateVendor(vendor))
        }).catch((error: Error) => {
            dispatch(signUpFailure(error))
        })
    }
}

// profile editor
export const update_profile = async (vendor: VendorInfo): Promise<VendorInfo> => {
    const resp = await _POST('http://localhost:5000/vendorUpdate', vendor);
    if (resp != '200') {
        reject(new Error('Error updating profile'))
    }
    return vendor
}

export const add_to_menu = async (item: MenuItem): Promise<MenuItem> => {
    const resp = await _POST('http://localhost:5000/add_menu_item', item);
    const itemID = 0;
    return new Promise<MenuItem>((resolve, reject) => {
        if (resp == '200') {
            item.id = itemID
            resolve(item)
        } else reject(new Error("Error adding menu item"))
    })
}

export const edit_menu_item = async (item: MenuItem): Promise<MenuItem> => {
    const resp = await _POST('http://localhost:5000/edit_menu_item_item', item);
    return new Promise<MenuItem>((resolve, reject) => {
        if (resp == '200') {
            resolve(item)
        } else return reject(new Error("Error editing menu item"))
    })
}

export const delete_menu_item = async (item: MenuItem): Promise<MenuItem> => {
    const resp = await _POST('http://localhost:5000/delete_menu_item', item);
    return new Promise<MenuItem>((resolve, reject) => {
        if (resp == '200') {
            resolve(item)
        } else reject(new Error("Error editing menu item"))
    })
}

export const vendorUpdateProfile = (vendor: VendorInfo): UpdateProfileThunkAction => {
    return (dispatch: UpdateProfileThunkDispatch) => {
        dispatch(updateProfileBegin());
        update_profile(vendor).then((vendor: VendorInfo) => {
            dispatch(updateProfileSuccess(vendor))
        }).catch((error: Error) => {
            dispatch(updateProfileFailure(error))
        })
    }
}

// id of menu item is vendor id
export const vendorAddMenuItem = (item: MenuItem): AddMenuItemThunkAction => {
    return (dispatch: AddMenuItemThunkDispatch) => {
        dispatch(addMenuItemBegin());
        add_to_menu(item).then((item: MenuItem) => {
            dispatch(addMenuItemSuccess(item))
        }).catch((error: Error) => {
            dispatch(addMenuItemFailure(error))
        })
    }
}

// id of original menu item. do we also need vendor id
export const vendorEditMenuItem = (item: MenuItem): EditMenuItemThunkAction => {
    return (dispatch: EditMenuItemThunkDispatch) => {
        dispatch(editMenuItemBegin());
        edit_menu_item(item).then((item: MenuItem) => {
            dispatch(editMenuItemSuccess(item))
        }).catch((error: Error) => {
            dispatch(editMenuItemFailure(error))
        })
    }
}

export const vendorDeleteMenuItem = (item: MenuItem): DeleteMenuItemThunkAction => {
    return (dispatch: DeleteMenuItemThunkDispatch) => {
        dispatch(deleteMenuItemBegin());
        delete_menu_item(item).then((item: MenuItem) => {
            dispatch(deleteMenuItemSuccess(item))
        }).catch((error: Error) => {
            dispatch(deleteMenuItemFailure(error))
        })
    }
}