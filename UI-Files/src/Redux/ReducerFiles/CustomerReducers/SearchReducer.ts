import { SEARCH_STATUS, SearchAction } from "../../ActionFiles/CustomerActions";
import { VendorInfo } from "../../InterfaceFiles/types";

export interface SearchState {
  vendors?: VendorInfo[] | null;
  isLoading: boolean;
  error?: Error | null;
}

let initState: SearchState = {
  vendors: null,
  isLoading: false,
  error: null
};

export const Search = (
  state = initState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    // Signals start of vendor-list fetch
    case SEARCH_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    // Signals successfull fetch with vendors returned
    case SEARCH_STATUS.SUCCESS:
      return {
        ...state,
        vendors: action.payload,
        isLoading: false
      };

    // Signals failed fetch for vendors with error message
    case SEARCH_STATUS.FAILURE:
      return {
        ...state,
        vendors: null,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
