import React,{useState} from 'react'
import { Button, StyleSheet, Text, View,TextInput  } from 'react-native'
import {Card} from 'react-native-elements'

const InforClient = () => {
    const [value, onChangeText] = useState({});
    const [error,setError]=useState({});
    return (
        <View>
            <View style={styles.infor}>
                <Text style={styles.inforClient}>1.Thông tin khách hàng</Text>
                <Text style={styles.text}>Họ và tên:*</Text>
                <TextInput
                    style={styles.input}          
                    onChangeText={(value)=>{
                    onChange({name:'userName',value})
                    }}/>
                <Text style={styles.text}>Số điện thoại:*</Text>
                <TextInput
                    style={styles.input}                 
                    onChangeText={(value)=>{
                    onChange({name:'userName',value})
                    }}/>
                <Text style={styles.text}>Email (không bắt buộc)</Text>
                <TextInput
                    style={styles.input}
                    error={error.userName}                  
                    onChangeText={(value)=>{
                    onChange({name:'userName',value})
                    }}/>
                <Text>Chi tiết đơn hàng sẽ gửi vào email</Text>
            </View>
            
            <Button title="TIẾP TỤC" color="red" />
            <Button title="ĐẶT HÀNG LUÔN" style={{marginTop:20}}/>
        </View>
        
    )
}

export default InforClient

const styles = StyleSheet.create({
    infor:{
        width:'100%',
        height:300,
        marginTop:7,
        padding:10,
        backgroundColor:'#fff',
    },
    inforClient:{
        color:'red',
        fontWeight:'bold',
        fontSize:16
    },
   
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:7,
        marginBottom:7
    }
})
