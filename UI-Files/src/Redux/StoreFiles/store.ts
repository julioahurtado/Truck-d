import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { Customer, CustomerState } from '../ReducerFiles/CustomerReducer';
import { Vendor, VendorState } from '../ReducerFiles/VendorReducer';

export interface RootState {
    customer: CustomerState,
    vendor: VendorState
}

// create root state and initialize store
let rootReducer = combineReducers<RootState>({
    customer: Customer,
    vendor: Vendor,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));