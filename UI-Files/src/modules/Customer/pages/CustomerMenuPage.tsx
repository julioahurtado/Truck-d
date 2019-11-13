
import * as React from 'react'
import { Button } from 'react-bootstrap'
import MenuList from '../components/MenuList'
import '../css/Style.css'

interface CustomerMenuProps {
    RestaurantName: String;
    
}


class RestaurantName extends React.Component<CustomerMenuProps>{
    render(){
        return(
            <div>
                <h1 >{this.props.RestaurantName}</h1>
                <h1>Menu:</h1>
            </div>
        )
    }
}



export default class CustomerMenu extends React.Component<CustomerMenuProps> {
    render() {
        return (
            <div>
                <RestaurantName RestaurantName="Vallarta">
                <h1>Menu</h1>
                </RestaurantName>

                
                <div className='text-center'>  
                <Button style={{margin: .5}}variant="primary" type="button">Appetizer</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Breakfast</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Lunch</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Dinner</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Drinks</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Specials</Button>
                <Button style={{margin: .5}}variant="primary" type="button">Desert</Button>
                </div>  
                <MenuList
                    itemName="Burrito Asada"
                    itemDescriptiion="Big Burrito of Carne Asada, Puerto Vallarta Style."
                    itemPrice="  $8.99"
                    >
                </MenuList>

                <MenuList
                    itemName="Al pastor Taco"
                    itemDescriptiion="One Al pastor Taco."
                    itemPrice="  $2.50"
                    >
                </MenuList>

                <MenuList
                    itemName="Al pastor Taco"
                    itemDescriptiion="One Al pastor Taco."
                    itemPrice="  $2.50"
                    >
                </MenuList>
            </div>
        )
    }
}