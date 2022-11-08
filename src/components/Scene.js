import {useState} from "react";
import styled from "styled-components";

//import {doorknobs} from "../db/optionsArray";

function Scene({
    options,
    setRoom,
    setPlace,
    setChosenOption

}) {

  return (
    <OptionsDiv>
        {options.map((option)=> <button onClick={()=>setChosenOption(option)}>{option.name}</button>) }
    </OptionsDiv>  
  );
}
export default Scene;

const OptionsDiv= styled.div`
width: 99%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
border: 3px solid black;
`;