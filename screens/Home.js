import React from "react";
import styled from "styled-components";
import Icon from '../components/core/Icon';
import { IconsNames } from '../shared/constants';
import styles from '../styles';

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #ffffff;
`;

const Text = styled.Text`
  font-family: "Poppins_400Regular";
`;

export default () => (
  <View>
    <Text>Home</Text>
    <Icon name={IconsNames.like_nav} color={styles.GradientGreen} size={50} />
  </View>
);
