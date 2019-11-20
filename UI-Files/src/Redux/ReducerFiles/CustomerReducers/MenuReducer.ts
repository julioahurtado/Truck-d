import { GET_MENU_STATUS, GetMenuAction, UpdateMenuWithVendorAction, UPDATE_MENU_WITH_VENDOR, CHECKOUT_ORDER, CheckoutOrderAction, ADD_ITEM_TO_CART, AddItemToCartAction, RemoveItemFromCartAction, REMOVE_ITEM_FROM_CART } from '../../ActionFiles/CustomerActions';
import { MenuItem, VendorInfo, OrderItem } from '../../InterfaceFiles/types'

export interface MenuState {
    menu?: MenuItem[] | null,
    vendor?: VendorInfo | null,
    cart?: OrderItem[] | null,
    isLoading?: Boolean,
    error?: Error | null
}

export const initState: MenuState = {
    menu: null,
    vendor: null,
    cart: null,
    isLoading: false,
    error: null
}

// TODO: Handle state for add/remove actions on the menu page
type CartActions = AddItemToCartAction | RemoveItemFromCartAction | CheckoutOrderAction
export const Menu = (state: MenuState = initState, action: GetMenuAction | CartActions | UpdateMenuWithVendorAction): MenuState => {
    switch(action.type) {

        case CHECKOUT_ORDER:
            return {
                ...state,
                menu: null,
                cart: null
            };

        // Add vendor data to menu page
        case UPDATE_MENU_WITH_VENDOR:
            return {
                ...state,
                vendor: action.payload
            };

        // Add or update item in cart
        case ADD_ITEM_TO_CART:
            let itemIndex = -1;
            if (state.cart) {
                itemIndex = state.cart.findIndex(item => item.id == action.payload.id)
            }

            // update existing cart item with incremented quantity
            if (itemIndex != -1) {
                const newCart = state.cart && [...state.cart]
                newCart && (newCart[itemIndex].quantity += 1)

                return {
                    ...state,
                    cart: newCart
                }
            } else return {
                ...state,
                cart: state.cart && [
                    ...state.cart,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }

        // remove a menu item from the cart
        case REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cart: state.cart && state.cart.filter(item => item.id != action.payload.id),
            }

        // Begin menu fetch
        case GET_MENU_STATUS.BEGIN:
            return {
                ...state,
                isLoading: true
            };

        // Menu successfully retrieved
        case GET_MENU_STATUS.SUCCESS:
            return {
                ...state,
                menu: action.payload,
                isLoading: false,
            };

        // Menu retrieval failed
        case GET_MENU_STATUS.FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };

        default:
            return state
    }
};