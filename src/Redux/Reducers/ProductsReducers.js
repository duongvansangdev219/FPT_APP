// import * as actionTypes from '../Constants/CartConstants';
// export const getProductsReducer =(state={products:[]})=>{
//     switch (action.type) {
//         case actionTypes.GET_PRODUCTS_REQUEST:
//             return{
//                 loadding:true,
//                 products:[]
//             };
//         case actionTypes.GET_PRODUCTS_SUCCESS:
//             return{
//                 loadding:false,
//                 products:action.payload
//             };    
//         case actionTypes.GET_PRODUCTS_FAILL: 
//             return{
//                 loadding:false,
//                 error:action.payload
//             }
//         default:
//             return state;
//     }
// };

// export const getProductsDetailsReducers = (state= {products:{},action})=>{
//     switch (action.type) {
//         case actionTypes.GET_PRODUCTS_DETAIL_REQUEST:
//             return{
//                 loadding:true,
//             }
//         case actionTypes.GET_PRODUCTS_DETAIL_SUCCESS:
//             return{
//                 loadding:false,
//                 products:action.payload
//             }
//         case actionTypes.GET_PRODUCTS_DETAIL_FAILL:
//             return{
//                 loadding:false,
//                 error:action.payload
//             }
//         case actionTypes.GET_PRODUCTS_DETAIL_RESET:
//             return{
//                 products:{}
//             }
//         default:
//             return state;
//     }
// }