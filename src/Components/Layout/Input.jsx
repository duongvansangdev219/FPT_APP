import React from 'react'
import {StyleSheet,TextInput} from 'react-native';
export default function Input() {
    return (
        <TextInput placeholder="Bạn muốn mua gì?" style={styles.input}/>
    )
}
const styles =StyleSheet.create({
    input:{
        width:'95%',
        padding:8,
        margin:10,
        borderRadius:6,
        fontWeight:'bold',
        backgroundColor:'#fff',
      },
})
