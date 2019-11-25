import * as React from "react";
import { RootState } from "../../../Redux/StoreFiles/store";
import { connect } from "react-redux";
import { OrdersState } from "../../../Redux/ReducerFiles/VendorReducers/OrdersReducer";
import { fetchOrders } from "../../../Redux/ActionFiles/VendorActions";
import VendorOrderQueueItem from "../components/VendorOrderQueueItem";
import { Order } from "../../../Redux/InterfaceFiles/types";
import { Table } from "react-bootstrap";

interface VendorOrderQueueProps
  extends OrdersState,
    VendorOrderQueueDispatchProps {
  id: number;
}

interface VendorOrderQueueDispatchProps {
  fetchOrders?: any;
}

const orders_test: Order[] = [
  {
    id: 1,
    customer: {
      name: "Jim",
      email: "jim@gmail.com",
      phone: 1234567890
    },
    items: [
      {
        id: 1,
        name: "Big Mac",
        description: "Cheeseburger",
        price: 4.99,
        quantity: 2
      },
      {
        id: 2,
        name: "Fries",
        description: "French fries",
        price: 1.99,
        quantity: 3
      }
    ],
    price: 15.98
  },
  {
    id: 2,
    customer: {
      name: "Joe",
      email: "joe@gmail.com",
      phone: 8751209836
    },
    items: [
      {
        id: 9,
        name: "Taco",
        description: "Mexican taco",
        price: 3.99,
        quantity: 4
      },
      {
        id: 54,
        name: "Rice",
        description: "Mexican rice",
        price: 1.99,
        quantity: 3
      },
      {
        id: 33,
        name: "Beans",
        description: "Refried beans",
        price: 1.99,
        quantity: 1
      }
    ],
    price: 23.89
  }
];

class OrderQueue extends React.Component<VendorOrderQueueProps> {
  timer: any;
  fetch_orders() {
    this.props.fetchOrders(this.props.id);
    this.timer = setTimeout(this.fetch_orders.bind(this), 10000);
  }
  componentDidMount() {
    this.fetch_orders();
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div>
        <h1>Orders</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Order</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.orders &&
              this.props.orders.map((order: Order) => {
                return (
                  <VendorOrderQueueItem order={order}></VendorOrderQueueItem>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): VendorOrderQueueProps => ({
  id: state.vendor.profile.id,
  orders: state.vendor.queue.orders,
  isFetching: state.vendor.queue.isFetching,
  isLoading: state.vendor.queue.isLoading,
  error: state.vendor.queue.error
});

const mapDispatchToProps = (dispatch: any): VendorOrderQueueDispatchProps => ({
  fetchOrders: (id: number) => dispatch(fetchOrders(id))
});

const VendorOrderQueue = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderQueue);

export default VendorOrderQueue;
