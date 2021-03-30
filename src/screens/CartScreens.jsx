import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Action/CartAction'
import InforClient from '../Components/Cart/InforClient'
import { StyleSheet, Text, View, FlatList} from 'react-native'
import {removeFromCart} from '../Redux/Action/CartAction'
import Items from '../Components/Cart/Items'

const Cart = ({route}) => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart;

    const productsID = route.params.productsID;
    console.log(productsID)
    useEffect(() => {
        if(productsID){
            dispatch(addToCart(productsID));
        }      
    }, [dispatch,productsID])
    return (
        <View>
            <View style={styles.Container}>
                {cartItems.length === 0 
                ? (<Text>You cart is empty</Text>)
                : (cartItems.map((items,index)=><Items key={index}{...items}/>))}             
                <InforClient/>
            </View>
            <View style={styles.money}>
                <View>  
                    <Text>Tạm tính:</Text>
                    <Text>Khuyến mãi:</Text>
                    <Text style={styles.text}>Tổng tiền:</Text>
                </View>   
                <View>            
                    <Text> đ</Text>
                    <Text>-3.6000.000 đ</Text>
                    <Text style={styles.text}>66.589.000 đ</Text>
                </View>            
            </View>
        </View>
    )
}
export default Cart

const styles = StyleSheet.create({
    Container:{
        width:'97%',
        height:300,
        paddingLeft:10,
    },
    text:{
        color:'black',
        fontWeight:'bold',
        left:210
    },
    money:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:120,
        marginTop:7,
        marginBottom:5, 
        padding:10,
        backgroundColor:'#fff',
    },
    
})
