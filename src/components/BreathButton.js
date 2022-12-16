import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { useState } from "react";

export default function Breathbutton({ label, activateFrame, setChosenOrganFunction, bodyAction }) {
  const [isBreathing, setIsBreathing] = useState(false);

  return (
    <BreathButton
      onClick={() => {
        setIsBreathing(true);
        activateFrame();
        setChosenOrganFunction(label);
      }}
      onAnimationEnd={() => {setIsBreathing(false); bodyAction()}}
      breathing={isBreathing && breathingClass}
    >
      {label}
    </BreathButton>
  );
}

const BreathButton = styled.button`
  color: white;
  border-radius: 50px;
  background-color: lightpink;
  border-style: dotted;
  border-color: lightgrey;
  width: 100px;
  height: 150px;

  ${(props) => props.breathing}; //for animation

  :active {
    color: black;
    border-color: grey;
    background-color: hotpink;
    border-style: solid;
    border-width: 2px;
  }
`;

const breathingMotion = keyframes`
      0%{transform:scale(1); background-color: hotpink; color: black}
      15%{transform:scale(0.6);background-color: grey}
      85%{transform:scale(1.2);border-width:3px; background-color: pink}
      100%{transform:scale(1); background-color: lightpink; color: white}
`;

const breathingClass = css`
  animation-name: ${breathingMotion};
  animation-duration: 1.2s;
  animation-iteration-count: 1;

  :active {
    color: black;
    border-radius: 50px;
    background-color: green;
  }
`;
