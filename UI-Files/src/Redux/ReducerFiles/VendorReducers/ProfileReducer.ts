import { UpdateProfileAction, UPDATE_PROFILE_STATUS } from '../../ActionFiles/VendorActions';
import { AddMenuItemAction, ADD_MENU_ITEM_STATUS } from '../../ActionFiles/VendorActions';
import { DeleteMenuItemAction, DELETE_MENU_ITEM_STATUS } from '../../ActionFiles/VendorActions';
import { EditMenuItemAction, EDIT_MENU_ITEM_STATUS } from '../../ActionFiles/VendorActions';
import { UpdateVendorAction, UPDATE_VENDOR } from '../../ActionFiles/VendorActions';
import { VendorInfo } from '../../InterfaceFiles/types';

export interface ProfileState {
    vendor?: VendorInfo | null,
    isLoading?: Boolean,
    error?: Error | null
};

let initState: ProfileState = {
    vendor: null,
    isLoading: false,
    error: null
};

// TODO: On profile editor load, update profile state with vendor from login
type MenuActions = AddMenuItemAction | DeleteMenuItemAction | EditMenuItemAction;
export const Profile = (state: ProfileState = initState, action: UpdateProfileAction | MenuActions | UpdateVendorAction): ProfileState => {
    switch(action.type) {

        // Fetch state from SignIn/SignUp
        case UPDATE_VENDOR:
            return {
                ...state,
                vendor: action.payload
            }

        /*
        * HANDLE PROFILE UPDATING
        */

        case UPDATE_PROFILE_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Signals successfull vendor login
        case UPDATE_PROFILE_STATUS.SUCCESS:
            return {
                ...state,
                vendor: action.payload,
                isLoading: false
            };

        // Signals failed vendor login
        case UPDATE_PROFILE_STATUS.FAILURE:
            return {
                ...state,
                vendor: null,
                isLoading: false,
                error: action.error
            };

        /*
        * HANDLE MENU ITEM CREATION
        */

        case ADD_MENU_ITEM_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        case ADD_MENU_ITEM_STATUS.SUCCESS:
            return {
                ...state,
                vendor: state.vendor && {
                    ...state.vendor,
                    menu: state.vendor.menu && [
                        ...state.vendor.menu,
                        action.payload
                    ]
                },
                isLoading: false
            };

        case ADD_MENU_ITEM_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        
        /*
        * HANDLE MENU ITEM DELETION
        */

         case DELETE_MENU_ITEM_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        case DELETE_MENU_ITEM_STATUS.SUCCESS:
            return {
                ...state,
                vendor: state.vendor && {
                    ...state.vendor,
                    menu: state.vendor.menu && state.vendor.menu.map(item => {
                        if (action.payload && item && item.id != action.payload.id) {
                            return item
                        }
                    }),
                },
                isLoading: false
            };

        case DELETE_MENU_ITEM_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        /*
        * HANDLE MENU ITEM EDITING
        */

         case EDIT_MENU_ITEM_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        case EDIT_MENU_ITEM_STATUS.SUCCESS:
            return {
                ...state,
                vendor: state.vendor && {
                    ...state.vendor,
                    menu: state.vendor.menu && state.vendor.menu.map(item => {
                        if (action.payload && item && item.id == action.payload.id) {
                            return action.payload
                        } else return item
                    }),
                },
                isLoading: false
            };

        case EDIT_MENU_ITEM_STATUS.FAILURE:
            return {
                ...state,
                vendor: null,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};