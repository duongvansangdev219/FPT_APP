// import * as actionTypes from '../Constants/ProductConstants';
// import axios from 'axios';

// export const getProducts = ()=> async(dispatch)=>{
//     try{
//         dispatch({type:actionTypes.GET_PRODUCTS_REQUEST})
//         const url = 'https://tranducbo.herokuapp.com';  
//         const {data} = await axios.get(`${url}/products`);
//         dispatch({
//             type: actionTypes.GET_PRODUCTS_SUCCESS,
//             payload:data
//         })
//     }catch(error){
//         dispatch({
//             type:actionTypes.GET_PRODUCTS_DETAIL_FAILL,
//             payload:error.response && error.response.data.message 
//                 ? error.response.data.message 
//                 : error.response,
//         })
//     }
// };

// export const getProductsDetails = (id)=> async(dispatch)=>{
//     try{
//         dispatch({type:actionTypes.GET_PRODUCTS_DETAIL_REQUEST})
//         const url = 'https://tranducbo.herokuapp.com';
//         const {data} = await axios.get(`${url}/products`);
//         dispatch({
//             type: actionTypes.GET_PRODUCTS_DETAIL_SUCCESS,
//             payload:data
//         })
//     }catch(error){
//         dispatch({
//             type:actionTypes.GET_PRODUCTS_DETAIL_FAILL,
//             payload:error.response && error.response.data.message 
//                 ? error.response.data.message 
//                 : error.response,
//         })
//     }
// };

// export const removeProductsDetails = (dispatch) =>{
//     dispatch({
//         type: actionTypes.GET_PRODUCTS_DETAIL_RESET,
//     })
// }