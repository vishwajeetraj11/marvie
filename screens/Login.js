import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { StatusBarStyles } from '../shared/constants';

const View = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: #ffffff;
`;

const Text = styled.Text``;

const Login = () => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<View>
			<Text>Login</Text>
		</View>
	</>
);

export default Login;
