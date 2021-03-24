import React from 'react';
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
	const userLogin = useSelector((state) => state.userLogin);

	return (
		<NavigationContainer>
			{userLogin.userLoggedIn ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default MainNavigator;
