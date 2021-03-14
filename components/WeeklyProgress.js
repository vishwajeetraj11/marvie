import React from "react";
import styled from "styled-components";
import styles from "../styles";
import { SmallText, MediumText } from "./Typography";
import { BGC1, BGC2, BGC3 } from "../components/Icons";

const Container = styled.View`
  padding: 24px;
  background-color: ${(props) => props.theme};
  border-radius: 24px;
  flex-direction: row;
`;

const IconContainer = styled.View`
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
`;

const CardTitle = styled(MediumText)`
  margin-left: 20px;
  font-family: "Poppins_700Bold";
`;

const CardTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  width: 70%;
`;

const CardDescription = styled(SmallText)``;
const CardLeftFlex = styled.View`
  width: 60%;
`;
const CardRightFlex = styled.View`
  width: 40%;
  align-items: flex-end;
  justify-content: center;
`;
const ButtonContainerRipple = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  height: 62px;
  width: 62px;
  justify-content: center;
  align-items: center;
  border-radius: 31px;
`;
const Button = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background-color: ${styles.White};
  align-items: center;
  justify-content: center;
`;

const SmallTextButton = styled.Text`
  color: ${(props) => props.theme};
`;

export const WeeklyProgressV1 = ({ theme, title, description, Icon }) => {
  return (
    <Container theme={theme}>
      <CardLeftFlex>
        <CardTitleContainer>
          <IconContainer>
            <Icon />
          </IconContainer>
          <CardTitle>{title}</CardTitle>
        </CardTitleContainer>
        <CardDescription>{description}</CardDescription>
      </CardLeftFlex>
      <CardRightFlex>
        <ButtonContainerRipple>
          <Button>
            <SmallTextButton theme={theme}>ok</SmallTextButton>
          </Button>
        </ButtonContainerRipple>
      </CardRightFlex>
    </Container>
  );
};

const RewardContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 24px 0;
  overflow: hidden;
`;

const RewardDescription = styled(CardDescription)`
  text-align: center;
  margin-bottom: 10px;
`;
const RewardTitle = styled(CardTitle)`
  text-align: center;
  margin: 10px 0;
`;

const BackElement1 = styled.View`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 140px;
`;
const BackElement2 = styled.View`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
`;
const BackElement3 = styled.View`
  position: absolute;
  z-index: -1;
  right: 10px;
  bottom: 10px;
`;

export const WeeklyProgressV2 = ({
  theme,
  title,
  description,
  Icon,
  backElementsColor,
}) => {
  return (
    <RewardContainer theme={theme}>
      <Icon width={20} height={20} fill={styles.White} />
      <RewardTitle>{title}</RewardTitle>
      <RewardDescription>{description}</RewardDescription>
      <BackElement1>
        <BGC1 fill={backElementsColor} />
      </BackElement1>
      <BackElement2>
        <BGC2 fill={backElementsColor} />
      </BackElement2>
      <BackElement3>
        <BGC3 fill={backElementsColor} />
      </BackElement3>
    </RewardContainer>
  );
};
