import { CHECKOUT_ORDER, SEND_ORDER_STATUS, CheckoutOrderAction, SendOrderAction } from '../../ActionFiles/CustomerActions';
import { OrderItem, VendorInfo } from '../../InterfaceFiles/types'

export interface CheckoutState {
    cart?: OrderItem[] | null,
    price?: number,
    vendor?: VendorInfo | null,
    orderNumber?: number
    isLoading?: Boolean,
    error?: Error | null
}

let CheckoutState: CheckoutState = {
    cart: null,
    price: 0,
    vendor: null,
    orderNumber: -1,
    isLoading: false,
    error: null
}

// TODO: break app state into individual components rather than by page. ie make cart its own state.
export const Checkout = (state = CheckoutState, action: CheckoutOrderAction | SendOrderAction): CheckoutState => {
    switch(action.type) {

        case CHECKOUT_ORDER:
            return {
                ...state,
                cart: action.payload.cart,
                vendor: action.payload.vendor
            };

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
