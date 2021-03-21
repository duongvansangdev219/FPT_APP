import * as React from 'react'
import { useState } from 'react'
import { StyleSheet,Text, View,Image, } from 'react-native'

const Product = () => {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    return (
        <View style={styles.Container}>
            <View style={styles.Order}>
                <Image source={require('../../assets/laptop2.png')} style={styles.image}/>
                <View style={styles.text}>
                    <Text>Laptop Asus TUF SFDSLAD</Text>
                    <Text>Giá:<Text style={{fontWeight:'bold'}}>23.000.000 đ</Text></Text>
                </View>              
            </View>              
        </View>
    )
}
export default Product

const styles = StyleSheet.create({
    Container:{
       backgroundColor:'#fff',
        width:'100%',
        height:100,
    },
    Order:{
        paddingLeft:20,
        flexDirection:'row',
        height:50,
        backgroundColor:'#fff',
    },
    image:{
        width:100,
        height:100
    },
    text:{
        marginLeft:20,
        marginTop:20
    }
})
