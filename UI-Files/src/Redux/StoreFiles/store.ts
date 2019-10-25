import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import customer from '../ReducerFiles/CustomerReducer';
import vendor from '../ReducerFiles/VendorReducer';

// create root state and initialize store
let rootReducer = combineReducers({customer, vendor});
export const store = createStore(rootReducer, applyMiddleware(thunk));