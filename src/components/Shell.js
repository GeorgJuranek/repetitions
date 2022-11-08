import styled from "styled-components";
import {doorHandles, rooms} from "../db/rooms.js";
import {keyframes} from "styled-components";
import React, { useEffect } from "react";

function Shell({object, options, changeObject, lastAction}) {

    return (
      <ShellDiv>
        <p>{lastAction}</p>
        <ul>
          { options.map((option) => (
            <li>
              <button onClick={()=> {changeObject(option)}}>{option.name}</button>
            </li>
          ))}
        </ul>
        <h3>{object ? `Du wählst ${object.akkusativ} ${object.name}.` : "wähle"}</h3>
      </ShellDiv>
    );
  }

export default Shell;

const popUpAnimationLeft = keyframes`
0%{transform: translateX(-500px); opacity: 0.1; }
100%{transform: translateX(0); opacity: 1; }
`;

const ShellDiv = styled.div`
border: 1px solid white;
padding: 5px 15px;
background-color: none;
width: 350px;
height: 300px;
color: white;

transform: translateX(0);
opacity: 1;
animation-name: ${popUpAnimationLeft};
animation-duration: 2s;
animation-iteration-count: 1;
`;
