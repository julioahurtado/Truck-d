import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { Customer } from '../ReducerFiles/CustomerReducer';
import { Vendor } from '../ReducerFiles/VendorReducer';

// create root state and initialize store
let rootReducer = combineReducers({
    Customer,
    Vendor
});

export const store = createStore(rootReducer, applyMiddleware(thunk));