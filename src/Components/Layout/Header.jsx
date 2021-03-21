import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import { ToggleButton } from 'react-native-paper';

const Header = ({navigation}) => {
    const [value, setValue] = React.useState('left');
    return (
        <View style={styles.HeaderContainer}>
            <ToggleButton.Group onValueChange={value => setValue(value)} value={value}>
                <ToggleButton icon="format-align-left" value="left" color="#fff"/>
            </ToggleButton.Group>
            <Image source={{uri:"https://fptshop.com.vn/Content/Mobile/V4/images/logo-tet.png",width:'30%',height:40,}}/>  
            <View>
                <Text style={styles.TextHeader} >Gọi miễn phí</Text>
                <Text style={styles.TextHeader}>1800 6601</Text>                 
            </View>
            <TouchableOpacity>
                <FontAwesome name="shopping-cart" size={26} style={{color:'#fff',margin:10}}/>
            </TouchableOpacity>      
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection:'row',
        height:50,
        backgroundColor: 'red',
        justifyContent:'space-between'
    },      
    TextHeader:{
        color:'#fff',
        fontWeight: 'bold',
    },
})
