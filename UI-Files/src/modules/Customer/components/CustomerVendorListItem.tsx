import * as React from 'react'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'
import '../css/Style.css'

interface CustomerVendorListItemProps {
    vendorName: string;
    vendorDesription: string;
    vendorCuisine: string;
    vendorHours: string;
    
}


export default class CustomerVendorListItem extends React.Component<CustomerVendorListItemProps> {
    render() {
        return (
                    <div className="listRes">
                            <ListGroup.Item action href="/customer/menu/:vendorName">
                                <p>
                                    {this.props.vendorName}
                                </p>
                                <p>
                                    {this.props.vendorDesription}
                                </p>
                                <p>
                                    {this.props.vendorCuisine}
                                </p>
                                <p>
                                    {this.props.vendorHours}
                                </p>
                            </ListGroup.Item>
                </div>


        )
    }
}

