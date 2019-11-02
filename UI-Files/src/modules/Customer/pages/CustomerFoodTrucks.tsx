
import * as React from 'react'
import { Form, Row, Col, ListGroup } from 'react-bootstrap'
import CustomerFoodTrucksElement from './CustomerFoodTruckElement'



export default class CustomerFoodTrucks extends React.Component<any> {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Food Trucks</Form.Label>
                        <Form.Control type="foodtruck" placeholder="vendor" />
                    </Form.Group>
                </Form>
                <Row>
                    <Col sm={4}>
                        <CustomerFoodTrucksElement vendorName="Food Truck1"
                            vendorDescription="Mexican Food"
                            vendorHours="9:00am - 5:00pm"
                            vendorAddress="123 test street, Santa Cruz">
                        </CustomerFoodTrucksElement>
                        <CustomerFoodTrucksElement vendorName="Food Truck2"
                            vendorDescription="Hot Dogs"
                            vendorHours="8:00am - 4:00pm"
                            vendorAddress="123 test street, Santa Cruz">
                        </CustomerFoodTrucksElement>
                        <CustomerFoodTrucksElement vendorName="Food Truck3"
                            vendorDescription="BBQ"
                            vendorHours="7:00am - 5:00pm"
                            vendorAddress="123 test street, Santa Cruz">
                        </CustomerFoodTrucksElement>
                        <CustomerFoodTrucksElement vendorName="Food Truck4"
                            vendorDescription="Seafood"
                            vendorHours="10:00am - 3:00pm"
                            vendorAddress="123 test street, Santa Cruz">
                        </CustomerFoodTrucksElement>
                        <CustomerFoodTrucksElement vendorName="Food Truck5"
                            vendorDescription="Chinese Food"
                            vendorHours="1:00pm - 5:00pm"
                            vendorAddress="123 test street, Santa Cruz">
                        </CustomerFoodTrucksElement>
                    </Col>
                </Row>
            </div>
        )
    }
}