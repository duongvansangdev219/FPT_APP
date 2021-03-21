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
            <View style={styles.money}>
                <View>  
                    <Text>Tạm tính:</Text>
                    <Text>Khuyến mãi:</Text>
                    <Text style={styles.text}>Tổng tiền:</Text>
                </View>   
                <View>  
                    <Text>70.000.0000 đ</Text>
                    <Text>-3.6000.000 đ</Text>
                    <Text style={styles.text}>66.589.000 đ</Text>
                </View>            
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
    money:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        height:120,
        marginTop:7,
        marginBottom:5, 
        padding:10,
        backgroundColor:'#fff',
    },
    inforClient:{
        color:'red',
        fontWeight:'bold',
        fontSize:16
    },
    text:{
        color:'black',
        fontWeight:'bold',
        marginTop:10
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop:7,
        marginBottom:7
    }
})
