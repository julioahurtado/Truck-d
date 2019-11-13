import { GET_MENU_STATUS, GetMenuAction, UpdateMenuWithVendorAction, UPDATE_MENU_WITH_VENDOR } from '../../ActionFiles/CustomerActions';
import { MenuItem, VendorInfo } from '../../InterfaceFiles/types'
import { combineReducers } from 'redux';

export interface MenuState extends MenuItemsState, VendorState {}

interface MenuItemsState {
    menu?: MenuItem[] | null,
    isLoading?: Boolean,
    error?: Error | null
}

interface VendorState {
    vendor?: VendorInfo | null
};

let vendorState: VendorState = {
    vendor: null
}

let menuState: MenuItemsState = {
    menu: null,
    isLoading: false,
    error: null
}

export const Menu = (state = menuState, action: GetMenuAction): MenuItemsState => {
    switch(action.type) {

        // Begin menu fetch
        case GET_MENU_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Menu successfully retrieved
        case GET_MENU_STATUS.SUCCESS:
            return {
                ...state,
                menu: action.payload,
                isLoading: false,
            };

        // Menu retrieval failed
        case GET_MENU_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};

export const Vendor = (state = vendorState, action: UpdateMenuWithVendorAction): VendorState => {
    switch(action.type) {

        // Add vendor data to menu page
        case UPDATE_MENU_WITH_VENDOR:
            return {
                ...state,
                vendor: action.payload
            };
        
        default: 
            return state
    }
};

export interface MenuPageState {
    menu: MenuState,
    vendor: VendorState
}

export const MenuPage = combineReducers<MenuPageState>({
    menu: Menu,
    vendor: Vendor
});
