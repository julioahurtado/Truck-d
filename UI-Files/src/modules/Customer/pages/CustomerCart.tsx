
import * as React from 'react'
 
import '../components/CustomerVendorSearch'
import '../components/CustomerVendorListItem'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'



interface CustomerCartProps{
    itemName: string
    itemDescriptiion :string
    itemPrice :string
}


class ItemsInCart extends React.Component<CustomerCartProps> {
    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <p>
                    {this.props.itemName}
                </p>
                <p>
                    {this.props.itemDescriptiion}
                    <p style={{ textAlign:  'right'}}>
                        {this.props.itemPrice}
                    </p>
                </p>
                <div className='text-right'>          
                        <Button variant="warning" style={{margin: .5}} type="button">-</Button>
                        <Button variant="success" style={{margin: .5}}type="button">+</Button>
                        <Button variant="danger" style={{margin: .5}}type="button">x</Button>
                </div>
                
            </div>

        )
    }
}

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
                    <ItemsInCart
                        itemName="Burrito Asada"
                        itemDescriptiion="Big Burrito of Carne Asada, Puerto Vallarta Style."
                        itemPrice="  $8.99"
                        >
                           
                    </ItemsInCart>
                    <ItemsInCart
                        itemName="Nachos Asada"
                        itemDescriptiion="Loaded plate of delicious nachos with Carne Asada, Puerto Vallarta Style."
                        itemPrice="  $7.99">
                            
                    </ItemsInCart>
                    <ItemsInCart
                        itemName="Tacos Al Pastor plate"
                        itemDescriptiion="3 Tacos Al pastor plate with grilled onions, choice of sauce on top and rich cilantro leaves."
                        itemPrice="  $10.99"
                        >
                    </ItemsInCart>
                </ListGroup>
                    
            </div>
        )
    }
}