import React from 'react';
import styled from 'styled-components';
import { StatusBar, ScrollView, TouchableOpacity } from 'react-native';
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
import { useState } from 'react';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/userActions';
import { USER_LOGIN_SUCCESS } from '../redux/constants/userConstants';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const onSuccess = () => {
		dispatch(login());
	};
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
					<ScreenTitle paddingTop={28} title='Welcome!' />
					<AuthSecondTitle color={styles.LightGrayUI}>
						Sign in to continue
					</AuthSecondTitle>
					<AuthInput
						value={email}
						type={'email'}
						placeholder={'Enter your email'}
						setValue={setEmail}
					/>
					<AuthInput
						value={password}
						type={'password'}
						placeholder={'Enter password'}
						setValue={setPassword}
					/>
					<BtnContainer>
						<Button
							onPress={onSuccess}
							size={'larger'}
							icon={'next'}
							title={'Sign in'}
						/>
					</BtnContainer>
					<ForgotPasswordTouchable>
						<SmallText center color={styles.LightGrayUI}>
							Forgot Password?
						</SmallText>
					</ForgotPasswordTouchable>
					<PosAbsBtn>
						<Button
							onPress={() => navigation.navigate('SignUp')}
							txtColor={styles.Green}
							Bgcolor={styles.darkGreen}
							size={'larger'}
							title={'Create an Account'}
						/>
					</PosAbsBtn>
				</LoginContainer>
			</ScrollView>
		</>
	);
};

const BtnContainer = styled.View`
	flex-direction: row;
	justify-content: center;
`;

const PosAbsBtn = styled(BtnContainer)`
	width: ${props => `${windowWidth}px`};
	position: absolute;
	bottom: 0px;
	/* margin: ${() => `0 ${windowWidth / 6 / 2}px`}; */
	padding-left: 16px;
	padding-right: 16px;
`;

const ForgotPasswordTouchable = styled.TouchableOpacity`
	margin-top: 18px;
	margin-bottom: 48px;
`;

const LoginContainer = styled(Container)`
	min-height: ${() => `${windowHeight - windowWidth / 3 + 10}px`};
	margin-top: ${() => `${windowWidth / 3.5}px`};
`;

export default Login;
