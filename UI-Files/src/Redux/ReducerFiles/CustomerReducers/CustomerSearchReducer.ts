import { CUSTOMER_SEARCH_STATUS, CustomerSearchAction } from '../../ActionFiles/CustomerActions';
import { VendorInfo } from '../../InterfaceFiles/types'

interface CustomerSearchState {
    vendors?: VendorInfo[] | null,
    isLoading: Boolean,
    error?: Error | null
};

let initState: CustomerSearchState = {
    vendors: null,
    isLoading: false,
    error: null
};

export const CustomerSearch = (state = initState, action: CustomerSearchAction) => {
    switch(action.type) {

        // Signals start of vendor-list fetch
        case CUSTOMER_SEARCH_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Signals successfull fetch with vendors returned
        case CUSTOMER_SEARCH_STATUS.SUCCESS:
            return {
                ...state,
                vendors: action.payload,
                isLoading: false,
            };

        // Signals failed fetch for vendors with error message
        case CUSTOMER_SEARCH_STATUS.FAILURE:
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