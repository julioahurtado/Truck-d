import * as React from 'react'
import { Button } from 'react-bootstrap'
import { cancelOrder, finishOrder } from '../../../Redux/ActionFiles/VendorActions';
import { Order, OrderItem } from '../../../Redux/InterfaceFiles/types';
import { connect } from 'react-redux';

interface VendorOrderQueueItemProps extends VendorOrderQueueItemDispatchProps {
    order: Order
}

interface VendorOrderQueueItemDispatchProps {
    cancelOrder: any
    finishOrder: any
}

export class VendorOrderItem extends React.Component<VendorOrderQueueItemProps> {

    handleCancel(){
        cancelOrder(this.props.order)
    }

    handleFinish(){
        finishOrder(this.props.order)
    }

    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <p>
                    Order ID: {this.props.order.id}
                </p>
                <p>
                    Customer: {this.props.order.customer.name}
                </p>
                <ul>
                    {this.props.order.items && this.props.order.items.map((order: OrderItem) => 
                            {
                                return (
                                <li>{order.quantity} x: {order.name}</li>
                                )
                            }
                    )}
                </ul>
                <p>Price: {this.props.order.price}</p>
                <Button variant="success" onClick={() => this.handleCancel()}>Cancel</Button>
                <Button variant="success" onClick={() => this.handleFinish()}>Finish</Button>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch: any): VendorOrderQueueItemDispatchProps => ({
    cancelOrder: (order: Order) =>
        dispatch(cancelOrder(order)),
    finishOrder: (order: Order) =>
        dispatch(finishOrder(order))
});

const VendorOrderQueueItem = connect(
    null,
    mapDispatchToProps
)(VendorOrderItem)

export default VendorOrderQueueItem;
