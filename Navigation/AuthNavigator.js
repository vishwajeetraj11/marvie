import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Onboarding from '../screens/Onboarding';
import SignUp from '../screens/SignUp';
import React from 'react';

const Auth = createStackNavigator();



function AuthNavigator() {
  return (
    <Auth.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
      <Auth.Screen name="Onboarding" component={Onboarding} />
      <Auth.Screen name="Login" component={Login} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}

export default AuthNavigator
