import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { Customer } from '../ReducerFiles/CustomerReducer';
import { Vendor } from '../ReducerFiles/VendorReducer';

// create root state and initialize store
let rootReducer = combineReducers({
    Customer,
    Vendor
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));