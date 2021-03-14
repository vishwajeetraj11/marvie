import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { Container } from './Courses';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import Post from '../components/Post';

const View = styled.View`
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: #ffffff;
`;

const Text = styled.Text`
	font-family: 'Poppins_400Regular';
`;

export default () => (
	<>
		<StatusBar style='light' />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Container>
				<ScreenTitle title={'Home'} />
				<Post
					avatar={require('../assets/chick.png')}
					background={styles.UltraDark}
					desc={`We're interested in your ideas and would be glad to build something bigger out of it.`}
					postImages={{
						big: require('../assets/Bitmap.png'),
						small: [
							require('../assets/Bitmap-1.png'),
							require('../assets/Bitmap-2.png'),
						],
					}}
				/>
			</Container>
		</ScrollView>
	</>
);
