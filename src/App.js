import {useState} from "react";
import styled from "styled-components";

import Mind from "./components/Mind";
import Scene from "./components/Scene";
import Organs from "./components/Organs";

import {doorknobs} from "./db/optionsArray"

function App() {

  //for Organ
  const [chosenOrgan, setChosenOrgan] = useState({name:"", content: []})
  function changeChosenOrgan(newOrgan) {setChosenOrgan(newOrgan)};

  const [currentAction, setCurrentAction] = useState(""); //for Mind

  function bodyAction(action) {
    const compound = chosenOrgan.name+"/"+action;
    const compoundArray = compound.split("/");
    console.log(compoundArray);
    setCurrentAction(compound)
    changeChosenOrgan({name:"", content: []})
  };

  //for Scene
  const [room, setRoom] = useState();
  const [place, setPlace] = useState();
  const [options, setOptions] = useState(doorknobs);
  const [chosenOption, setChosenOption] = useState({name:"", interaction:"", content: doorknobs});

  return (
    <FlexMain>
      <Mind 
        currentAction={currentAction}

        room={room}
        place={place}
        chosenOption={chosenOption}
        setOptions={setOptions}

        setRoom={setRoom}
      />
      <Scene 
      options={options}
      setRoom={setRoom}
      setPlace={setPlace}
      setChosenOption={setChosenOption}
      />
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
  gap: 10px;

  width: 100%;
`;