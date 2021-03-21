import React from 'react'
import {Text, View,Image } from 'react-native'
import {styles} from './Styles'
const Laptop = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.text1}>LAPTOP FPTSHOP - MỪNG TẾT LỚN</Text>
            <ListLaptop/>
            <ListLaptop/>
            <ListLaptop/>
        </View>
    )
}
const ListLaptop = () => {
    return (
        <View style={styles.ListLaptop}>
                <Image
                    source={require('../../../assets/laptop1.png')}
                    style={{
                        left:10,
                        width:100,
                        height:100
                    }}/>
                <View style={{
                    paddingTop:27,
                    paddingLeft:15
                }}>
                    <Text>SẮM LAPTOP</Text>
                    <Text style={styles.text2}>TẶNG COMBO HOT</Text>
                </View>
            </View>
    )
}

export default Laptop

