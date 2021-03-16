import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, View } from 'react-native';
import styles from '../styles';
import Carausal from '../components/Carousal';
import { MediumText, SmallText } from '../components/Typography';
import Button from '../components/Button';

const OnboardingDescription = styled.View`
	margin: 40px 0;
`;
const Onboarding = () => (
	<>
		<StatusBar style='light' />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Carausal fullScreen={true} />
			<OnboardingDescription>
				<MediumText center>Join Our Awesome Community</MediumText>
				<SmallText color={styles.LightGrayUI} center>
					It looks like you are on track.
				</SmallText>
				<SmallText color={styles.LightGrayUI} center>
					Please continue to follow your daily plan.
				</SmallText>
			</OnboardingDescription>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
				<Button icon={'prev'} styles_parent={{ marginRight: 10 }} size={'small'} />
				<Button size={'large'} icon={'next'} title={'Next'} />
			</View>
		</ScrollView>
	</>
);

export default Onboarding;
