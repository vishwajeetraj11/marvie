import React from "react";
import styled from "styled-components";
import styles from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import { FullScreen, MapPin, Fork, StarFull } from "../components/Icons";
import { windowWidth, windowHeight } from "../dimensions";
import { MiniFont, SmallText, MediumText } from "./Typography";

const Container = styled.View`
  background-color: ${(props) => props.theme};
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 24px;
`;
const MapContainer = styled.View`
  position: relative;
  margin-bottom: 26px;
`;
const PinContainer = styled.View`
  position: absolute;
  top: 32%;
  left: 40%;
`;
const Description = styled.View`
  flex-direction: row;
  margin: 10px 0 15px 0;
  align-items: center;
`;
const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;
const FullScreenIcon = styled.View`
  position: absolute;
  bottom: 16px;
  padding: 10px;
  background-color: ${(props) => props.secondaryColor};
  right: 16px;
  border-radius: 7px;
`;
const Pin = styled.View``;
const IconContainer = styled.View`
  margin-right: 9px;
`;
const ForkContainer = styled.View`
  position: absolute;
  top: 32%;
  left: 38%;
`;

const Image = styled.Image`
  height: 156px;
  width: 100%;
`;

const Rating = styled(MediumText)`
  font-family: "Poppins_400Regular";
  margin-top: 4px;
`;
const Title = styled(MediumText)`
  font-family: "Poppins_700Bold";
`;
// const Color = styled.Text`
//     color: ${props => props.secondaryColor};
// `
const Dot = styled.View`
  background-color: crimson;
  margin: 0 10px;
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: ${styles.White};
`;
const Time = styled.View`
  padding: 6px 24px;
  background-color: ${(props) => props.secondaryColor};
  border-radius: 24px;
`;
const Place = styled(Rating)``;
const TimeText = styled.Text`
  font-family: "Poppins_600SemiBold";
  color: ${(props) => props.theme};
`;

const Distance = styled(TimeText)`
  margin-left: 11px;
`;

export default ({
  title,
  theme,
  secondaryColor,
  rating,
  place,
  time,
  distance,
}) => {
  return (
    <Container theme={theme}>
      <MapContainer>
        <Image source={require("../assets/map.png")} />
        <PinContainer>
          <Pin>
            <MapPin fill={secondaryColor} />
          </Pin>
          <ForkContainer>
            <Fork fill={theme} />
          </ForkContainer>
        </PinContainer>
        <FullScreenIcon secondaryColor={secondaryColor}>
          <FullScreen fill={theme} />
        </FullScreenIcon>
      </MapContainer>
      <Title>{title}</Title>

      <Description>
        <IconContainer>
          <StarFull fill={secondaryColor} />
        </IconContainer>
        <Rating>{rating}</Rating>
        <Dot />
        <Place>{place}</Place>
      </Description>

      <Details>
        <Time secondaryColor={secondaryColor}>
          <TimeText theme={theme}>{time}</TimeText>
        </Time>
        <Distance theme={secondaryColor}>{distance}</Distance>
      </Details>
    </Container>
  );
};
