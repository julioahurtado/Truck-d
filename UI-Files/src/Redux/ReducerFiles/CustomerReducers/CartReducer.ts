import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, REMOVE_ITEM_TYPE_FROM_CART, AddItemToCartAction, RemoveItemFromCartAction, RemoveItemTypeFromCartAction } from '../../ActionFiles/CustomerActions';
import { OrderItem } from '../../InterfaceFiles/types'

export interface CartState {
    items?: OrderItem[],
    price?: number,
}

let cartState: CartState = {
    items: [],
    price: 0,
}

type CartActions = AddItemToCartAction | RemoveItemFromCartAction | RemoveItemTypeFromCartAction
export const Cart = (state: CartState = cartState, action:  CartActions): CartState => {
    switch(action.type) {

        // Add or update item in cart
        case ADD_ITEM_TO_CART:
            let itemIndex = -1;
            if (state.items) {
                itemIndex = state.items.findIndex(item => item.id == action.payload.id)
            }

            // update existing cart item with incremented quantity
            const price = (state.price) ? state.price : 0;
            if (itemIndex != -1) {
                const newCart = state.items && [...state.items]
                newCart && (newCart[itemIndex].quantity += 1)

                return {
                    ...state,
                    items: newCart,
                    price: price + action.payload.price
                }
            } else {
                if (state.items) {
                    // add new item to existing cart
                    return {
                        ...state,
                        items: [
                            ...state.items,
                            {
                                ...action.payload,
                                quantity: 1
                            }
                        ],
                        price: price + action.payload.price
                    }
                // add new item to empty cart
                } else return {
                    ...state,
                    items: [{...action.payload, quantity: 1}],
                    price: action.payload.price
                }
            }

        case REMOVE_ITEM_FROM_CART:
            if (state.items && state.items.findIndex(item => item.id == action.payload.id) != -1) {
                return {
                    ...state,
                    items: state.items && state.items.map(item => {
                        if (item.id == action.payload.id) {
                            console.log("item found:" + item.name)
                            return {
                                ...item,
                                quantity: item.quantity - 1
                            }
                        } else return { ...item }
                    }).filter(item => item.quantity > 0),
                    price: state.price && state.price - action.payload.price
                };
            } else return { ...state }

        // removes all items with specified type from cart
        case REMOVE_ITEM_TYPE_FROM_CART:
            let removeIndex = -1;
            if (state.items) {
                removeIndex = state.items.findIndex(item => item.id == action.payload.id)
            }

            // update existing cart item with incremented quantity
            if (removeIndex != -1 && state.items) {
                const removePrice = state.items[removeIndex].quantity * action.payload.price;
                return {
                    ...state,
                    items: state.items.filter(item => item.id != action.payload.id),
                    price: state.price && state.price - removePrice
                }
            } else return {
                ...state
            }

        default:
            return state
    }
};
