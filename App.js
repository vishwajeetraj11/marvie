import React from 'react';
import { ThemeProvider } from 'styled-components';
import styles from './styles';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { StatusBarStyles } from './shared/constants';
import { Provider } from 'react-redux';
import {
	useFonts,
	Poppins_100Thin,
	Poppins_100Thin_Italic,
	Poppins_200ExtraLight,
	Poppins_200ExtraLight_Italic,
	Poppins_300Light,
	Poppins_300Light_Italic,
	Poppins_400Regular,
	Poppins_400Regular_Italic,
	Poppins_500Medium,
	Poppins_500Medium_Italic,
	Poppins_600SemiBold,
	Poppins_600SemiBold_Italic,
	Poppins_700Bold,
	Poppins_700Bold_Italic,
	Poppins_800ExtraBold,
	Poppins_800ExtraBold_Italic,
	Poppins_900Black,
	Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';
import MainNavigator from './Navigation/MainNavigator';
import store from './redux/store';

export default function App() {
	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_100Thin_Italic,
		Poppins_200ExtraLight,
		Poppins_200ExtraLight_Italic,
		Poppins_300Light,
		Poppins_300Light_Italic,
		Poppins_400Regular,
		Poppins_400Regular_Italic,
		Poppins_500Medium,
		Poppins_500Medium_Italic,
		Poppins_600SemiBold,
		Poppins_600SemiBold_Italic,
		Poppins_700Bold,
		Poppins_700Bold_Italic,
		Poppins_800ExtraBold,
		Poppins_800ExtraBold_Italic,
		Poppins_900Black,
		Poppins_900Black_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<> 
				<StatusBar
					backgroundColor='transparent'
					translucent={true}
					barStyle={StatusBarStyles.lightContent}
				/>
				<Provider store={store}>
					<ThemeProvider theme={styles}>
						<MainNavigator />
					</ThemeProvider>
				</Provider>
			</>
		);
	}
}
