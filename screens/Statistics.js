import React from 'react';
import styled from 'styled-components';
import { StatusBar } from 'react-native';
import { IconsNames, StatusBarStyles } from '../shared/constants';
import { ScrollView } from 'react-native';
import styles from '../styles';
import Carousel from 'react-native-snap-carousel';
import { windowHeight } from '../dimensions';
import { View, Text, SafeAreaView, Image } from 'react-native';
import Icon from '../components/core/Icon';
import { MediumText } from '../components/Typography';

class Carausal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeIndex: 1,
			carouselItems: [
				{
					location: 'Barcelona',
					burns: '2500',
					price: '120',
					rating: '4',
					source: require('../assets/car1.png'),
				},
				{
					location: 'Barcelona',
					burns: '2500',
					price: '120',
					rating: '4',
					source: require('../assets/car2.png'),
				},
				{
					location: 'Barcelona',
					burns: '2500',
					price: '120',
					rating: '4',
					source: require('../assets/car3.png'),
				},
			],
		};
	}

	_renderItem({ item, index, state }) {
		return (
			<View
				style={{
					borderRadius: 24,
					position: 'relative',
					overflow: 'hidden',
					height: windowHeight / 1.3,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<MediumText style={{ position: 'absolute', top: 20, left: 20, opacity: 1, zIndex: 12 }}> {item.location}
				</MediumText>
				<MediumText style={{ position: 'absolute', top: 20, right: 20, opacity: 1, zIndex: 12 }}> Calories: {item.burns}
				</MediumText>
				<MediumText style={{ position: 'absolute', bottom: 20, left: 20, opacity: 1, zIndex: 12 }}> ${item.price}
				</MediumText>
				<Image
					style={{ opacity: 0.9 , height: '100%', width: '100%' }}
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
					marginTop: 50,
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
			</SafeAreaView>
		);
	}
}

export default () => (
	<>
		<StatusBar barStyle={StatusBarStyles.lightContent} />
		<ScrollView style={{ backgroundColor: styles.backgroundDark }}>
			<Carausal />
		</ScrollView>
	</>
);
