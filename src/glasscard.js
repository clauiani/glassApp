import React from "react";
import profile from "./assets/profile.jpg";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Container = styled(animated.div)`
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.18);
  position: relative;
  padding: 5em;
  background-clip: border-box;
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  color: #fff;
  line-hering: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
  color: white;
  line-hering: 1.5;
  letter-spacing: 1.5;
  font-family: "Gilroy";
  font-size: 20px;
`;
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const GlassCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.defaultdefault,
  }));

  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}>
      <StyledImg src={profile} />
      <StyledH1>Claudiu Ianitchi</StyledH1>
      <StyledH3>
        Anul 4<br />
        3143A
      </StyledH3>
    </Container>
  );
};
export default GlassCard;
