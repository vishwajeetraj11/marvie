import React from 'react';
import styled from 'styled-components';
import styles from '../styles';
import { ScrollView } from 'react-native';
import { Card, Settings } from '../components/Icons';
import { StatusBar } from 'react-native';
import VerticalBox from '../components/VerticalBox';
import ScreenTitle from '../components/ScreenTitle';
import HorizontalBox from '../components/HorizontalBox';
import { StatusBarStyles } from '../shared/constants';

export const Container = styled.View`
	padding-left: 20px;
	padding-right: 20px;
`;
const FlexContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export default () => {
	return (
		<>
			<StatusBar barStyle={StatusBarStyles.lightContent} />
			<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
				<Container>
					<ScreenTitle title={'Courses'} />
					<FlexContainer>
						<VerticalBox
							gradientBackground1={styles.GradientGreen[0]}
							gradientBackground2={styles.GradientGreen[1]}
							Icon={Card}
							iconHeight={14}
							iconWidth={10}
							iconFill={styles.White}
							title={'Introduce'}
							descriptionTitle={'What is it?'}
							description={'20 min'}
							buttonText={'Start'}
							buttonFill={styles.lightGreen}
						/>

						<VerticalBox
							gradientBackground1={styles.Red}
							gradientBackground2={styles.lightRed}
							Icon={Settings}
							iconHeight={14}
							iconWidth={14}
							iconFill={'none'}
							title={'Introduce'}
							descriptionTitle={'Say My Name!'}
							description={'Heisenberg'}
							buttonText={'Start'}
							buttonFill={styles.lightRed}
						/>
					</FlexContainer>

					{HorizontalBoxes.map((box, index) => (
						<HorizontalBox
							key={index}
							title={box.title}
							description={box.description}
							imageSource={box.imageSource}
							background={box.background}
							themeColor={box.themeColor}
							buttonFill={box.buttonFill}
						/>
					))}
				</Container>
			</ScrollView>
		</>
	);
};

const HorizontalBoxes = [
	{
		imageSource: require('../assets/space.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkGreen,
		themeColor: styles.lightGreen,
		buttonFill: `rgba(61, 213, 152, 0.5)`,
	},
	{
		imageSource: require('../assets/chick.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkYellow,
		themeColor: styles.lightYellow,
		buttonFill: `rgba(255,197,66,0.5)`,
	},
	{
		imageSource: require('../assets/space.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkRed,
		themeColor: styles.lightRed,
		buttonFill: `rgba(255,86,94,0.5)`,
	},
	{
		imageSource: require('../assets/space.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkGreen,
		themeColor: styles.lightGreen,
		buttonFill: `rgba(61, 213, 152, 0.5)`,
	},
	{
		imageSource: require('../assets/chick.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkYellow,
		themeColor: styles.lightYellow,
		buttonFill: `rgba(255,197,66,0.5)`,
	},
	{
		imageSource: require('../assets/space.png'),
		title: 'Booked for 8 PM',
		description: 'Booked for 8 PM',
		background: styles.darkRed,
		themeColor: styles.lightRed,
		buttonFill: `rgba(255,86,94,0.5)`,
	},
];
