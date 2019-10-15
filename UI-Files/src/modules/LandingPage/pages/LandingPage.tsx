
import * as React from 'react'
import * as Router from 'react-router-dom'
 
interface LandingPageProps{
    description: String;
}

export default class LandingPage extends React.Component<LandingPageProps> {
    render(){
        return (
            <div>
                <h1>Choose your experience</h1>
                <div>
                    <button>Customer</button>
                    <button>Vendor</button>
                </div>
            </div>
        )
    }
}