import {
  UpdateProfileAction,
  LoginAction,
  UPDATE_PROFILE_STATUS,
  LOGIN_STATUS
} from "../../ActionFiles/VendorActions";
import {
  AddMenuItemAction,
  ADD_MENU_ITEM_STATUS
} from "../../ActionFiles/VendorActions";
import {
  DeleteMenuItemAction,
  DELETE_MENU_ITEM_STATUS
} from "../../ActionFiles/VendorActions";
import {
  EditMenuItemAction,
  EDIT_MENU_ITEM_STATUS
} from "../../ActionFiles/VendorActions";
import { VendorInfo } from "../../InterfaceFiles/types";

export interface ProfileState extends VendorInfo {
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
  isLoading: false,
  error: null
};

type MenuActions =
  | AddMenuItemAction
  | DeleteMenuItemAction
  | EditMenuItemAction;
export const Profile = (
  state: ProfileState = initState,
  action: UpdateProfileAction | LoginAction | MenuActions
): ProfileState => {
  switch (action.type) {
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
          menu: state.menu,
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
