
import * as React from 'react'
 
import '../components/CustomerVendorSearch'
import '../components/CustomerVendorListItem'
import { Form, Row, Col, ListGroup, Container, Button } from 'react-bootstrap'

interface CustomerCartProps{
    vendorName: string
    itemName: string
    itemDescriptiion :string
    foodType: string
}


class ItemsInCart extends React.Component<CustomerCartProps> {
    render() {
        return (
            <div style={{background: '#FFFFFF', borderWidth: '3px', borderColor: 'black', borderStyle: "solid", padding: '2px', }}>
                <p>
                    {this.props.vendorName}
                </p>
                <p>
                    {this.props.itemName}
                </p>
                <p>
                    {this.props.itemDescriptiion}
                </p>
                <p>
                    {this.props.foodType}
                </p>
                <button>add one more</button>
                <button>remove</button>
            </div>

        )
    }
}

export default class CustomerCart extends React.Component<any> {
    render(){
        return (
            <div>
               <h1>My Cart</h1>

                <h2>Saved Items:</h2>

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
                        vendorName="Vallarta"
                        itemName="Burrito Asada"
                        itemDescriptiion="Big Burrito of Carne Asada, Puerto Vallarta Style."
                        foodType="Mexican"
                        >
                           
                    </ItemsInCart>
                    <ItemsInCart
                        vendorName="Vallarta"
                        itemName="Nachos Asada"
                        itemDescriptiion="Loaded plate of delicious nachos with Carne Asada, Puerto Vallarta Style."
                        foodType="Mexican"
                        >
                            
                    </ItemsInCart>
                    <ItemsInCart
                        vendorName="Vallarta"
                        itemName="Tacos Al Pastor plate"
                        itemDescriptiion="3 Tacos Al pastor plate with grilled onions, choice of sauce on top and rich cilantro leaves."
                        foodType="Mexican"
                        >
                            
                    </ItemsInCart>
                </ListGroup>
                    
                <button>Send Order</button>
            </div>
        )
    }
}