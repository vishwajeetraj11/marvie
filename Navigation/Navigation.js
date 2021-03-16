import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../screens/Contacts';
import Courses from '../screens/Courses';
import Feed from '../screens/Feed';
import Home from '../screens/Home';
import Statistics from '../screens/Statistics';
import styles from '../styles';
import Icon from '../components/core/Icon';
import { IconsNames } from '../shared/constants';

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
	return (
		<HomeStackNavigator.Navigator headerMode='none'>
			<HomeStackNavigator.Screen name='Home' component={Home} />
		</HomeStackNavigator.Navigator>
	);
};

const FeedStack = () => {
	return (
		<HomeStackNavigator.Navigator headerMode='none'>
			<HomeStackNavigator.Screen name='Feed' component={Feed} />
		</HomeStackNavigator.Navigator>
	);
};

const CourseStack = () => {
	return (
		<HomeStackNavigator.Navigator headerMode='none'>
			<HomeStackNavigator.Screen name='Courses' component={Courses} />
		</HomeStackNavigator.Navigator>
	);
};

const StatisticsStack = () => {
	return (
		<HomeStackNavigator.Navigator headerMode='none'>
			<HomeStackNavigator.Screen
				name='Statistics'
				component={Statistics}
			/>
		</HomeStackNavigator.Navigator>
	);
};

const ContactsStack = () => {
	return (
		<HomeStackNavigator.Navigator headerMode='none'>
			<HomeStackNavigator.Screen name='Contact' component={Contacts} />
		</HomeStackNavigator.Navigator>
	);
};

const TabNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						const {
							star_nav,
							bell_nav,
							chat_nav,
							home_nav,
							like_nav,
						} = IconsNames;
						const iconColor = focused
							? styles.Green
							: styles.DarkGRAYUI;
						if (route.name === 'Feed') {
							iconName = bell_nav;
						} else if (route.name === 'Courses') {
							iconName = like_nav;
						} else if (route.name === 'Home') {
							iconName = home_nav;
						} else if (route.name === 'Contacts') {
							iconName = chat_nav;
						} else if (route.name === 'Statistics') {
							iconName = star_nav;
						}
						return (
							<Icon name={iconName} color={iconColor} size={20} />
						);
					},
				})}
				tabBarOptions={{
					labelStyle: { fontSize: 12, paddingBottom: 4 },
					showLabel: false,
					style: {
						backgroundColor: styles.UltraDark,
                        borderTopWidth: 0,
                        height: 60,
					},
				}}
			>
				<Tab.Screen name='Feed' component={FeedStack} />
				<Tab.Screen name='Courses' component={CourseStack} />
				<Tab.Screen name='Home' component={HomeStack} />
				<Tab.Screen name='Contacts' component={ContactsStack} />
				<Tab.Screen name='Statistics' component={StatisticsStack} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default TabNavigation
