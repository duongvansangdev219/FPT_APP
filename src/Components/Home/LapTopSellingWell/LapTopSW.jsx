import React from 'react'
import {Text, View,Image } from 'react-native'
import {styles} from './Styles'
const LapTopSW = () => {
    return (
        <View style={styles.Container}>
        <Text style={styles.text1}>LAPTOP BÁN CHẠY</Text>
        <View style={{flexWrap:'wrap',flexDirection:'row'}}>
            <ListLT/>
            <ListLT/>
        </View>
    </View>
    )
}
const ListLT = () => {
    return (
        <View style={styles.Container2}>
            <Image source={require('../../../assets/laptop2.png')}style={styles.images}/>
            <Text style={styles.installment}>Trả góp 0%</Text>
            <Text style={styles.lucky}>Lì xì 3.000.000 đ</Text>
            <Text style={styles.nameProduct}>Macbook Air 13" 2020 M1 256GB</Text>
            <Text style={styles.prices}>31.990.000 đ</Text>
            <Text style={styles.discount}>34.990.000 đ</Text> 
        </View>
    )
}

export default LapTopSW


