import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constants/CartConstants'
import axios from 'axios';

export const addToCart = (id) => async (dispath,getState)=>{
    // const {data} = await axios.get(`/api/products/${productsID}`);
    // console.log({data})
    const url = 'https://tranducbo.herokuapp.com';
    const {data} = await axios.get(`${url}/products/${id}`);
    dispath({
        type:ADD_TO_CART,
        payload:{
            name:data.name,
            image:data.image,
            price:data.price,
            countInStock:data.countInStock,
            products:data._id,
            Qty,
        }
    })
    localStorage.setItem('cart',JSON.stringify(getState().cart))
}

export const removeFromCart = (id) =>(dispath,getState) =>{
    dispath({
        type:REMOVE_FROM_CART,
        payload:id
    })
    localStorage.setItem('cart',JSON.stringify(setState().cart.cartItems))
}