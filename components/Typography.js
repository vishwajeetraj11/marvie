import styled from 'styled-components';
import styles from '../styles';

export const SmallText = styled.Text`
	font-size: 14px;
	color: ${(props) => (props.color ? props.color : styles.White)};
`;
export const MiniFont = styled.Text`
	font-size: 12px;

	color: ${(props) => (props.color ? props.color : styles.White)};
`;
export const MediumText = styled.Text`
	font-size: 16px;
	font-family: 'Poppins_600SemiBold';
	color: ${styles.White};
`;
