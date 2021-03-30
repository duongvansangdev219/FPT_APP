import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constants/CartConstants";

export const cartReducers = (state = { cartItems:[]},action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            const items = action.payload;
            const existItems = state.cartItems.find((x)=>x.products === items.products) //check cart 
        if(existItems){
            return{
                ...state,
                cartItems:state.cartItems.map((x)=>x.products === existItems.products ? items : x), 
            };
        }else{
            return { 
                ...state, cartItems: [...state.cartItems,items]};
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter((x)=> x.products !== action.payload)
            }
        default:
            return state;
    }   
}