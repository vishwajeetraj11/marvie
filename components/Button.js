import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import styles from '../styles';
import { SmallText } from './Typography';
import Icon from './core/Icon';
import { IconsNames } from '../shared/constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({ size, icon, title, opacity, styles_parent }) => {
	return (
		<Touchable size={size} styles={styles_parent}>
			<LinearGradient
				colors={[styles.GradientGreen[0], styles.GradientGreen[1]]}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'row',
					paddingTop: 21,
					paddingBottom: 21,
				}}
			>
				<SmallText>{title}</SmallText>
				<IconContainer small={size === 'small'}>
					<Icon name={icon} color={styles.White} size={16} />
				</IconContainer>
			</LinearGradient>
		</Touchable>
	);
};

const IconContainer = styled.View`
	margin-left: ${props => props.small ? `0px` : `10px`};
	margin-top: ${props => props.small ? `0px` : `2px`};
`;

const Touchable = styled.TouchableOpacity`
	width: ${(props) => (props.size === 'small' ? '80px' : '240px')};
	opacity: ${(props) => (props.size === 'small' ? 0.6 : 1)};
	margin-right: ${(props) =>
		props.styles?.marginRight ? `${props.styles?.marginRight}px` : '0px'};
	border-radius: 12px;
	overflow: hidden;
`;

export default Button;
