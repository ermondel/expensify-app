import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}));
