
import * as React from 'react'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'
import CustomerVendorListItem from './CustomerVendorListItem'

interface CustomerVendorSearchProps {
    vendorList?: any[];
}

interface CustomerVendorSearchState {
    searchField: any;
}


export default class CustomerVendorSearch extends React.Component<CustomerVendorSearchProps,CustomerVendorSearchState> {

    constructor(props: CustomerVendorSearchProps){
        super(props);
        this.state = {
            searchField: React.createRef()
        }
    }

    handleChange(){
        console.log(this.state.searchField.current.value);
    }

    render() {
        return (
            <div>
                <div style={{margin: 10}}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control ref={this.state.searchField} onChange={() => this.handleChange()} type="text" placeholder="Search..." />
                    </Form.Group>
                </div>
                <ListGroup style={{padding: '2px'}}>
                    {/* {this.props.vendorList.map((vendor, key) => {
                        <CustomerVendorListItem 
                            vendorName={vendor.name}
                            vendorDesription={vendor.desription}
                            vendorCuisine={vendor.cuisine}
                            vendorHours={vendor.hours}
                        ></CustomerVendorListItem>
                    })} */}
                    <CustomerVendorListItem 
                        vendorName="Vallarta"
                        vendorDesription="Amazing Burritos"
                        vendorCuisine="Mexican"
                        vendorHours="9am-10pm"
                        >
                    </CustomerVendorListItem>
                    <CustomerVendorListItem 
                        vendorName="Los Pericos"
                        vendorDesription="Amazing Burritos"
                        vendorCuisine="Mexican"
                        vendorHours="9am-10pm"
                        >
                    </CustomerVendorListItem>
                    <CustomerVendorListItem 
                        vendorName="Kianti's"
                        vendorDesription="Yummy pasta"
                        vendorCuisine="Italian"
                        vendorHours="12pm-10pm"
                        >
                    </CustomerVendorListItem>
                </ListGroup>
            </div>
        )
    }
}