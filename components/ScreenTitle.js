import React from "react";
import styled from "styled-components";

export default ({ title }) => <Title>{title}</Title>;

const Title = styled.Text`
  font-family: "Poppins_700Bold";
  font-size: 42px;
  padding-top: 90px;
  color: #fff;
`;
