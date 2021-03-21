import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={styles.Container}>
            <View style={{justifyContent:'space-between',flexDirection:'row',}}>
                <View>
                    <Text style={styles.text1}>Tư vấn mua hàng:</Text>
                    <Text style={styles.text1}>Hỗ trợ kỹ thuật:</Text>
                    <Text style={styles.text1}>Góp ý,khiếu nại:</Text>
                </View>
                <View>
                    <Text style={styles.text2}>18006601</Text>
                    <Text style={styles.text2}>18006601</Text>
                    <Text style={styles.text2}>18006616</Text>
                </View>
                <View>
                    <Text style={{padding:10}}>(Nhánh 1)</Text>
                    <Text style={{padding:10}}>(Nhánh 2)</Text>
                </View>          
            </View>
            <Text style={{color:'blue',marginTop:10}}>Xem danh sách cửa hàng FPT Shop</Text>
            <Text style={{color:'black',fontWeight:'bold',marginTop:10}}>THÔNG TIN KHÁC</Text>
            <View style={{justifyContent:'space-between',flexDirection:'row',}}>
                <View style={styles.textInfor}>
                    <Text style={{color:'blue',marginTop:10}}>Giới thiệu về công ty</Text>
                    <Text style={{color:'blue',marginTop:10}}>Tin tuyển dụng</Text>
                    <Text style={{color:'blue',marginTop:10}}>Quy chế hoạt động</Text>
                    <Text style={{color:'blue',marginTop:10}}>Gioi thiệu máy đổi trả</Text>
                    <Text style={{color:'blue',marginTop:10}}>Kiểm tra hóa đơn điện tử</Text>
                    <Text style={{color:'blue',marginTop:10}}>Chính sách trả góp</Text>
                    <Text style={{color:'blue',marginTop:10}}>Chính sách đổi trả</Text>
                    <Text style={{color:'blue',marginTop:10}}>Tra cứu thông tin bảo hành</Text>
                </View>
                <View>
                    <Text style={{color:'blue',marginTop:10}}>Kiểm tra hàng chính hãng</Text>
                    <Text style={{color:'blue',marginTop:10}}>Hướng dẫn mua trả góp</Text>
                    <Text style={{color:'blue',marginTop:10}}>Câu hỏi thường gặp</Text>
                    <Text style={{color:'blue',marginTop:10}}>Tin khuyến mãi</Text>
                    <Text style={{color:'blue',marginTop:10}}>Hệ thống bảo hành</Text>
                    <Text style={{color:'blue',marginTop:10}}>Chính sách bảo mật</Text>
                    <Text style={{color:'blue',marginTop:10}}>Hướng dẫn mua online</Text>
                </View>
            </View>
        
        </View>       
    )
}

export default Footer

const styles = StyleSheet.create({
    Container: {
        paddingLeft:15,
        paddingRight:15,
        width:'100%',
        height:500,
        backgroundColor:'#fff'
    },

    text1: {
        fontWeight:'bold',
        padding:10
    },
    text2: {
        fontWeight:'bold',
        padding:10,
        color:'red'
    },
    textInfor:{
        
    }
})
