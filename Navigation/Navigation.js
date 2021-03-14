
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import Contacts from "../screens/Contacts"
import Courses from "../screens/Courses"
import Feed from "../screens/Feed"
import Home from "../screens/Home"
import Statistics from "../screens/Statistics"
import styles from '../styles';
import { Chat, Notification, Heart, HomeIcon, Star } from "../components/Icons"
const Tab = createBottomTabNavigator();

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
    return (
        <HomeStackNavigator.Navigator headerMode="none">
            <HomeStackNavigator.Screen
                name="Home"
                component={Home}
            />
        </HomeStackNavigator.Navigator>
    );
};

const FeedStack = () => {
    return (
        <HomeStackNavigator.Navigator headerMode="none">
            <HomeStackNavigator.Screen
                name="Feed"
                component={Feed}
            />
        </HomeStackNavigator.Navigator>
    );
};

const CourseStack = () => {
    return (
        <HomeStackNavigator.Navigator headerMode="none">
            <HomeStackNavigator.Screen
                name="Courses"
                component={Courses}
            />
        </HomeStackNavigator.Navigator>
    );
};

const StatisticsStack = () => {
    return (
        <HomeStackNavigator.Navigator headerMode="none">
            <HomeStackNavigator.Screen
                name="Statistics"
                component={Statistics}
            />
        </HomeStackNavigator.Navigator>
    );
};

const ContactsStack = () => {
    return (
        <HomeStackNavigator.Navigator headerMode="none">
            <HomeStackNavigator.Screen

                name="Contact"
                component={Contacts}
            />
        </HomeStackNavigator.Navigator>
    );
};

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    labelStyle: { fontSize: 12, paddingBottom: 4 },

                    // showLabel: false,
                    style: {
                        backgroundColor: styles.UltraDark,
                        paddingBottom: 12,

                    },
                }}
            >
            <Tab.Screen name="Feed" component={FeedStack} />
            <Tab.Screen name="Courses" component={CourseStack} />
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Contacts" component={ContactsStack} />
                <Tab.Screen name="Statistics" component={StatisticsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}