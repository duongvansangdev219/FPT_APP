import React,{useContext} from 'react'
import {Text, View,Image,TouchableOpacity,Button} from 'react-native'
import {styles} from './Styles'
import {DETAIL,CONTACT} from '../../../Navigations/constants/RouterNames'
import {ProductsContext} from '../../../Context/Products'
import {useNavigation} from '@react-navigation/native'; 
import {Products} from '../../../../ProductsData'
const Smartphones=()=> {
    const Products=useContext(ProductsContext);
    return (      
            <View style={styles.Container}>
            <Text
            style={styles.Text}
            >ĐIỆN THOẠI NỔI BẬT</Text>  
            <View style={{
                flexWrap:'wrap',
                flexDirection:'row'
            }}>
                {Products.map((products,index)=>{
                    return <ListSmartphone key={products._id}{...products}/>
                })}
            </View>
        </View>
           
    )
}
const ListSmartphone = (products) => {
    const{_id,image,price,name}=products;
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() =>navigation.navigate(DETAIL,{products})}>
        <View style={styles.Container2}>
            <Image source={{uri:image}}style={styles.images}/>
            <Text style={styles.installment}>Trả góp 0%</Text>
            <Text style={styles.lucky}>Lì xì 3.000.000 đ</Text>
            <Text style={styles.nameProduct}>{name}</Text>
            <Text style={styles.prices}>{price}đ</Text>
            <Text style={styles.discount}>34.990.000 đ</Text>           
        </View>
        </TouchableOpacity> 
    )
}

export default Smartphones


