import { SIGN_IN_BEGIN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../../ActionFiles/VendorActions';
import { VendorInfo } from '../../InterfaceFiles/types';

interface SignInState {
    vendor: VendorInfo,
    isLoading: Boolean,
    error: Error
};

let initState: SignInState = {
    vendor: null,
    isLoading: false,
    error: null
};

let SignIn = (state = initState, action) => {
    switch(action.type) {

        // Signals start of vendor sign-in
        case SIGN_IN_BEGIN:
            return {
                ...state,
                isLoading: true,
            };

        // Signals successfull vendor sign-in
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                vendor: action.payload,
                isLoading: false,
            };

        // Signals failed vendor sign-in
        case SIGN_IN_FAILURE:
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

export default SignIn;