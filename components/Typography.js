import styled from 'styled-components';
import styles from '../styles';

export const SmallText = styled.Text`
	font-size: 14px;
	text-align: ${(props) => (props.center ? 'center' : 'auto')};
	color: ${(props) => (props.color ? props.color : styles.White)};
`;
export const MiniFont = styled.Text`
	font-size: 12px;
	text-align: ${(props) => (props.center ? 'center' : 'auto')};
	color: ${(props) => (props.color ? props.color : styles.White)};
`;
export const MediumText = styled.Text`
	text-align: ${(props) => (props.center ? 'center' : 'auto')};
	font-size: 16px;
	font-family: 'Poppins_600SemiBold';
	color: ${styles.White};
`;
