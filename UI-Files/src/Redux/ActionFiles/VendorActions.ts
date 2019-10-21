import { MenuItem, Order} from '../InterfaceFiles/types'

/*
* VENDOR ACTION TYPES
*/

export const SEND_AUTH = 'SEND_AUTH'

export const UPDATE_PROFILE_INFO = 'UPDATE_PROFILE_INFO'
export const UPDATE_MENU = 'UPDATE_MENU'

export const CANCEL_ORDER = 'CANCEL_ORDER'
export const FINISH_ORDER = 'FINISH_ORDER'

/*
* VENDOR ACTION CREATORS
*/

export function sendAuth(user: String, pass: String) {
    return { type: SEND_AUTH, user, pass }
}

export function updateProfileInfo(item: MenuItem) {
    return { type: UPDATE_PROFILE_INFO, item }
}

export function updateMenu(item: MenuItem) {
    return { type: UPDATE_MENU, item }
}

export function cancelOrder(order: Order) {
    return { type: CANCEL_ORDER, order }
}

export function finishOrder(order: Order) {
    return { type: FINISH_ORDER, order }
}