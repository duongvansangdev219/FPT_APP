import * as React from 'react';
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Detail from '../screens/DetailScreens';
import Cart from '../screens/CartScreens';
import HomeNavigation from './HomeNavigation';
import Profile from '../screens/ProfileScreens';
import {DETAIL,CART,PROFILE,SIGN_IN,HOME_NAVIGATION,REGISTER} from './constants/RouterNames'
import Sign_in from '../screens/Sign_in';
import Register from '../screens/Register';
const DrawerNavigation = () => {
    const DrawerStack = createDrawerNavigator();
    return (
             <DrawerStack.Navigator>
                <DrawerStack.Screen name={HOME_NAVIGATION} component={HomeNavigation}/>
                <DrawerStack.Screen name={CART} component={Cart}/>
                <DrawerStack.Screen name={DETAIL} component={Detail}/>
                <DrawerStack.Screen name={PROFILE} component={Profile}/>
                <DrawerStack.Screen name={SIGN_IN} component={Sign_in}/>
                <DrawerStack.Screen name={REGISTER} component={Register}/>
            </DrawerStack.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
