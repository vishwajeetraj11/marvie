import React from "react";
import styled from "styled-components";
import styles from "../styles";
import { SmallText, MediumText } from "./Typography";
import { Card, Triangle, Settings, Chick } from "../components/Icons";

const Image = styled.Image`
  height: 31px;
  width: 31px;
`;

const TriangleContainer = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: ${styles.White};
  border-radius: 20px;
`;

const HorizontalBox = styled.View`
  background-color: ${(props) => props.background};
  padding: 24px;
  border-radius: 25px;
  margin-top: 20px;
`;
const HorizontalBoxContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
const HorizontalBoxImageContanier = styled.View`
  background-color: ${(props) => props.themeColor};
  padding: 14px;
  border-radius: 10px;
`;
const HorizontalBoxDescription = styled.View`
  margin-left: 18px;
`;
const HorizontalBoxButton = styled(TriangleContainer)`
  background-color: ${(props) => props.buttonFill};
  margin-left: auto;
  height: 36px;
  width: 36px;
`;

const HorizontalBoxPlayButton = styled(Triangle)`
  opacity: 1;
`;
const HorizontalBoxTitleBig = styled(MediumText)`
  color: ${(props) => props.themeColor};
`;
const HorizontalBoxTitleSmall = styled(SmallText)`
  color: ${(props) => props.themeColor};
  opacity: 0.7;
`;
export default ({
  imageSource,
  title,
  description,
  background,
  themeColor,
  buttonFill,
}) => {
  return (
    <HorizontalBox background={background}>
      <HorizontalBoxContent>
        <HorizontalBoxImageContanier themeColor={themeColor}>
          <Image source={imageSource} />
        </HorizontalBoxImageContanier>
        <HorizontalBoxDescription>
          <HorizontalBoxTitleBig themeColor={themeColor}>
            {title}
          </HorizontalBoxTitleBig>
          <HorizontalBoxTitleSmall themeColor={themeColor}>
            {description}
          </HorizontalBoxTitleSmall>
        </HorizontalBoxDescription>
        <HorizontalBoxButton buttonFill={buttonFill}>
          <HorizontalBoxPlayButton fill={themeColor} />
        </HorizontalBoxButton>
      </HorizontalBoxContent>
    </HorizontalBox>
  );
};
