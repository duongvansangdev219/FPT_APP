import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const ImageProduct = ({route}) => {
    
    return (
        <View>
            <Text style={{marginLeft:10,fontWeight:'bold'}}>{route.params.products.name}</Text>
                    <View style={styles.Star}>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                        <FontAwesome name="star" size={20} style={styles.Star}/>
                    </View>   

                    <Image
                        style={styles.tinyLogo}
                        source={{uri:route.params.products.image}}/>
                    <View style={styles.textContainer}>
                        <View>
                            <Text style={styles.prices}>{route.params.products.price}</Text>
                            <Text style={styles.discount}>34.990.000đ</Text>
                        </View>
                        <View>
                            <Text>Trả góp chỉ từ</Text>
                            <Text><Text style={styles.number}>2.473.000đ</Text>/tháng</Text>
                        </View>
                    </View>
        </View>
    )
}

export default ImageProduct

const styles = StyleSheet.create({
    Star:{
        flexDirection:'row',
        color:'#FF8000',
        marginLeft:5
    },
    tinyLogo: {
        width: 350,
        height:350,
        marginLeft:25,
        marginTop:40
    },
    textContainer:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    prices:{
        color:'red',
        fontWeight:'bold',
        fontSize:25
    },
    discount:{
        textDecorationLine:'line-through',
        color:'#585858',
    },
    number:{
        fontWeight:'bold',
    },
})
