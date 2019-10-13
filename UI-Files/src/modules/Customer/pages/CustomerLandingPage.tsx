import * as React from 'react'
 
interface CustomerLandingPageProps{
    description: String;
}

export default class CustomerLandingPage extends React.Component<CustomerLandingPageProps> {
    render(){
        return (
            <p>{this.props.description}</p>
        )
    }
}