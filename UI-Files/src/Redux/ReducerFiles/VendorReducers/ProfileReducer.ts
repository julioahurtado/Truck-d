import {
  OPEN_ADD_MODAL,
  CLOSE_ADD_MODAL,
  OPEN_EDIT_MODAL,
  CLOSE_EDIT_MODAL,
  GET_VENDOR_MENU_STATUS,
  UPDATE_PROFILE_STATUS,
  LOGIN_STATUS,
  DELETE_MENU_ITEM_STATUS,
  ADD_MENU_ITEM_STATUS,
  EDIT_MENU_ITEM_STATUS
} from "../../ActionFiles/VendorActions";
import {
  OpenModalAction,
  CloseModalAction,
  LoginAction,
  GetVendorMenuAction,
  UpdateProfileAction,
  AddMenuItemAction,
  DeleteMenuItemAction,
  EditMenuItemAction
} from "../../ActionFiles/VendorActions";
import { VendorInfo } from "../../InterfaceFiles/types";

export interface ProfileState extends VendorInfo {
  currItemId?: number;
  showAddModal?: boolean;
  showEditModal?: boolean;
  isLoading?: boolean;
  error?: Error | null;
}

export const initState: ProfileState = {
  id: -1,
  name: "",
  description: "",
  cuisine: "",
  hours: {
    open: -1,
    close: -1
  },
  phone: -1,
  city: "",
  state: "",
  address: "",
  menu: [],
  currItemId: -1,
  showAddModal: false,
  showEditModal: false,
  isLoading: false,
  error: null
};

type MenuActions =
  | GetVendorMenuAction
  | AddMenuItemAction
  | DeleteMenuItemAction
  | EditMenuItemAction;
type ModalActions = OpenModalAction | CloseModalAction;
export const Profile = (
  state: ProfileState = initState,
  action: ModalActions | UpdateProfileAction | LoginAction | MenuActions
): ProfileState => {
  switch (action.type) {
    /*
     * MODAL ACTIONS
     */

    case OPEN_ADD_MODAL:
      return {
        ...state,
        showAddModal: true
      };

    case CLOSE_ADD_MODAL:
      return {
        ...state,
        showAddModal: false
      };

    case OPEN_EDIT_MODAL:
      return {
        ...state,
        currItemId: action.payload,
        showEditModal: true
      };

    case CLOSE_EDIT_MODAL:
      return {
        ...state,
        currItemId: -1,
        showEditModal: false
      };

    /*
     * GET VENDOR'S MENU
     */

    case GET_VENDOR_MENU_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case GET_VENDOR_MENU_STATUS.SUCCESS:
      if (action.payload) {
        return {
          ...state,
          menu: action.payload,
          isLoading: false
        };
      } else return { ...state };

    case GET_VENDOR_MENU_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    /*
     * PROFILE UPDATE
     */

    case UPDATE_PROFILE_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_STATUS.SUCCESS:
    case UPDATE_PROFILE_STATUS.SUCCESS:
      if (action.payload) {
        return {
          ...state,
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          cuisine: action.payload.cuisine,
          hours: {
            open: action.payload.hours.open,
            close: action.payload.hours.close
          },
          phone: action.payload.phone,
          city: action.payload.city,
          state: action.payload.state,
          address: action.payload.address,
          isLoading: false
        };
      } else
        return {
          ...state,
          isLoading: false
        };

    case UPDATE_PROFILE_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    /*
     * MENU ITEM CREATION
     */

    case ADD_MENU_ITEM_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case ADD_MENU_ITEM_STATUS.SUCCESS:
      if (action.payload) {
        return {
          ...state,
          menu: state.menu && [...state.menu, action.payload],
          isLoading: false
        };
      } else
        return {
          ...state
        };

    case ADD_MENU_ITEM_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    /*
     * MENU ITEM DELETION
     */

    case DELETE_MENU_ITEM_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case DELETE_MENU_ITEM_STATUS.SUCCESS:
      return {
        ...state,
        menu: state.menu.filter(
          item => item && action.payload && item.id != action.payload.id
        ),
        isLoading: false
      };

    case DELETE_MENU_ITEM_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    /*
     * MENU ITEM UPDATE
     */

    case EDIT_MENU_ITEM_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case EDIT_MENU_ITEM_STATUS.SUCCESS:
      return {
        ...state,
        menu: state.menu.map(item => {
          if (action.payload && item && action.payload.id == item.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
        isLoading: false
      };

    case EDIT_MENU_ITEM_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
