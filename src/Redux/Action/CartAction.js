// import * as actionTypes from '../Constants/CartConstants';
// import axios from 'axios';

// export const addToCart = (id,qty) => async (dispath)=>{
//     const url = 'https://tranducbo.herokuapp.com';
//     const {data} = await axios.get(`${url}/products/${id}`);

//     dispath({
//         type:actionTypes.ADD_TO_CART,
//         Payload:{
//             products:data._id,
//             name:data.name,
//             imageUrl:data.imageUrl,
//             price:data.price,
//             countInStock:data.countInStock,
//             qty
//         }
//     })
//     localStorage.setItem('cart',JSON.stringify(getState().cart))
// }

// export const removeFromCart = () =>(dispath,getState) =>{
//     dispath({
//         type:actionTypes.REMOVE_FROM_CART,
//         payload:id
//     })
//     localStorage.setItem('cart',JSON.stringify(setState().cart.cartItems))
// }