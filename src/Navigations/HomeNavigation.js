import * as React from 'react';
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreens';
import Detail from '../screens/DetailScreens';
import Cart from '../screens/CartScreens';
import Profile from '../screens/ProfileScreens';
import Contact from '../screens/ContactScreens';
import {HOME,DETAIL,CART,PROFILE,CONTACT,SMARTPHONES} from './constants/RouterNames'
import Smartphones from '../Components/Home/Smartphone/Smartphones';
const HomeNavigation = () => {
    const HomeStack = createStackNavigator();
    return <HomeStack.Navigator initialRouteName={HOME}>      
        <HomeStack.Screen name={HOME} component={Home}/>   
        <HomeStack.Screen name={CART} component={Cart}/>   
        <HomeStack.Screen name={DETAIL} component={Detail}/> 
        <HomeStack.Screen name={PROFILE} component={Profile}/>              
        <HomeStack.Screen name={CONTACT} component={Contact}/>
        <HomeStack.Screen name={SMARTPHONES} component={Smartphones}/>
    </HomeStack.Navigator>
}

export default HomeNavigation

const styles = StyleSheet.create({})
