import { SIGN_UP_BEGIN, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../../ActionFiles/VendorActions'
import { VendorInfo } from '../../InterfaceFiles/types';

interface SignUpState {
    vendor: VendorInfo,
    isLoading: Boolean,
    error: Error
}

let initState: SignUpState = {
    vendor: null,
    isLoading: false,
    error: null
}

let SignUp = (state = initState, action) => {
    switch(action.type) {

        // Signals start of vendor sign-up
        case SIGN_UP_BEGIN:
            return {
                ...state,
                isLoading: true,
            };

        // Signals successfull vendor sign-up
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                vendor: action.payload,
                isLoading: false,
                error: null
            };

        // Signals failed vendor sign-up
        case SIGN_UP_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};

export default SignUp;