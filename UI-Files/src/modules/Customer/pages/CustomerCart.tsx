
import * as React from 'react'
 
import '../components/CustomerVendorSearch'
import '../components/CustomerVendorListItem'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'

export default class CustomerCart extends React.Component<any> {
    render(){
        return (
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
        )
    }
}