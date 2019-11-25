import {
  UPDATE_VENDOR,
  GET_MENU_STATUS,
  UpdateVendorAction,
  GetMenuAction
} from "../../ActionFiles/CustomerActions";
import { VendorInfo } from "../../InterfaceFiles/types";

export interface VendorState extends VendorInfo {}

const vendorState: VendorState = {
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
  menu: []
};

export const Vendor = (
  state: VendorState = vendorState,
  action: UpdateVendorAction | GetMenuAction
): VendorState => {
  switch (action.type) {
    // Add selected vendor from the search page
    case UPDATE_VENDOR:
      return {
        ...action.payload
      };

    // Update vendor with its fetched menu
    case GET_MENU_STATUS.SUCCESS:
      if (action.payload) {
        return {
          ...state,
          menu: action.payload
        };
      } else
        return {
          ...state
        };

    default:
      return state;
  }
};
