import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const Container_SCF = () => {
    return (
        <View style={styles.Container}>
            <Items/>
            <Items/>
            <Items/>
        </View>
    )
}
const Items = () => {
    return (
        <View style={styles.Container2}>
            <Text style={styles.text}>Sim số</Text>
            <Image
                source={require('../../assets/simso.png')}
                style={{
                    width:80,
                    marginLeft:20,
                    height:50,
                    top:20,
                }}
            />
        </View>
    )
}
export default Container_SCF

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
    },
    Container2: {
        marginLeft:10,
        width:'30%',
        height:120,
        backgroundColor:'#fff'
    },
    text:{
        textAlign:'center',
        marginTop:10,
        fontWeight:'bold',
        fontSize:20
    }
})
