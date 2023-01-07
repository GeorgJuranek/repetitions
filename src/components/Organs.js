import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";

import {useRef} from 'react';

import {organsArray} from "../db/organsArray";
import BreathButton from "./BreathButton";

import add0 from "../images/icons/addIcon.svg";
import add from "../images/icons/addGreenIcon.svg";
import cancel from "../images/icons/cancelRedIcon.svg";

function Organs({chosenOption, chosenOrgan, setChosenOrgan, chosenOrganFunction, setChosenOrganFunction, bodyAction}) {

  //
  const [isActive, setIsActive] = useState(false);
  function activateFrame() {
    setIsActive(true);
  }
  function deactivateFrame() {
    setIsActive(false);
  }

  //
  function switchOrgan(organ) {
    const newChosenOrgan = organsArray.find((newOrgan)=> newOrgan.name===organ.name);

    if (organ !== chosenOrgan)
    {setChosenOrgan(newChosenOrgan);}
    else {setChosenOrgan({name:"", content: []});}
  }

//
const [scrollFromLeft, setScrollFromLeft]=useState();  

function scrollingOnOrgans()
{
  if (chosenOrgan.name)
  { 
    setScrollFromLeft(document.getElementById(chosenOrgan.name).getBoundingClientRect().left); 
  }
};

useEffect(()=>{scrollingOnOrgans()}, [chosenOrgan]);

const [addOrgans, setAddOrgans] = useState(false);
useEffect(()=>{setAddOrgans(false); setChosenOrgan({name:"", content: []})}, [chosenOption]);


//

return( 
<>

<WrapDiv isOpen={addOrgans}>
  { addOrgans ?
      <FlexDiv isItActive={isActive && constrictionClass2} onScroll={()=>scrollingOnOrgans() } onAnimationEnd={()=>scrollingOnOrgans() }>
            <OrganButton onClick={()=> {setAddOrgans(false); setChosenOrgan(false)}}  isItOn={highlightedOrgan} style={{color:"white", border: "3px solid rgba(255, 155, 0, 0.3)", marginRight:"25px", opacity:"0.75"}} >
              <InsideOrganFlexDiv>
                <OrganIconImg src={cancel} alt="cancel"/>
              </InsideOrganFlexDiv>
            </OrganButton>
        { chosenOption.name.length>0 && organsArray.map((organ)=>  (
              <OrganButton id={organ.name} isItOn={organ===chosenOrgan ? highlightedOrgan:unselectedOrgan} onClick={()=>{switchOrgan(organ)}}>
                <InsideOrganFlexDiv>
                  {organ.name}
                  <OrganIconImg src={organ.icon}/>
                </InsideOrganFlexDiv> 
              </OrganButton>
            )
          )
        } 
        {chosenOrgan.name &&
                <>
                  <OrganOptions scrollFromLeft={scrollFromLeft} isItActive={isActive ? constrictionClass : chosenOrganFunction || organOptionsFadeIn} onAnimationEnd={() => deactivateFrame()} >
                        {chosenOrgan.content.map((organFunction)=>  <BreathButton label={organFunction} activateFrame={activateFrame} setChosenOrganFunction={setChosenOrganFunction} bodyAction={bodyAction}/>) }
                  </OrganOptions>
                  <ArrowDiv scrollFromLeft={scrollFromLeft} style={isActive && {display: "none"}} />
                </>
        }  
      </FlexDiv>  
      :
      chosenOption.name ? 
        <OrganButton onClick={()=> {setAddOrgans(true)}} isItOn={unselectedOrgan}>
          <InsideOrganFlexDiv>
            <OrganIconImg src={add} alt="add Organ"/>
          </InsideOrganFlexDiv> 
        </OrganButton>
        :
        <OrganButton style={{color: "darkgrey", opacity: "0.75"}}>
          <InsideOrganFlexDiv>  
            <OrganIconImg src={add0} alt="currently unable to add" style={{opacity: "0.8"}}/>
          </InsideOrganFlexDiv>
        </OrganButton>
  }
</WrapDiv>

</>
)
}
export default Organs;

// ANIMATION
const constriction = keyframes`
      0%{transform: translate(0,0) scale(1); background-color: pink; border-radius: 55px;}
      50%{transform:scale(0.85) translate(10px,10px);background-color: lightpink; border-radius: 85px}
      55%{box-shadow: 0px 5px grey;}
      95%{transform:scale(1.15);}
      100%{transform: translate(0,0) scale(1); background-color: pink; border-radius: 55px;}
`;
const constrictionClass = css`
  animation-name: ${constriction};
  animation-duration: 1.1s;
  animation-iteration-count: 1;
`;
//
const constriction2 = keyframes`
      0%{ overflow:hidden;}     
      50%{ overflow:hidden; gap:0; padding-top:0; padding-bottom:0; padding-left: 100px; padding-right: 100px;}
      100%{ overflow:hidden;}
`;
const constrictionClass2 = css`
  animation-name: ${constriction2};
  animation-duration: 1.1s;
  animation-iteration-count: 1;
`;

