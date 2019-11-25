import { UPDATE_CUSTOMER_NAME, UPDATE_CUSTOMER_EMAIL, UPDATE_CUSTOMER_PHONE, SEND_ORDER_STATUS, SendOrderAction, UpdateCustomerDetailAction } from '../../ActionFiles/CustomerActions';
import { CustomerInfo } from '../../InterfaceFiles/types';

export interface CheckoutState {
    customer?: CustomerInfo,
    orderNumber?: number,
    isLoading?: boolean,
    error?: Error | null
}

let checkoutState: CheckoutState = {
    customer: {
        name: "",
        email: "",
        phone: -1
    },
    orderNumber: -1,
    isLoading: false,
    error: null
}

export const Checkout = (state: CheckoutState = checkoutState, action: UpdateCustomerDetailAction | SendOrderAction): CheckoutState => {
    switch(action.type) {

        case UPDATE_CUSTOMER_NAME:
            if (state.customer && action.payload) {
                return {
                    ...state,
                    customer: state.customer && {
                        ...state.customer,
                        name: action.payload
                    }
                }
            } else return { ...state }

        case UPDATE_CUSTOMER_EMAIL:
            if (state.customer && action.payload) {
                return {
                    ...state,
                    customer: state.customer && {
                        ...state.customer,
                        email: action.payload
                    }
                }
            } else return { ...state }
        
        case UPDATE_CUSTOMER_PHONE:
            if (state.customer && action.payload) {
                return {
                    ...state,
                    customer: state.customer && {
                        ...state.customer,
                        phone: parseInt(action.payload)
                    }
                }
            } else return { ...state }

        /*
        * HANDLE ORDER SENDING TO VENDOR
        */

        case SEND_ORDER_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        case SEND_ORDER_STATUS.SUCCESS:
            return {
                ...state,
                orderNumber: action.payload,
                isLoading: false
            };

        case SEND_ORDER_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};
