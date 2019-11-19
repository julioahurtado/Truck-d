import { CHECKOUT_ORDER, CheckoutOrderAction } from '../../ActionFiles/CustomerActions';
import { MenuItem, VendorInfo } from '../../InterfaceFiles/types'

interface OrderState {
    cart?: MenuItem[] | null,
    vendor?: VendorInfo | null,
    isLoading?: Boolean,
    error?: Error | null
}

let menuState: OrderState = {
    cart: null,
    vendor: null,
    isLoading: false,
    error: null
}

export const Menu = (state = menuState, action: CheckoutOrderAction): OrderState => {
    switch(action.type) {

        case CHECKOUT_ORDER:
            return {
                ...state,
                cart: action.payload.cart,
                vendor: action.payload.vendor
            };

        default:
            return state
    }
};
