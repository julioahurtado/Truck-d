import { MenuItem, CustomerInfo} from '../InterfaceFiles/types'

/*
* CUSTOMER ACTION TYPES
*/

export const QUERY_SEARCH = 'QUERY_SEARCH'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REMOVE_ITEM_TYPE_FROM_CART = 'REMOVE_ITEM_TYPE_FROM_CART'
export const SEND_ORDER = 'SEND_ORDER'

/*
* CUSTOMER ACTION CREATORS
*/

export function querySearch(query: String) {
    return { type: QUERY_SEARCH, query }
}

export function addToCart(item: MenuItem) {
    return { type: ADD_TO_CART, item }
}

export function removeFromCart(item: MenuItem) {
    return { type: REMOVE_FROM_CART, item }
}

export function removeItemTypeFromCart(item: MenuItem) {
    return { type: REMOVE_ITEM_TYPE_FROM_CART, item }
}

export function sendOrder(info: CustomerInfo) {
    return { type: SEND_ORDER, info }
}