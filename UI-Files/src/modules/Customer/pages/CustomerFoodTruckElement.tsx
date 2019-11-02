import * as React from 'react'
import CustomerFoodTrucks from './CustomerFoodTrucks'
import { Button } from 'react-bootstrap'
import './style.css'
interface CustomerFoodTruckElementProps {
    vendorName: Object;
}


export default class CustomerFoodTruckElement extends React.Component<CustomerFoodTruckElementProps> {
    render() {
        return (
            <div>
                <Button className="vendorname">{this.props.vendorName}
                </Button>
            </div>

        )
    }
}