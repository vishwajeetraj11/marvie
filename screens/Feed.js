import React from 'react';
import { ScrollView } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import { Container } from './Courses';
import styles from '../styles';
import {
	WeeklyProgressV1,
	WeeklyProgressV2,
} from '../components/WeeklyProgress';
import { StarOutline, Gift } from '../components/Icons';
import Carousal from '../components/Carousal';
import MapView from '../components/MapView';
import { StatusBar } from 'react-native';
import { StatusBarStyles } from '../shared/constants';

export default () => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Container>
				<ScreenTitle title={'Feed'} />
				<WeeklyProgressV1
					title={'Weekly Progress'}
					description={
						'It looks like you are on track. Please continue to follow your daily plan.'
					}
					theme={styles.lightGreen}
					Icon={StarOutline}
				/>
				<WeeklyProgressV2
					title={'Weekly Reward'}
					description={
						'Congratulations, It seem like you have received a reward for completing previous task before time.'
					}
					theme={styles.lightOrange}
					backElementsColor={styles.Orange}
					Icon={Gift}
				/>
			</Container>
			<Carousal />
			<Container>
				<MapView
					title={'Burger King'}
					theme={styles.lightGreen}
					secondaryColor={styles.White}
					rating={'4.9'}
					place={'American Kitchen'}
					time={'25-30 min'}
					distance={'2.1 km'}
				/>
			</Container>
		</ScrollView>
	</>
);
