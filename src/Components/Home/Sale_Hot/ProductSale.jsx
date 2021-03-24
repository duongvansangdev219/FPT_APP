import React from 'react'
import {Text, View, Image,TouchableOpacity,ImageBackground } from 'react-native'
import {styles} from './Styles'

const ProductSale = () => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Text}>KHUYẾN MÃI HOT</Text>
            <View style={styles.Card}>
                <Card/>
                <Card/>
            </View>
        </View>
    )
}
const Card=({navigation})=>{
    return (
        <TouchableOpacity>
             <View style={styles.Container2}>
                <Image source={require('../../../assets/samsung.png')} style={styles.images}/>
                <Text style={styles.installment}>Trả góp 0%</Text>
                <Text style={styles.lucky}>Giảm 3.000.000đ</Text>
                <Text style={styles.nameProduct}>iPhone 12 Pro 256GB</Text>
                <Text style={styles.prices}>900000đ</Text>
                {/* <Button title="okkk" onPress={() =>navigation.popToTop()}/> */}
            <Text style={styles.discount}>34.990.000 đ</Text>           
        </View>
        </TouchableOpacity>
    )
}
export default ProductSale

