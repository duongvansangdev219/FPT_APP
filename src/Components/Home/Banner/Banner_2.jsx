import React from 'react'
import {Dimensions,StyleSheet,View,Image} from 'react-native'

const Banner_2 = () => {
    return (
        <View>
            <Image 
                style={styles.tinyLogo2}
                source={require('../../../assets/banner1.png')} />
        </View>
    )
}

export default Banner_2

const styles = StyleSheet.create({
    tinyLogo2: {
        width:Dimensions.get('window').width,
        height:150
      }
})
