import React from 'react';
import styled from 'styled-components';

export default ({ title, paddingTop }) => (
	<Title paddingTop={paddingTop}>{title}</Title>
);

const Title = styled.Text`
	font-family: 'Poppins_700Bold';
	font-size: 42px;
	padding-top: ${(props) =>
		props.paddingTop ? `${props.paddingTop}px` : '90px'};
	color: #fff;
`;