//
const organsOpenup = keyframes`
    0% {width: 1%; opacity: 0;}
    100% {width: 100%; opacity: 1;}
`;
const organsCloseDown = keyframes`
    0% {padding-right: 30%;}
    100% {padding: 0;}
`;
const lateArrowAnim = keyframes`
0% {opacity: 0; transform: translateY(-50px); border-top: 5px solid grey;}
75% {opacity: 0.5;}
100% {opacity: 1; transform: translateY(0); border-top: 30px solid grey;}
`;

const ArrowDiv= styled.div.attrs(props => ({
  style: {
    left: props.scrollFromLeft + 30 + "px",
  },
}))`
width: 0; 
height: 0; 
border-left: 20px solid transparent;
border-right: 20px solid transparent;
border-top: 30px solid grey;

position: absolute;
bottom: -24px;
z-index: 5;

animation: ${lateArrowAnim};
animation-duration: 1.1s;
animation-iteration-count: 1;
`;

const buttonPushedAnim = keyframes`
    0% {transform:translate(0,0) scale(1); background-color: pink; box-shadow: 5px 5px darkgrey;}
    100% {transform:translate(5px,5px) scale(0.95); background-color: red; box-shadow: 0 0 50px red;}
`;
const buttonReleasedAnim = keyframes`
    0% {transform:translate(5px,5px) scale(0.95); background-color: red;   box-shadow: 0 0 50px red;}
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

//
const OrganOptions = styled.div.attrs(props => ({
  style: {
    left: props.scrollFromLeft +"px",
  },
}))`
  background: linear-gradient(rgba(255,192,203, 0.4), rgba(255,152,153, 1));

  border-radius: 55px;
  padding: 20px;
  border: 1px solid grey;
  box-shadow: 0 10px grey;

  position: fixed;
  bottom: 23%;
  z-index: 1;
  
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  
  overflow: scroll; 

   
  ${(props) => props.isItActive}; //for animation

  @media only screen and (max-height: 600px) {
    min-height: 80px;
    height: 20vh; 


  }
`;

//
const OrganButton = styled.button`
border-radius: 50px;
border: 2px solid grey;
box-shadow:  5px 5px grey;

padding: 8px;
padding-top: 0;

height: 105px;
min-height: 55px;

${(props) => props.isItOn}; //for animation

font-size: 1rem;
margin: auto;

@media only screen and (max-height: 600px) {
  height: 100%; 
  font-size: auto;
}
`;

const InsideOrganFlexDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-height: 600px) {
  flex-direction: row;
}
`;

const OrganIconImg = styled.img`
width: auto;
height: auto;

xborder: 2px solid grey;
xborder-radius: 50px;

transform: scale(0.8);

@media only screen and (max-height: 600px) {
  width: 50px;
  height: 50px;
}
`;

//
const FlexDiv = styled.div`
display: flex;
flex-direction: row;

gap: 15px;
overflow: scroll;

min-width: 100px;
width: 20vw;
max-width: 400px;

min-height: 60px;

margin: auto;
padding: 8px 230px 8px 16px;

background-color: lightpink;
border-radius: 55px;
border: 1px solid darkgrey;

${(props) => props.isItActive}; //for animation

box-shadow: 0 0 300px lightpink;

@media only screen and (max-height: 600px) {
  height: 10vh; 
}
`;

//

const closeDown = css`
animation-name: ${organsCloseDown};
animation-duration: 1.1s;
animation-iteration-count: 1;
`;

const WrapDiv = styled.div`
animation-name: ${(props) => props.isOpen ? organsOpenup : organsCloseDown};
animation-duration: 1.1s;
animation-iteration-count: 1;
`;

//



/*@media only screen and (min-width: 768px) 
{ padding-right: 100px;}*/

/* const OrganizingOrgansDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: lightpink;
  padding: 30px;
  box-shadow: 0 10px grey;
  border-radius: 55px;
  margin: 10px auto;
  position: relative;
  border: none;
  ${(props) => props.isItActive}; //for animation

  height: 3vh;
  min-height: 100px;
  max-height: 200px;
  min-width: 220px;
`; */
