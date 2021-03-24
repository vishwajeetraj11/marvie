import React, { useEffect } from 'react';
import { IconsNames } from '../shared/constants';
import styles from '../styles';
import Icon from './core/Icon';
import styled from 'styled-components';
import { useRef } from 'react';

const AuthInput = ({ value, setValue, placeholder, type }) => {
	const textInputRef = useRef(null);
	useEffect(() => {
		if (textInputRef) {
			textInputRef.current.setNativeProps({
				style: { fontFamily: 'Poppins_400Regular' },
			});
		}
	}, []);
	return (
		<Container>
			<IconContainer type={type}>
				<Icon
					name={
						type === 'email'
							? IconsNames.default_user
							: IconsNames.lock
					}
					color={type === 'email' ? styles.Orange : styles.Red}
					size={20}
				/>
			</IconContainer>
			<TextInput
				ref={textInputRef}
				secureTextEntry={type === 'password'}
				onChangeText={setValue}
				value={value}
				placeholderTextColor={styles.DarkGRAYUI}
				placeholder={placeholder}
			/>
		</Container>
	);
};

const IconContainer = styled.View`
	width: 38px;
	background-color: ${(props) =>
		props.type === 'email' ? 'rgb(98, 91, 57)' : 'rgb(98, 58, 66)'};
	border-radius: 12px;
	align-items: center;
	justify-content: center;
`;

const TextInput = styled.TextInput`
	font-family: 'Poppins_400Regular';
	color: ${styles.LightGrayUI};
	padding: 12px 0;
	margin-left: 12px;
	flex: 1;
	border-bottom-width: 1px;
	border-bottom-color: rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
	flex-direction: row;
	margin: 24px 0;
`;

export default AuthInput;
