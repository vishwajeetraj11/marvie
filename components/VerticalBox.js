import React from "react";
import styled from "styled-components";
import styles from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { Card, Triangle, Settings, Chick } from "../components/Icons";
import { windowWidth, windowHeight } from "../dimensions";
import {SmallText, MediumText} from "./Typography"
const FlexContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const VerticalBox = styled.View`
  width: ${windowWidth * 0.42}px;
`;

const VerticalBoxContent = styled.View`
  height: ${200 - 2 * 24}px;
  justify-content: space-between;
`;

const VerticalBoxTitle = styled(FlexContainer)`
  justify-content: flex-start;
`;
const VerticalBoxDescription = styled.View``;
const VerticalBoxButonContainer = styled(FlexContainer)`
  justify-content: flex-start;
`;
const VerticalBoxDescriptionTitle = styled.Text`
  color: ${styles.White};
`;
const VerticalBoxDescriptionContent = styled.Text`
  color: ${styles.White};
`;
const VerticalBoxButton = styled.View``;
const CardTitleContainer = styled.View`
  margin-left: 10px;
`;
const TriangleContainer = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  background-color: ${styles.White};
  border-radius: 20px;
`;
const ButtonText = styled.Text`
  color: ${styles.White};
  margin-left: 10px;
`;
const MarginLeft = styled.Text`
  margin-left: 10px;
`;


export default ({
  gradientBackground1,
  gradientBackground2,
  Icon,
  iconHeight,
  iconWidth,
  title,
  descriptionTitle,
  description,
  buttonText,
  buttonFill,
  iconFill,
}) => {
  return (
    <VerticalBox>
      <LinearGradient
        colors={[gradientBackground1, gradientBackground2]}
        style={{
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 25,
        }}
      >
        <VerticalBoxContent>
          <VerticalBoxTitle>
            <Icon width={iconWidth} height={iconHeight} fill={iconFill} />
            <CardTitleContainer>
              <SmallText>{title}</SmallText>
            </CardTitleContainer>
          </VerticalBoxTitle>

          <VerticalBoxDescription>
            <VerticalBoxDescriptionTitle>
              <MediumText>{descriptionTitle}</MediumText>
            </VerticalBoxDescriptionTitle>
            <VerticalBoxDescriptionContent>
              {description}
            </VerticalBoxDescriptionContent>
          </VerticalBoxDescription>

          <VerticalBoxButonContainer>
            <TriangleContainer>
              <Triangle fill={buttonFill} />
            </TriangleContainer>
            <ButtonText>
              <MediumText>{buttonText}</MediumText>
            </ButtonText>
          </VerticalBoxButonContainer>
        </VerticalBoxContent>
      </LinearGradient>
    </VerticalBox>
  );
};
