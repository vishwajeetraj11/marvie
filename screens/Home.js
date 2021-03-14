import React from "react";
import styled from "styled-components";

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
  </View>
);
