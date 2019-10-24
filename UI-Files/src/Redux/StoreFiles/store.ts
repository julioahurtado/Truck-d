import { createStore, combineReducers } from 'redux';
import customer from '../ReducerFiles/CustomerReducer';
import vendor from '../ReducerFiles/VendorReducer';

// create root state and initialize store
let rootReducer = combineReducers({customer, vendor});
export const store = createStore(rootReducer);