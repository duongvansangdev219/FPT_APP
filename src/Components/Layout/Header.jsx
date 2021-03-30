import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'
import { ToggleButton } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation= useNavigation();
    const cart = useSelector(state => state.cart)
    const{cartItems}=cart;
    // const [value, setValue] = React.useState('left');
    return (
        <View style={{backgroundColor: '#cd1817'}}>
             <View style={styles.HeaderContainer}>
                <ToggleButton.Group>
                    <ToggleButton icon="format-align-left" value="left" color="#fff"/>
                </ToggleButton.Group>
                <Image source={{uri:"https://fptshop.com.vn/Content/Mobile/V4/images/logo-tet.png"}} style={{width:'30%',height:40}}/>  
                <View style={{margin:6,left:110}}>
                    <Text style={styles.TextHeader} >Gọi miễn phí</Text>
                    <Text style={styles.TextHeader}>1800 6601</Text>                 
                </View>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart" size={26} style={{color:'#fff',margin:10,left:110}}/>
                    <Text style={styles.badge}>{cartItems.length}</Text>
                </TouchableOpacity>      
            </View>
            <TextInput placeholder="Bạn muốn mua gì?" style={styles.input}/>
        </View>
       
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection:'row',
        height:50,
        backgroundColor: '#cd1817',
    },      
    TextHeader:{
        color:'#fff',
        fontWeight: 'bold',
    },
    input:{
        width:'95%',
        padding:8,
        margin:10,
        borderRadius:6,
        fontWeight:'bold',
        backgroundColor:'#fff',
    },
    badge:{
        backgroundColor:'yellow',
        color:'blue',
        height:20,
        width:20,
        borderRadius:100,
        fontSize:15,
        left:125,
        bottom:25,
        marginLeft:10,
        textAlign: 'center'
    }
})
