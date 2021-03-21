import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {styles} from './Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Accessories = () => {
    return (
        <View style={styles.Container}>
            <Text
            style={styles.text}>PHỤ KIỆN HOT</Text>
            <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
                <ListAccessories/>
            </View>
        </View>
    )
}
const ListAccessories = () => {
    return (
        <View>
            <View style={styles.Container2}>
                <FontAwesome name="apple" size={26} style={{color:'#fff',textAlign:'center',marginTop:13,fontSize:35}} />
            </View>
            <Text style={styles.text2}>Phụ kiện nổi bật</Text>
        </View>
        
    )
}
export default Accessories

