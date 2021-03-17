import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { Container } from './Courses';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import Post from '../components/Post';
import { StatusBarStyles } from '../shared/constants';

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
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Container>
				<ScreenTitle title={'Home'} />
				{postData.map((post) => (
					<Post key={post.id} {...post} />
				))}
			</Container>
		</ScrollView>
	</>
);

const postData = [
	{
		id: 1,
		username: 'Alice Smith',
		date: '20 April at 4:20 PM',
		comments: '34',
		likes: '102',
		avatar: require('../assets/chick.png'),
		background: styles.UltraDark,
		desc: `We're interested in your ideas and would be glad to build something bigger out of it.`,
		postImages: {
			big: require('../assets/Bitmap.png'),
			small: [
				require('../assets/Bitmap-1.png'),
				require('../assets/Bitmap-2.png'),
			],
		},
	},
	{
		id: 2,
		username: 'Saphire Ruler',
		date: '10 January at 6:31 AM',
		comments: '12',
		likes: '190',
		avatar: require('../assets/chick.png'),
		background: styles.UltraDark,
		desc: `Hey, that performance was freaking awesome. I loved it. Here are some of my illustrations. If you like them. Give them a look. `,
		postImages: {
			big: require('../assets/Bitmap.png'),
			small: [
				require('../assets/Bitmap-1.png'),
				require('../assets/Bitmap-2.png'),
			],
		},
	},
];
