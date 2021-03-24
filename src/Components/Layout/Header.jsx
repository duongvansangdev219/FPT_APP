import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native'
import { ToggleButton } from 'react-native-paper';

const Header = ({navigation}) => {
    const [value, setValue] = React.useState('left');
    return (
        <View style={{backgroundColor: '#cd1817'}}>
             <View style={styles.HeaderContainer}>
                <ToggleButton.Group onValueChange={value => setValue(value)} value={value}>
                    <ToggleButton icon="format-align-left" value="left" color="#fff"/>
                </ToggleButton.Group>
                <Image source={{uri:"https://fptshop.com.vn/Content/Mobile/V4/images/logo-tet.png",width:'30%',height:40,}}/>  
                <View style={{margin:6,left:110}}>
                    <Text style={styles.TextHeader} >Gọi miễn phí</Text>
                    <Text style={styles.TextHeader}>1800 6601</Text>                 
                </View>
                <TouchableOpacity>
                    <FontAwesome name="shopping-cart" size={26} style={{color:'#fff',margin:10,left:110}}/>
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
})
