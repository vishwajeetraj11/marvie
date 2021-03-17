import React from 'react'
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import TabNavigator from "./Navigation";
import { NavigationContainer } from '@react-navigation/native';

const MainNavigator = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(true); 
    return (
        <NavigationContainer>
        {userLoggedIn ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigator
