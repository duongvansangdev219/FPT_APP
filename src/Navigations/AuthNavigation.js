import * as React from 'react';
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Sign_in from '../screens/Sign_in';
import Register from '../screens/Register';
import {SIGN_IN,REGISTER,CONTACT} from './constants/RouterNames'
import Contact from '../screens/ContactScreens';
const AuthNavigation = () => {
    const AuthStack = createStackNavigator();
    return <AuthStack.Navigator>
                <AuthStack.Screen name={SIGN_IN} component={Sign_in}/>  
                <AuthStack.Screen name={REGISTER} component={Register}/>  
                <AuthStack.Screen name={CONTACT} component={Contact}/>                  
            </AuthStack.Navigator>
}

export default AuthNavigation

const styles = StyleSheet.create({})
