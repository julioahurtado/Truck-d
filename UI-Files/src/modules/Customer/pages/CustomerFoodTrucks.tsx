
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
                        <Form.Control type="foodtruck" placeholder="food truck" />
                    </Form.Group>
                </Form>
                <Row>
                    <Col sm={4}>
                        <ListGroup>
                            <CustomerFoodTrucksElement vendorName="Food Truck1">
                            </CustomerFoodTrucksElement>
                            <CustomerFoodTrucksElement vendorName="Food Truck2">
                            </CustomerFoodTrucksElement>
                            <CustomerFoodTrucksElement vendorName="Food Truck3">
                            </CustomerFoodTrucksElement>
                            <CustomerFoodTrucksElement vendorName="Food Truck4">
                            </CustomerFoodTrucksElement>
                            <CustomerFoodTrucksElement vendorName="Food Truck5">
                            </CustomerFoodTrucksElement>
                            <CustomerFoodTrucksElement vendorName="Food Truck6">
                            </CustomerFoodTrucksElement>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}