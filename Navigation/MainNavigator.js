import React from 'react';
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';
import TabNavigator from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

const MainNavigator = () => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);

	const [userLoggedIn, setUserLoggedIn] = useState(userLogin.userLoggedIn);
	return (
		<NavigationContainer>
			{userLoggedIn ? <TabNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default MainNavigator;
