import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import proReducer from './proReducer';

export default combineReducers({
    products: productsReducer,
    product: proReducer,
});