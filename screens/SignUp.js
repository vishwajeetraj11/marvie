import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
	StatusBar,
	ScrollView,
	SafeAreaView,
	StyleSheet,
	View,
	TouchableOpacity,
	Text,
} from 'react-native';
import { IconsNames, StatusBarStyles } from '../shared/constants';
import styles from '../styles';
import { windowHeight, windowWidth } from '../dimensions';
import Icon from '../components/core/Icon';
import ScreenTitle from '../components/ScreenTitle';
import { Container } from './Courses';
import {
	AuthSecondTitle,
	MediumText,
	SmallText,
} from '../components/Typography';
import Button from '../components/Button';
import PhoneInput from 'react-native-phone-number-input';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';

const SignUp = ({ navigation }) => {
	const [value, setValue] = useState('');
	const [formattedValue, setFormattedValue] = useState('');
	const [valid, setValid] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const phoneInput = useRef(null);
	const dispatch = useDispatch();

	const handleSignUp = () => {
		dispatch(login());
	};
	const handleSmallButton = () => {
		// navigation.goBack();
		navigation.navigate('Login');
	};
	useEffect(() => {
		// console.log(phoneInput);
	}, []);
	return (
		<>
			<StatusBar barStyle={StatusBarStyles.lightContent} />
			<ScrollView
				style={{
					backgroundColor: styles.backgroundDark,
				}}
			>
				<LoginContainer>
					<Icon
						name={IconsNames.rectangle}
						color={styles.lightGreen}
						size={45}
					/>
					<ScreenTitle paddingTop={28} title='Sign Up' />
					<AuthSecondTitle color={styles.LightGrayUI}>
						to start working
					</AuthSecondTitle>
					<SafeAreaView>
						{showMessage && (
							<View>
								<Text>Value : {value}</Text>
								<Text>Formatted Value : {formattedValue}</Text>
								<Text>Valid : {valid ? 'true' : 'false'}</Text>
							</View>
						)}

						<PhoneInput
							ref={phoneInput}
							defaultValue={value}
							defaultCode='IN'
							layout='second'
							containerStyle={{
								backgroundColor: styles.backgroundDark,
								borderRadius: 20,
								color: styles.LightGrayUI,

								marginBottom: 20,
								width: windowWidth - 32
							}}
							textContainerStyle={{
								fontFamily: 'Poppins_400Regular',
								borderRadius: 20,
								color: '#ffffff',
								backgroundColor: 'transparent'
							}}
							textInputStyle={{
								color: styles.LightGrayUI,
								fontFamily: 'Poppins_400Regular',
							}}
							codeTextStyle={{
								color: styles.LightGrayUI,
								fontFamily: 'Poppins_500Medium',
							}}
							placeholder='Enter Phone Number'
							textInputProps={{
								placeholderTextColor: styles.LightGrayUI
							}}
							onChangeText={(text) => {
								setValue(text);
							}}
							onChangeFormattedText={(text) => {
								setFormattedValue(text);
							}}
							withDarkTheme
							autoFocus
						/>
						{/* <TouchableOpacity
							style={styles.button}
							onPress={() => {
								const checkValid = phoneInput.current?.isValidNumber(
									value
								);
								setShowMessage(true);
								setValid(checkValid ? checkValid : false);
							}}
						>
							<Text>Check</Text>
						</TouchableOpacity> */}
					</SafeAreaView>

					<BtnContainer>
						<Button
							onPress={handleSmallButton}
							icon={'prev'}
							opacity={0.6}
							styles_parent={{ marginRight: 10 }}
							size={'small'}
						/>
						<Button
							onPress={handleSignUp}
							size={'larger'}
							icon={'next'}
							title={'Sign Up'}
						/>
					</BtnContainer>
				</LoginContainer>
			</ScrollView>
		</>
	);
};

const BtnContainer = styled.View`
	flex-direction: row;
	justify-content: center;
`;

// const PosAbsBtn = styled(BtnContainer)`
// 	position: absolute;
// 	bottom: 0px;
// 	margin: ${() => `0 ${windowWidth / 6 / 2}px`};
// 	padding-left: 16px;
// 	padding-right: 16px;
// `;

const LoginContainer = styled(Container)`
	min-height: ${() => `${windowHeight - windowWidth / 3 + 10}px`};
	margin-top: ${() => `${windowWidth / 3.5}px`};
`;

export default SignUp;
