import { GET_MENU_STATUS, GetMenuAction, UpdateMenuWithVendorAction, UPDATE_MENU_WITH_VENDOR } from '../../ActionFiles/CustomerActions';
import { MenuItem, VendorInfo } from '../../InterfaceFiles/types'

export interface MenuState {
    vendor?: VendorInfo | null,
    menu?: MenuItem[] | null,
    isLoading: Boolean,
    error?: Error | null
};

let initState: MenuState = {
    vendor: null,
    menu: null,
    isLoading: false,
    error: null
};

// TODO: Break up Menu and vendor retrieval into two reducers
// TODO: Combine reducers into one for general MenuState to be exported to customer reducer
type MenuAction = GetMenuAction | UpdateMenuWithVendorAction;

export const Menu = (state = initState, action: MenuAction): MenuState => {
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

        // Add vendor data to menu page
        case UPDATE_MENU_WITH_VENDOR:
            return {
                ...state,
                vendor: action.payload
            }

        default:
            return state
    }
};