import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components';
import styles from '../styles';
import { SmallText } from './Typography';
import Icon from './core/Icon';
import { windowWidth } from '../dimensions';
import { IconsNames } from '../shared/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({
	size,
	icon,
	title,
	opacity,
	styles_parent,
	Bgcolor,
	txtColor,
	onPress,
}) => {
	return (
		<Touchable
			onPress={onPress}
			opacity={opacity}
			size={size}
			styles={styles_parent}
		>
			<LinearGradient
				colors={[
					Bgcolor ? Bgcolor : styles.GradientGreen[0],
					Bgcolor ? Bgcolor : styles.GradientGreen[1],
				]}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					paddingTop: 21,
					paddingBottom: 21,
				}}
			>
				<SmallText color={txtColor}>{title}</SmallText>
				{icon && (
					<IconContainer small={size === 'small'}>
						<Icon name={icon} color={styles.White} size={16} />
					</IconContainer>
				)}
			</LinearGradient>
		</Touchable>
	);
};

const IconContainer = styled.View`
	margin-left: ${(props) => (props.small ? `0px` : `10px`)};
	margin-top: ${(props) => (props.small ? `0px` : `2px`)};
`;

const Touchable = styled.TouchableOpacity`
	flex: ${(props) => (props.size === 'larger' ? 3 : 1)};
	width: ${(props) =>
		props.size === 'small'
			? '80px'
			: props.size === 'larger'
			? `${windowWidth - windowWidth / 6}px`
			: '240px'};
	/* opacity: ${(props) => (props.opacity ? props.opacity : 1)}; */
	margin-right: ${(props) =>
		props.styles?.marginRight ? `${props.styles?.marginRight}px` : '0px'};
	border-radius: 12px;
	overflow: hidden;
`;

export default Button;
