import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { ScrollView } from 'react-native';
import styles from '../styles';
import { MediumText, SmallText } from '../components/Typography';
import Button from '../components/Button';
import { View, SafeAreaView, Image } from 'react-native';
import { StatusBarStyles } from '../shared/constants';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { windowHeight } from '../dimensions';

const OnboardingDescription = styled.View`
	/* margin-top: ${`${windowHeight / 50}px`}; */
	margin-bottom: ${`${windowHeight / 30}px`};
`;

class Carausal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 1,
			carouselItems: [
				{
					source: require('../assets/car1.png'),
				},
				{
					source: require('../assets/car2.png'),
				},
				{
					source: require('../assets/car3.png'),
				},
			],
		};
	}

	

	pagination() {
		const { carouselItems: entries, activeIndex: activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={entries.length}
				activeDotIndex={activeSlide}
				containerStyle={{ backgroundColor: styles.backgroundDark }}
				dotStyle={{
					width: 8,
					height: 8,
					borderRadius: 5,
					marginHorizontal: 1,
					backgroundColor: 'rgba(255, 255, 255, 0.92)',
				}}
				inactiveDotStyle={
					{
						// Define styles for inactive dots here
					}
				}
				inactiveDotOpacity={0.4}
				inactiveDotScale={0.6}
			/>
		);
	}

	_renderItem({ item, index, state }) {
		return (
			<View
				style={{
					borderRadius: 24,
					overflow: 'hidden',
					height: windowHeight / 1.6,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Image
					style={{ height: '100%', width: '100%' }}
					source={item.source}
				/>
			</View>
		);
	}

	render() {
		return (
			<SafeAreaView
				style={{
					flex: 1,
					marginTop: 40,
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Carousel
						layout={'default'}
						ref={(ref) => (this.carousel = ref)}
						data={this.state.carouselItems}
						sliderWidth={398}
						itemWidth={300}
						renderItem={(item, index) =>
							this._renderItem(item, index, this.state)
						}
						onSnapToItem={(index) =>
							this.setState({ activeIndex: index })
						}
						inactiveSlideOpacity={0.6}
						firstItem={1}
						loop={true}
						inactiveSlideScale={0.8}
					/>
				</View>
				{this.pagination()}
			</SafeAreaView>
		);
	}
}

const Onboarding = ({navigation}) => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Carausal />
			<OnboardingDescription>
				<MediumText center>Join Our Awesome Community</MediumText>
				<SmallText color={styles.LightGrayUI} center>
					It looks like you are on track.
				</SmallText>
				<SmallText color={styles.LightGrayUI} center>
					Please continue to follow your daily plan.
				</SmallText>
			</OnboardingDescription>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					flex: 1,
				}}
			>
				<Button
					icon={'prev'}
					opacity={0.6}
					styles_parent={{ marginRight: 10 }}
					size={'small'}
				/>
				<Button onPress={() => {navigation.navigate('Login')}} size={'large'} icon={'next'} title={'Next'} />
			</View>
		</ScrollView>
	</>
);

export default Onboarding;
