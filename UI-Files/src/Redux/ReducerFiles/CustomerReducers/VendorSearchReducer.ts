import { VENDOR_SEARCH_STATUS, VendorSearchAction } from '../../ActionFiles/CustomerActions';
import { VendorInfo } from '../../InterfaceFiles/types'

interface VendorSearchState {
    vendors?: VendorInfo[] | null,
    isLoading: Boolean,
    error?: Error | null
};

let initState: VendorSearchState = {
    vendors: null,
    isLoading: false,
    error: null
};

export const VendorSearch = (state = initState, action: VendorSearchAction) => {
    switch(action.type) {

        // Signals start of vendor-list fetch
        case VENDOR_SEARCH_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Signals successfull fetch with vendors returned
        case VENDOR_SEARCH_STATUS.SUCCESS:
            return {
                ...state,
                vendors: action.payload,
                isLoading: false,
            };

        // Signals failed fetch for vendors with error message
        case VENDOR_SEARCH_STATUS.FAILURE:
            return {
                ...state,
                vendors: null,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};