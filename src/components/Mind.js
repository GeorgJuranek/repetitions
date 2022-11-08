import {useState} from "react";
import styled from "styled-components";

function Mind({currentAction}) {

  return (
    <MindDiv>
        <LeftAside>LeftAside</LeftAside>
        <MindUl>
            Mind:
            <li>{currentAction}</li>
        </MindUl>
        <RightAside>RightAside</RightAside>
    </MindDiv>  
  );
}
export default Mind;

const MindDiv = styled.div`
display: flex;
justify-content: center;
flex-grow: 3;
flex-wrap: nowrap;

width: 100%;
max-width: 800px;
height: 50vh;
border: 3px solid black;
`;

const MindUl = styled.ul`
width: 50%;
border: 3px solid grey;
background-Color: grey;
color: white;
`;

const LeftAside = styled.aside`
border: 3px solid grey;
width: 25%;
border-radius: 5px;
`;


const RightAside = styled.aside`
width: 25%;
border: 3px solid grey;
border-radius: 5px;
`;