import { VENDOR_SEARCH_STATUS, VendorSearchAction } from '../../ActionFiles/CustomerActions';
import { VendorInfo } from '../../InterfaceFiles/types'

interface VendorSearchState {
    vendors?: VendorInfo[],
    isLoading: Boolean,
    error?: Error
};

let initState: VendorSearchState = {
    vendors: [],
    isLoading: false,
    error: undefined
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
                error: action.payload
            };

        default:
            return state
    }
};