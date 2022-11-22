import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { useState } from "react";

import {organsArray} from "../db/organsArray";
import BreathButton from "./BreathButton";

function Organs({chosenOption, chosenOrgan, setChosenOrgan, chosenOrganFunction, setChosenOrganFunction, bodyAction}) {

  //
  const [isActive, setIsActive] = useState(false);
  function activateFrame() {
    setIsActive(true);
  }
  function deactivateFrame() {
    //bodyAction();
    setIsActive(false);
  }

  //
  function switchOrgan(organ) {
    const newChosenOrgan = organsArray.find((newOrgan)=> newOrgan.name===organ.name);

    if (organ !== chosenOrgan)
    {setChosenOrgan(newChosenOrgan);}
    else {setChosenOrgan({name:"", content: []});}
  }

////
return(
<OrganizingOrgansDiv  isItActive={isActive && constrictionClass}>
  <FlexDiv>
    { chosenOption.name.length>0 && organsArray.map((organ)=> 
    
      <div style={{position: "relative"}}>
        <OrganButton isItOn={organ===chosenOrgan ? highlightedOrgan:unselectedOrgan} onClick={()=>switchOrgan(organ)}>{organ.name}</OrganButton> 
    
        { organ===chosenOrgan &&
          <OrganOptions isItActive={isActive ? constrictionClass : !chosenOrganFunction && organOptionsFadeIn} onAnimationEnd={() => deactivateFrame()} >
                {chosenOrgan.content.map((organFunction)=>  <BreathButton label={organFunction} activateFrame={activateFrame} setChosenOrganFunction={setChosenOrganFunction} bodyAction={bodyAction}/>) }
          </OrganOptions>
        }
      </div>
    )} 
  </FlexDiv>
</OrganizingOrgansDiv>
)
}
export default Organs;

// ANIMATION
const constriction = keyframes`
      0%{transform: translate(0,0) scale(1); background-color: pink; border-radius: 55px; box-shadow: 10px 10px grey;}
      50%{transform:scale(0.95) translate(10px,10px);background-color: lightpink; border-radius: 85px}
      55%{box-shadow: 0px 0px grey;}
      95%{transform:scale(1.02), box-shadow: 10px 10px grey;}
      100%{transform: translate(0,0) scale(1); background-color: pink; border-radius: 55px;}
`;
const constrictionClass = css`
  animation-name: ${constriction};
  animation-duration: 1.1s;
  animation-iteration-count: 1;
`;

//
const organOptionsAnim = keyframes`
      0%{transform: scale(0);}
      100%{transform: scale(1);}
`;
const organOptionsFadeIn = css`
  animation-name: ${organOptionsAnim};
  animation-duration: 1.1s;
  animation-iteration-count: 1;
`;

// STYLED COMPONENTS

const OrganizingOrgansDiv = styled.div`
  display: flex;
  gap: 20px;
  background-color: lightpink;
  padding: 30px;
  box-shadow: 0 10px grey;
  border-radius: 55px;
  width: 90%;
  margin: 20px auto;
  position: relative;
  border: 1px solid grey;
  ${(props) => props.isItActive}; //for animation

`;

const OrganOptions = styled.div`
  background-color: pink;
  border-radius: 55px;
  padding: 20px;
  border: 3px solid grey;
  width: 300px;
  height: 200px;
  box-shadow: 10px 10px grey;
  position: relative;
  z-index: 1;

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  ${(props) => props.isItActive}; //for animation
`;

//
const buttonPushedAnim = keyframes`
    0% {transform:translate(0,0) scale(1); background-color: pink; box-shadow: 5px 5px darkgrey;}
    100% {transform:translate(5px,5px) scale(0.95); background-color: red;   box-shadow: 0 0 50px red;}
`;
const buttonReleasedAnim = keyframes`
    0% {transform:translate(5px,5px) scale(0.95);; background-color: red;   box-shadow: 0 0 50px red;}
    100% {transform:translate(0,0) scale(1); background-color: pink;  box-shadow: 5px 5px darkgrey;}
`;
  const highlightedOrgan = css`
    background-color: red;
    animation-name: ${buttonPushedAnim};
    animation-duration: 1s;
    animation-iteration-count: 1;
    transform:translate(5px,5px) scale(0.95);
    z-index: 0;
    box-shadow: 0 0 50px red;
    `;
    const unselectedOrgan = css`
    background-color: pink;
    animation-name: ${buttonReleasedAnim};
    animation-duration: 1s;
    animation-iteration-count: 1;
    z-index: 1;
    box-shadow: 5px 5px darkgrey;
    transform:translate(0,0) scale(1);;
    `;
    //
    const OrganButton = styled.button`
    border-radius: 50px;
    border: 2px solid grey;
    box-shadow:  5px 5px grey;
    padding: 25px;
    height: 100px;
    ${(props) => props.isItOn}; //for animation
    `;

//


const FlexDiv = styled.div`
display: grid;
grid-template-columns: 100px 100px 100px;
grid-template-rows: 50px 50px 50px;
width: 350px;
height: 350px;
padding: 30px;
background-color: pink;
border-radius: 55px;
gap: 60px 15px;
box-shadow: 10px 10px grey;
border: 1px solid grey;
`;



