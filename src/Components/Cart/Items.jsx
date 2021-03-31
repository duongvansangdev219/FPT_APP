import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../Redux/Action/CartAction'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Items = (items) => {
    const dispatch = useDispatch()  
    const{price,image,name,productsID}=items
    // const [expanded, setExpanded] = React.useState(true);
    // const handlePress = () => setExpanded(!expanded);
    const HandleRemoveCart=(items)=>{
        dispatch(removeFromCart(items))
    }
    return (
            <View style={styles.ContainerItems}>
                <View style={styles.Order} key={productsID}>
                    <Image source={{uri:image}} style={styles.image}/>
                    <View style={styles.text1}>
                        <Text>{name}</Text>
                        <Text>Giá:<Text style={{fontWeight:'bold'}}>{price} đ</Text></Text>
                    </View>
                    <TouchableOpacity onPress={()=>HandleRemoveCart(items)}>
                        <FontAwesome name="times" size={26} style={{color:'red'}}/>
                    </TouchableOpacity>                                
                </View>              
            </View>          
    )
}

export default Items

const styles = StyleSheet.create({
    ContainerItems:{
        backgroundColor:'#fff',
         width:'100%',
         height:100,      
     },
     Order:{
         paddingLeft:20,
         flexDirection:'row',
         height:50,
         backgroundColor:'#fff',
         justifyContent:'space-between'
     },
     image:{
         width:100,
         height:100
     },
     text1:{
         marginLeft:20,
         marginTop:20
     },
})

