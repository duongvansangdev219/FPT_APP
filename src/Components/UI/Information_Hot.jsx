import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Information_Hot = () => {
    return (
        <View style={styles.Container}>
            <Text style={{fontWeight:'bold',fontSize:20,padding:10}}>THÔNG TIN NỔI BẬT</Text>
            <View style={styles.card}>
                <Image source={require('../../assets/IPhone_card.png')}/>
                <Text style={{fontWeight:'bold',marginLeft:10}}>iPhone 12 Series lì xì đến 4.5 triệu</Text>
            </View>
            <View style={styles.card}>
                <Image source={require('../../assets/nokia_card.png')}/>
                <Text style={{fontWeight:'bold',marginLeft:10}}>iPhone 12 Series lì xì đến 4.5 triệu</Text>
            </View>
        </View>
    )
}

export default Information_Hot

const styles = StyleSheet.create({
    Container: {
        width:'90%',
        height:200,
        margin:20,
        backgroundColor:'#fff'
    },
    card:{
        flexDirection:'row',
        padding:10
    }
})
