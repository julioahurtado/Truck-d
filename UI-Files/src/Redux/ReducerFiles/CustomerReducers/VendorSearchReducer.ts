import { VENDOR_SEARCH_BEGIN, VENDOR_SEARCH_SUCCESS, VENDOR_SEARCH_FAILURE } from '../../ActionFiles/CustomerActions';
import { VendorInfo } from '../../InterfaceFiles/types'

interface VendorSearchState {
    vendors: VendorInfo[],
    isLoading: Boolean,
    error: Error
};

let initState: VendorSearchState = {
    vendors: [null],
    isLoading: false,
    error: null
};

let VendorSearch = (state = initState, action) => {
    switch(action.type) {

        // Signals start of vendor-list fetch
        case VENDOR_SEARCH_BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Signals successfull fetch with vendors returned
        case VENDOR_SEARCH_SUCCESS:
            return {
                ...state,
                vendors: action.payload,
                isLoading: false,
            };

        // Signals failed fetch for vendors with error message
        case VENDOR_SEARCH_FAILURE:
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

export default VendorSearch;