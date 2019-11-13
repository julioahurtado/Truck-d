
import * as React from 'react'
import { ListGroup } from 'react-bootstrap'

interface CustomerMenuProps extends deleteWhenReduxIsAdded{
    vendor?: any;
    isLoading?: Boolean;

}

interface deleteWhenReduxIsAdded {
    RestaurantName: String;
    items: any[];
}


export default class CustomerMenu extends React.Component<CustomerMenuProps> {
   
    render() {
        return (
            <div>
                    <h1>{this.props.RestaurantName}</h1>
                    <br/>
                        {!this.props.isLoading && 
                        <ListGroup style={{padding: '2px'}}>
                            {this.props.items.map((item: any) => 
                                {
                                    return (
                                        <div>

                                        </div>
                                    )
                                })}
                        </ListGroup>
                            }
            </div>
        )
    }
}