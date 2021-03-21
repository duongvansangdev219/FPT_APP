import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {SIGN_IN,REGISTER} from '../Navigations/constants/RouterNames'
const Sign_in = () => {
    const {navigate}=useNavigation();
    return (
        <View>
            <Text>Signin</Text>
            <Button title="Regiter" onPress={()=>navigate(REGISTER)}/>
        </View>
    )
}

export default Sign_in

const styles = StyleSheet.create({})
