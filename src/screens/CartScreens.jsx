import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import InforClient from '../Components/Cart/InforClient'
import Product from '../Components/Cart/Product'

const Cart = ({navigation,route}) => {
    const dispatch = useDispatch()
    const getCart = useSelector(state => state.getCart)
    
    return (
        <View>
            <View style={styles.Container}>
                <Product/>
                <InforClient/>
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
})
