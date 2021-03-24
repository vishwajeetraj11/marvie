import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { StatusBarStyles } from '../shared/constants';
import { ScrollView } from 'react-native';
import styles from '../styles';
import { Container } from './Courses';
import MapView from '../components/MapView';
import ScreenTitle from '../components/ScreenTitle';

export default () => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Container>
				<ScreenTitle title="Reminders" />
				<MapView
					title={'Killian Barkers'}
					theme={styles.lightGreen}
					secondaryColor={styles.White}
					rating={'4.7'}
					place={'United States of America'}
					time={'4:30 PM'}
					distance={'1.3 km'}
				/>
				<MapView
					title={'Burger King'}
					theme={styles.lightGreen}
					secondaryColor={styles.White}
					rating={'4.9'}
					place={'American Kitchen'}
					time={'6: 56 PM'}
					distance={'2.1 km'}
				/>
			</Container>
		</ScrollView>
	</>
);


