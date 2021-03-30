import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import thunk from 'redux-thunk';
import { cartReducers } from './Reducers/CartReducers';

const initialState = {
    cart:{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};
const reducer = combineReducers({
    cart:cartReducers,
}) 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;