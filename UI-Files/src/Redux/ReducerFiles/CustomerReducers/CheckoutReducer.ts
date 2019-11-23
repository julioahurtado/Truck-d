import { SEND_ORDER_STATUS, SendOrderAction } from '../../ActionFiles/CustomerActions';

export interface CheckoutState {
    orderNumber?: number,
    isLoading?: boolean,
    error?: Error | null
}

let checkoutState: CheckoutState = {
    orderNumber: -1,
    isLoading: false,
    error: null
}

export const Checkout = (state: CheckoutState = checkoutState, action: SendOrderAction): CheckoutState => {
    switch(action.type) {

        case SEND_ORDER_STATUS.BEGIN:
            return {
                isLoading: true
            };

        case SEND_ORDER_STATUS.SUCCESS:
            return {
                orderNumber: action.payload,
                isLoading: false
            };

        case SEND_ORDER_STATUS.FAILURE:
            return {
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};
