
import * as React from 'react'
import { Button } from 'react-bootstrap'
import '../css/Style.css'
//import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'

interface MenuListProps{
    itemName: string
    itemDescriptiion :string
    itemPrice :string
}
export default class MenuList extends React.Component<MenuListProps> {
    render() {
        return (
            <div style={{ background: '#FFFFFF', borderWidth: '2px', borderColor: 'black', borderStyle: "solid", padding: '2px'}}>
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
                    </div>  
            </div>

        )
    }
}
