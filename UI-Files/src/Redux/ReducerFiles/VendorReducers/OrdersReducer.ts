import {
  FETCH_ORDERS_STATUS,
  CANCEL_ORDER_STATUS,
  FINISH_ORDER_STATUS,
  FetchOrdersAction,
  CancelOrderAction,
  FinishOrderAction
} from "../../ActionFiles/VendorActions";
import { Order } from "../../InterfaceFiles/types";

export interface OrdersState {
  orders?: Order[];
  isFetching?: boolean;
  isLoading?: boolean;
  error?: Error | null;
}

let ordersState: OrdersState = {
  orders: [],
  isFetching: false,
  isLoading: false,
  error: null
};

type OrderActions = CancelOrderAction | FinishOrderAction | FetchOrdersAction;
export const Orders = (
  state: OrdersState = ordersState,
  action: OrderActions
): OrdersState => {
  switch (action.type) {
    case FETCH_ORDERS_STATUS.BEGIN:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_ORDERS_STATUS.SUCCESS:
      return {
        ...state,
        orders: action.payload,
        isFetching: false
      };

    case FETCH_ORDERS_STATUS.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case FINISH_ORDER_STATUS.BEGIN:
    case CANCEL_ORDER_STATUS.BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case FINISH_ORDER_STATUS.SUCCESS:
    case CANCEL_ORDER_STATUS.SUCCESS:
      if (state.orders) {
        return {
          ...state,
          orders: state.orders.filter(
            item => action.payload && item.id != action.payload.id
          ),
          isLoading: false
        };
      } else return { ...state };

    case FINISH_ORDER_STATUS.FAILURE:
    case CANCEL_ORDER_STATUS.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
};
