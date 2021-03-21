import React from 'react'
import {Dimensions,StyleSheet,View,Image} from 'react-native';
export default function Banner() {
    return (
            <View style={styles.container}>      
                <View>
                    <Image 
                        style={styles.tinyLogo1} 
                        source={require('../../../assets/banner.png')}/>                     
                </View>
          </View>
    )
}
const styles = StyleSheet.create({
    tinyLogo1: {
        width:Dimensions.get('window').width,
        height:290,
    }   
  });