import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AuthNavigation from './AuthNavigation'
import DrawerNavigation from './DrawerNavigation'

const AppNavContainer = () => {
  const isLoggedIn=true; 
    return (  
      <NavigationContainer>
        {isLoggedIn ? <DrawerNavigation/>:<AuthNavigation/>}
      </NavigationContainer>
    
    )
}
export default AppNavContainer

