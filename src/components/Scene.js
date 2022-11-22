import styled from "styled-components";

function Scene({
  currentOptions,
    setChosenOption
}) {

  return (
    <OptionsDiv>
        {currentOptions.map((option)=> <button onClick={()=>setChosenOption(option)}>{option.name}</button>) }
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