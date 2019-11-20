
import * as React from 'react'
 
import '../components/CustomerVendorSearch'
import '../components/CustomerVendorListItem'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'
import CustomerVendorListItem from '../components/CustomerVendorListItem'
import { Link } from 'react-router-dom'

export default class CustomerCart extends React.Component<any> {
    render(){
        return (
            <Form>
            <div>
 
               <h1>Cart</h1>

                <ListGroup style={{padding: '2px'}}>
                    {/* {this.props.vendorList.map((vendor, key) => {
                        <CustomerVendorListItem 
                            vendorName={vendor.name}
                            vendorDesription={vendor.desription}
                            vendorCuisine={vendor.cuisine}
                            vendorHours={vendor.hours}
                        ></CustomerVendorListItem>
                    })} */}
                </ListGroup>
                    
            </div>
            <div className="centered">
            <Row> 

                    <Col xs={6}>
                    <Link to="/customer/menu/:vendorName'">
                    <Button style={{position: 'relative', bottom: '-20px', margin: 5, left: '-20px'}} variant="secondary"  type="button">Return</Button>
                    </Link>
                    </Col>
                    <Col xs={6}>
                    <Link to="/customer">
                    <Button variant="warning" style={{position: 'relative', bottom: '-20px', margin: 5, right: '-20px'}} type="button">Cancel</Button>
                    </Link>
                    </Col>
            </Row>
        </div>
        </Form>
        )
    }
}