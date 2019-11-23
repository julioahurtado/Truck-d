import { } from '../../ActionFiles/VendorActions';
import { OrderItem } from '../../InterfaceFiles/types';

export interface OrderState {
    items?: OrderItem[]
};

let orderState: OrderState = {
    items: []
};

type OrderActions = ;
export const Login = (state: OrderState = orderState, action: OrderActions): OrderState => {
    switch(action.type) {

        

        default:
            return state
    }
};