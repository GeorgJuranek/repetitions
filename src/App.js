import {useRef} from 'react';
import {useState, useEffect} from "react";
import styled from "styled-components";
import {keyframes} from "styled-components";

import Mind from "./components/Mind";
import Organs from "./components/Organs";

import {doorknobs} from "./db/optionsArray"

function App() {

  //
  const [chosenOrgan, setChosenOrgan] = useState({name:"", content: []});
  useEffect(()=> setChosenOrganFunction(""),[chosenOrgan]);

  //
  const [chosenOrganFunction, setChosenOrganFunction] = useState("");

  //
  const [currentOptions, setCurrentOptions] = useState([]);

  const [chosenOption, setChosenOption] = useState({name:"", interaction:"", content: {message:"start", leadsTo: doorknobs}});
  useEffect(()=> setChosenOrgan({name:"", content: []}),[chosenOption]);

  const [pastOptions, setPastOptions] = useState([]);

  
  //
  const [currentAction, setCurrentAction] = useState([]);
  

  //REFs
  const memory = useRef();

  //
  function bodyAction() {
    const compound = chosenOrgan.name+"/"+chosenOrganFunction;
    const compoundArray = compound.split("/");
    setCurrentAction(compoundArray);
  };

  //
  let actionString = `i try to ${currentAction[1]} the ${chosenOption.name}`;
  let actionStringPast = `i have tried to ${currentAction[1]} the ${chosenOption.name}`;
  
  useEffect(()=>
  {   
    if(currentAction.toString() === chosenOption.interaction.toString()) 
    {
      setPastOptions([...pastOptions, {action: actionString, result: chosenOption.content.message}]);
      setCurrentOptions(chosenOption.content.leadsTo);
      setChosenOption({name:"", interaction:"", content: {message:"start", leadsTo:""}});
      } 
      else
      {
        setPastOptions([...pastOptions, {action: actionStringPast, result:`, but i couldn't ${currentAction[1]} the ${chosenOption.name} with my ${currentAction[0]}`}]);
      }
      
      memory.current.scrollTo(0,memory.current.scrollHeight);
  }
  ,[currentAction]);

  //

  return (
    <FlexMain>
      <header>
        <MemoryUl ref={memory} role="list">
            {  pastOptions.length>1 && pastOptions.slice(1).map((option)=>
            <AnimatedLi>
              <details>
                <summary>{option.action}</summary>
                <div>{option.result}</div>
              </details>
            </AnimatedLi>)}
            
        </MemoryUl>
      </header>
      <Mind 
        currentAction={currentAction}
        chosenOrgan={chosenOrgan}
        chosenOrganFunction={chosenOrganFunction}
        chosenOption={chosenOption}
        setChosenOption={setChosenOption}
        currentOptions={currentOptions}
        setCurrentOptions={setCurrentOptions}
        setPastOptions={setPastOptions}
        pastOptions={pastOptions}
      />
      <Organs 
        chosenOption={chosenOption}
        chosenOrgan={chosenOrgan}
        setChosenOrgan={setChosenOrgan}
        chosenOrganFunction={chosenOrganFunction}
        setChosenOrganFunction={setChosenOrganFunction}
        bodyAction={bodyAction}
        pastOptions={pastOptions}
      />
    </FlexMain>  
  );
}
export default App;


const FlexMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  background: linear-gradient(180deg, rgba(2,0,36,1) 35%, lightpink 100%, rgba(98,98,98,1) 100%);
  padding-bottom: 150px;
  `;

const MemoryUl = styled.ul`
  color: pink;
  height: 100px;
  margin: 20px auto;
  text-align:center;
  list-style: none;
  display: flex;
  flex-flow: column;
  height: 20px;
  overflow-y: scroll;
  background: radial-gradient(circle, rgba(2,0,36,1) 21%, lightpink 86%);
  border: 1px solid navyblue;
  box-shadow: 0px -8px grey;
  border-radius: 35px;
  width: 90%;
  padding-bottom: 30px;
`;

//
const rushInAnim = keyframes`
    0%{transform:translateY(200px); opacity: 0.01}
    50%{ opacity: 0.2}
    100%{transform:translateY(0); opacity: 1}
`;

const AnimatedLi = styled.li`
    animation-name: ${rushInAnim};
    animation-duration: 1.2s;
    animation-iteration-count: 1;
    opacity: 0.2;
    font-size: 0.8rem;
    border: 1px solid pink;

    :nth-last-child(-n+3) {
      opacity: 0.3
    }

    :last-child {
      opacity: 0.4;
    }

    :focus {
      opacity: 0.6;
    }
`;