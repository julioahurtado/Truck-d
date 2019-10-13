import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerLandingPage from './modules/Customer/pages/CustomerLandingPage';
import * as serviceWorker from './StartFiles/serviceWorker';

ReactDOM.render(
<CustomerLandingPage 
    description='Test'/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA∂
serviceWorker.unregister();
