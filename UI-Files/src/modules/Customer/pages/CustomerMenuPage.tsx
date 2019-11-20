
import * as React from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import MenuItem from '../components/CustomerMenuItem'
import '../css/Style.css'
import { Link } from 'react-router-dom'

interface CustomerMenuProps {
    
}


export default class CustomerMenu extends React.Component<CustomerMenuProps> {
    render() {
        return (
            <div>
            <div>
                <h1>Menu:</h1>
                <MenuItem
                    itemName="Burrito Asada"
                    itemDescriptiion="Big Burrito of Carne Asada, Puerto Vallarta Style."
                    itemPrice="  $8.99"
                    >
                </MenuItem>

                <MenuItem
                    itemName="Al pastor Taco"
                    itemDescriptiion="One Al pastor Taco."
                    itemPrice="  $2.50"
                    >
                </MenuItem>

                <MenuItem
                    itemName="Al pastor Taco"
                    itemDescriptiion="One Al pastor Taco."
                    itemPrice="  $2.50"
                    >
                </MenuItem>
            </div>
            <div className="centered">
                <Row> 
                
                    <Col xs={6}>
                    <Link to="/customer">
                    <Button style={{position: 'relative', bottom: '-20px', margin: 5, left: '-20px'}} variant="secondary"  type="button">Return</Button>
                    </Link>
                    </Col>
                    <Col xs={6}>
                    <Link to="/customer/order">
                    <Button variant="primary" style={{position: 'relative', bottom: '-20px', margin: 5, right: '-20px'}} type="button">Checkout</Button>
                    </Link>
                    </Col>
                </Row>
            </div>
        </div>
        )
    }
}