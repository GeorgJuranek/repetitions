import {useState} from "react";
import styled from "styled-components";

import Mind from "./components/Mind";
import Scene from "./components/Scene";
import Organs from "./components/Organs";

function App() {

  const [chosenOrgan, setChosenOrgan] = useState({name:"", content: []})
  function changeChosenOrgan(newOrgan) {setChosenOrgan(newOrgan)};

  const [currentAction, setCurrentAction] = useState("");

  function bodyAction(action) {
    const compound = chosenOrgan.name+"/"+action;
    const compoundArray = compound.split("/");
    console.log(compoundArray);
    setCurrentAction(compound)
    changeChosenOrgan({name:"", content: []})
  };

  return (
    <FlexMain>
      <Mind 
        currentAction={currentAction}
      />
      <Scene />
      <Organs 
        chosenOrgan={chosenOrgan}
        changeChosenOrgan={changeChosenOrgan}
        bodyAction={bodyAction}
      />
    </FlexMain>  
  );
}
export default App;


const FlexMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
`;