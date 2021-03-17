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

export default () => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<View>
			<Text>Statistics</Text>
		</View>
	</>
);
