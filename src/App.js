import {useState, useEffect} from "react";
import styled from "styled-components";
import {keyframes} from "styled-components";

//import {rooms} from "./db/rooms";

import { doorHandles } from "./db/rooms";
import Shell from "./components/Shell";
import BodyMachine from "./components/BodyMachine";
import Compound from "./components/Compound";

function App() {

//OUTER STATES  
const [room, setRoom] = useState();
const [options, setOptions] = useState(doorHandles);
const [object, setObject] = useState();
//-->Funktionen für Shell-Komponente
function changeOptions(objectsArray) { setOptions(objectsArray); };
function changeObject(object) { setObject(object); };

//INNER STATES
const [bodyPart, setBodyPart] = useState("");
const [bodyFunction, setBodyFunction] = useState("");
//-->Funktionen für BodyMachine-Komponente
function changeBodyPart(newBodyPart) {setBodyPart(newBodyPart);};
function changeBodyFunction(newBodyFunction) {setBodyFunction(newBodyFunction);};

const[lastAction, setLastAction]=useState("");
function changeLastAction(string) {setLastAction(string)};

// EFFECTS
useEffect(()=> {setObject()},[room]);

  return (
    <HigherOrderMain>        
      <MindAside>
          ...
      </MindAside>
      <OrderDiv>
        <header>
          <H1> Repetitionen <span style={{color: "orange", fontSize: "0.6em"}}>version:1</span></H1>
        </header>
        <Shell 
          lastAction={lastAction}
          options={options}
          object ={object}
          changeObject={changeObject} 
        />
        <Compound 
          object={object}
          bodyPart={bodyPart}
          bodyFunction={bodyFunction}
          changeBodyPart={changeBodyPart}
          changeBodyFunction={changeBodyFunction}
          changeObject={changeObject}
          changeOptions={changeOptions}
          changeLastAction={changeLastAction}
        /> 
        <BodyMachine 
          bodyPart={bodyPart} 
          bodyFunction={bodyFunction} 
          changeBodyPart={changeBodyPart} 
          changeBodyFunction={changeBodyFunction}
        />
      </OrderDiv>
      <MindAside>
          ...
      </MindAside>
    </HigherOrderMain>
  );
}
export default App;

//ANIMATIONEN
const popUpAnimationRight = keyframes`
0%{transform: translateX(500px); opacity: 0.1; }
100%{transform: translateX(0); opacity: 1; }
`;

const popUpAnimationTop = keyframes`
0%{transform: translateY(-500px); opacity: 0.1; }
100%{transform: translateY(0); opacity: 1; }
`;

//STYLED COMPONENTS

const HigherOrderMain = styled.main`
display: flex;
background-color: black;
width: 100vw;
height: 100vh;
`;

const MindAside = styled.aside`
border: 2px solid white;
height: 99vh;
min-width: 500px;
width: 30%;
background-color: black;
`;

const OrderDiv = styled.div`

margin: auto;
background-color: black;
display: flex;
align-items: center;
flex-direction: column;
`;

const H1 = styled.h1`
text-decoration: underline;
color: grey;

transform: translateY(0);
opacity: 1;
animation-name: ${popUpAnimationTop};
animation-duration: 2s;
animation-iteration-count: 1;
`;

const BodyStatsDl = styled.dl`
padding: 5px;
list-style: none;
border: 10px double pink;
background-color: none;
border-radius: 30px;
margin: 2px;
color: pink;
padding: 15px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 5px;

transform: translateX(0);
opacity: 1;
animation-name: ${popUpAnimationRight};
animation-duration: 2s;
animation-iteration-count: 1;
`;
