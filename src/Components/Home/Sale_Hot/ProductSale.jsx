import React from 'react'
import {Text, View, Image,TouchableOpacity,ImageBackground } from 'react-native'
import {styles} from './Styles'

const ProductSale = () => {
    return (
        <View style={styles.Container}>
            <Text 
            style={styles.Text}>KHUYẾN MÃI HOT</Text>
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
                    <ImageBackground
                        source={require('../../../assets/border_card.png')} style={styles.image}/>
                    <Image
                        source={require('../../../assets/samsung.png')}
                        style={styles.imageChildrent}
                    />                         
            </View>
        </TouchableOpacity>
    )
}
export default ProductSale

