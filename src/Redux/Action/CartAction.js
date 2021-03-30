import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constants/CartConstants'
import axios from 'axios';
import { AsyncStorage } from '@react-native-community/async-storage';

export const addToCart = (productsID) => async (dispath,getState)=>{
    const url = 'https://tranducbo.herokuapp.com';
    const {data} = await axios.get(`${url}/products/${productsID}`);
    dispath({
        type:ADD_TO_CART,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            products:data._id,
        },
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productsID) => (dispath, getState) =>{
    dispath({
        type:REMOVE_FROM_CART,
        payload:productsID
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}