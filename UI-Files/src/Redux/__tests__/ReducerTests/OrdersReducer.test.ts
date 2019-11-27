import {
  Orders,
  ordersState,
  OrdersState
} from "../../ReducerFiles/VendorReducers/OrdersReducer";
import {
  fetchOrdersSucccess,
  cancelOrderSuccess,
  finishOrderSucccess
} from "../../ActionFiles/VendorActions";
import { Order } from "../../InterfaceFiles/types";

const orders: Order[] = [
  {
    id: 2,
    customer: {
      name: "Mathew",
      email: "mscolari@ucsc.edu",
      phone: 1234567890
    },
    items: [
      {
        id: 2,
        name: "Milkshake",
        description: "chocolate",
        price: 1.99,
        quantity: 3
      },
      {
        id: 7,
        name: "Fries",
        description: "French Fries",
        price: 1.2,
        quantity: 1
      }
    ],
    price: 1.99
  },
  {
    id: 1,
    customer: {
      name: "Tim",
      email: "tim@ucsc.edu",
      phone: 92345786438
    },
    items: [
      {
        id: 89,
        name: "Tacos",
        description: "soft tacos",
        price: 2.99,
        quantity: 9
      }
    ],
    price: 1.99
  }
];

const removeOrder: Order = {
  id: 1,
  customer: {
    name: "Tim",
    email: "tim@ucsc.edu",
    phone: 92345786438
  },
  items: [
    {
      id: 89,
      name: "Tacos",
      description: "soft tacos",
      price: 2.99,
      quantity: 9
    }
  ],
  price: 1.99
};

const orders_base_state: OrdersState = {
  ...ordersState,
  orders: orders
};

describe("The Orders Reducer", () => {
  it("fetch the orders for a vendor", () => {
    expect(Orders(ordersState, fetchOrdersSucccess(orders))).toEqual(
      orders_base_state
    );
  });

  it("remove an order from the orders list", () => {
    expect(Orders(orders_base_state, cancelOrderSuccess(removeOrder))).toEqual(
      Object.assign({}, orders_base_state, {
        ...orders_base_state,
        orders: [
          {
            id: 2,
            customer: {
              name: "Mathew",
              email: "mscolari@ucsc.edu",
              phone: 1234567890
            },
            items: [
              {
                id: 2,
                name: "Milkshake",
                description: "chocolate",
                price: 1.99,
                quantity: 3
              },
              {
                id: 7,
                name: "Fries",
                description: "French Fries",
                price: 1.2,
                quantity: 1
              }
            ],
            price: 1.99
          }
        ]
      })
    );
  });

  it("remove an order from the orders list", () => {
    expect(Orders(orders_base_state, finishOrderSucccess(removeOrder))).toEqual(
      Object.assign({}, orders_base_state, {
        ...orders_base_state,
        orders: [
          {
            id: 2,
            customer: {
              name: "Mathew",
              email: "mscolari@ucsc.edu",
              phone: 1234567890
            },
            items: [
              {
                id: 2,
                name: "Milkshake",
                description: "chocolate",
                price: 1.99,
                quantity: 3
              },
              {
                id: 7,
                name: "Fries",
                description: "French Fries",
                price: 1.2,
                quantity: 1
              }
            ],
            price: 1.99
          }
        ]
      })
    );
  });
});
