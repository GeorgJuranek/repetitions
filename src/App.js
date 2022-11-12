import {useState, useEffect} from "react";
import styled from "styled-components";

import Mind from "./components/Mind";
import Scene from "./components/Scene";
import Organs from "./components/Organs";

import {doorknobs} from "./db/optionsArray"

function App() {

  //
  const [chosenOrgan, setChosenOrgan] = useState({name:"", content: []});
  const [chosenOrganFunction, setChosenOrganFunction] = useState("");
  
  //
  const [currentOptions, setCurrentOptions] = useState([]);
  const [chosenOption, setChosenOption] = useState({name:"", interaction:"", content: {message:"start", leadsTo: doorknobs}});
  const [pastOptions, setPastOptions] = useState([]);
  
  //
  const [currentAction, setCurrentAction] = useState([]);

  //
  function bodyAction() {
    const compound = chosenOrgan.name+"/"+chosenOrganFunction;
    const compoundArray = compound.split("/");
    setCurrentAction(compoundArray);
  };

  //
  let actionString = `i try to ${currentAction[1]} the ${chosenOption.name} with my ${currentAction[0]}`;
  let actionStringPast = `i have tried to ${currentAction[1]} the ${chosenOption.name} with my ${currentAction[0]}`;
  
  useEffect(()=>
  {   
      if(currentAction.toString() === chosenOption.interaction.toString()) 
      {
          setPastOptions([...pastOptions, actionString + chosenOption.content.message]);
          setCurrentOptions(chosenOption.content.leadsTo);
      } 
      else
      {
          setPastOptions([...pastOptions, actionStringPast + ` but i couldn't ${currentAction[1]} the ${chosenOption.name} with my ${currentAction[0]}`]);
      }
  }
  ,[currentAction]);

  //

  return (
    <FlexMain>
      <Mind 
        currentAction={currentAction}
        chosenOrgan={chosenOrgan}
        chosenOrganFunction={chosenOrganFunction}
        chosenOption={chosenOption}
        setCurrentOptions={setCurrentOptions}
        pastOptions={pastOptions}
        setPastOptions={setPastOptions}
      />
      <Scene 
        currentOptions={currentOptions}
        setChosenOption={setChosenOption}
      />
      <Organs 
        chosenOption={chosenOption}
        chosenOrgan={chosenOrgan}
        setChosenOrgan={setChosenOrgan}
        setChosenOrganFunction={setChosenOrganFunction}
      />
      {chosenOrganFunction && <button onClick={()=> bodyAction()}>{" > "+actionString}</button>}
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
`;