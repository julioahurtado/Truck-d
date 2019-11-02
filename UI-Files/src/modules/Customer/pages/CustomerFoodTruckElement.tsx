import * as React from 'react'
import CustomerFoodTrucks from './CustomerFoodTrucks'
import { Button, Row } from 'react-bootstrap'
import '../css/Style.css';
interface CustomerFoodTruckElementProps {
    vendorName: String;
    vendorDescription: String;
    vendorHours: String;
    vendorAddress: String;
}


export default class CustomerFoodTruckElement extends React.Component<CustomerFoodTruckElementProps> {
    render() {
        return (
            <div>
                <Button variant="dark" className="vendorname">{this.props.vendorName}
                </Button>
                <div>Description: {this.props.vendorDescription} </div>
                <div>Hours: {this.props.vendorHours}</div>
                <div>Address: {this.props.vendorAddress}</div>
            </div>

        )
    }
}