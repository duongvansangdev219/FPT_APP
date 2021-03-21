import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Avatar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Profile = () => {
    const list=[
        {
            title: 'Quản lí đơn hàng',
            icon: 'book'
        },
        {
            title: 'Sản phẩm đã mua',
            icon: 'cart-plus'
        },
        {
            title: 'Sản phẩm đã xem',
            icon: 'eye'
        },
        {
            title: 'Sản phẩm yêu thích',
            icon: 'heart'
        },
        {
            title: 'Sản phẩm mua sau',
            icon: 'clipboard'
        },
    ]
    return (
        <View style={styles.Container}>
                <View style={styles.profile}>
                    <View>
                        <Avatar.Icon size={56} icon="folder" />
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text>Chào mừng bạn đến với FPTSHOP</Text>
                        <Text style={{color:'#2C6BED',marginTop:7}}>ĐĂNG NHẬP/ĐĂNG XUẤT</Text>
                    </View>
                </View>
                
                <View>
                    {list.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <FontAwesome name={item.icon} size={26} style={{color:'#2C6BED',margin:10}}/>
                        <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                    ))}
                </View>
               <ListItem bottomDivider>
                   <Text>Cài đặt</Text>
               </ListItem>
               <ListItem bottomDivider>
                   <FontAwesome name="headphones" size={26} style={{color:'#2C6BED',margin:10}}/>
                   <Text>Hổ trợ</Text>
               </ListItem>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor:"#fff",
    },
    profile:{
        flexDirection:'row',
        padding:10
    }
})
