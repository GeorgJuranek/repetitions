import {useRef} from 'react';
import {useState, useEffect} from "react";
import styled from "styled-components";
import {keyframes} from "styled-components";

import Mind from "./components/Mind";
import Organs from "./components/Organs";

import {doorknobs} from "./db/optionsArray"

function App() {

  //
  const [chosenOrgan, setChosenOrgan] = useState(false);
  useEffect(()=> setChosenOrganFunction(""),[chosenOrgan]);

  //
  const [chosenOrganFunction, setChosenOrganFunction] = useState("");

  //
  const [currentOptions, setCurrentOptions] = useState([]);

  const [chosenOption, setChosenOption] = useState({name:"", interaction:"", content: {message:"start", leadsTo: doorknobs}});

  useEffect(()=> {setChosenOrgan({name:"", content: []}); },[chosenOption]);

  const [pastOptions, setPastOptions] = useState([]);

  
  //
  const [currentAction, setCurrentAction] = useState([]);
  

  //REFs
  const memory = useRef();

  //
  function bodyAction() {
    const compound = chosenOrgan.name+"/"+chosenOrganFunction;
    const compoundArray = compound.split("/");
    setChosenOrgan(false);
    setCurrentAction(compoundArray);


  };

  //
  //let actionString = `i try to ${currentAction[1]} the ${chosenOption.name}`;
  let actionStringPast = `i have tried to ${currentAction[1]} the ${chosenOption.name}`;
  
  useEffect(()=>
  {  
    if(currentAction.toString() === chosenOption.interaction.toString()) 
    {
    setPastOptions([...pastOptions, {action: actionStringPast, result: chosenOption.content.message}]);
    setCurrentOptions(chosenOption.content.leadsTo);
    setChosenOption({name:"", interaction:"", content: {message:"start", leadsTo:""}});
  
    } 
    else
    {
      setPastOptions([...pastOptions, {action: actionStringPast, result:`, but to ${currentAction[1]} the ${chosenOption.name} with my ${currentAction[0]} had no effect on it...`}]);
    }
      
      //memory.current.scrollTo(0,memory.current.scrollHeight);
  }
  ,[currentAction]);

  //

  //MESSAGE IF SCROLLINGPOSITION IS AT BOTTOM
  const [isBottomReached, setIsBottomReached] = useState(false);

  function checkIfBottomReached()
  {  
    if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight-80)
    {
      setIsBottomReached(true);
    }
    else
    {
      setIsBottomReached(false);
    }
  }

  window.addEventListener('scroll', checkIfBottomReached);


  //

  return (
    <FlexMain>

      <header style={{color: "white"}}>Repetitions v.1</header>

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

    <OrganNav>
      <Organs 
        chosenOption={chosenOption}
        chosenOrgan={chosenOrgan}
        setChosenOrgan={setChosenOrgan}
        chosenOrganFunction={chosenOrganFunction}
        setChosenOrganFunction={setChosenOrganFunction}
        bodyAction={bodyAction}
        pastOptions={pastOptions}
      />
    </OrganNav>
    
    {isBottomReached && 
      <Message> 
        {chosenOption.name ? (chosenOrgan.name ? (" choose...") : " click below...") : "search for an object..."}
      </Message>
    }

    </FlexMain>  
  );
}
export default App;


const FlexMain = styled.main`
  display: flex;
  xjustify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(2,0,36,1) 35%, lightpink 100%, rgba(98,98,98,1) 100%);
  padding-bottom: 180px;
  `;

  
  //
  const OrganNav = styled.nav`
  position: fixed;
  bottom: 22%;
  height: 0;
  width: 99%;
  display: flex;
  justify-content: center;
  z-index: 2;
  `;

  //
  const messageFadesInAnim = keyframes`
    0%{opacity: 0;}
    100%{opacity: 0.5;}
  `;

  const Message = styled.p`
  color: red;
  text-shadow: 0 0 10px red;
  box-shadow: 0 0 100px red;
  background-color: rgba(255,0,0,0.2);
  opacity: 0.5;
  margin: auto;
  font-size: 1.8rem;

  animation: ${messageFadesInAnim};
  animation-duration: 2.8s;
  animation-iteration-count: 1;

  `;


  
  /*
  const StatusSpan = styled.span`
  margin-top: 25%; 
  margin-left: 15%;
  `;
  
  const rushInAnim = keyframes`
  0%{transform:translateY(200px); opacity: 0.01}
  50%{ opacity: 0.2}
  100%{transform:translateY(0); opacity: 1}
  `;


  const AnimatedLi = styled.li`
  animation-name: ${rushInAnim};
  animation-duration: 1.2s;
  animation-iteration-count: 1;
  opacity: 0.1;
  font-size: 0.8rem;
  border-bottom: 2px solid pink;
  padding: 6px;
  
  :nth-last-child(-n+6) {
    opacity: 0.2;
  }

    :nth-last-child(-n+3) {
      opacity: 0.4;
    }
    
    :last-child {
      opacity: 1;
    }

    `;

  //const [chosenMemory, setChosenMemory] = useState();

  const MemoryUl = styled.ul`
    color: pink;
    width: 80%;
    height: 100px;
    margin: auto;
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
    padding-bottom: 30px;
  `;

const CurrentArticle = styled.article`
min-height: 40vh;
width: 80vw;
    background: pink;
    margin: auto;
    border: 3px solid grey;

    display: flex;
    flex-direction: column;
    xjustify-content: center;
    align-items: center;

    color: darkblue;
`;


const SubtitleP = styled.p`
xposition: absolute;
xbackground-color: rgba(0,0,0,0.5);
xtop: 0;
xz-index: 2;
xtext-align: center;
xcolor: darkblue;
font-size: 1.5rem;
margin: 0 3%;
`;
*/


/*
    <CurrentArticle>
      <h1>{chosenOption.name ? chosenOption.name : "Choose from above..."}</h1>
      {chosenOption.name && pastOptions.length>1 && pastOptions.slice(-1).map((option)=><SubtitleP>{option.action + option.result}</SubtitleP>)}
    </CurrentArticle>
*/

/*
    <MemoryUl ref={memory} role="list">
        {pastOptions.length>1 && pastOptions.slice(1).map((option)=>  
                <AnimatedLi style={{opacity: chosenMemory===option && 1} } onClick={()=> chosenMemory!==option ? setChosenMemory(option) : setChosenMemory()}>
                    {option.action}{option.result}
                </AnimatedLi>                
            )
        }   
    </MemoryUl>
*/

/*
<div style={{display:"flex", flexDirection: "column", gap: "5px"}}>
<FactsDiv>
    <span style={{color: "white", backgroundColor: "black"}}>last_control:</span> 
    <div><span style={{color: "black", backgroundColor: "yellow"}}>{currentAction}</span></div>

    <span style={{color: "white", backgroundColor: "black"}}>on_object:</span>
    <div><span style={{color: "black", backgroundColor: "yellow"}}> {chosenOption ? chosenOption.name : "choose with Eyes"}</span></div>

        <StatusSpan style={{color: "white", backgroundColor: "black"}}>{">_result:"}</StatusSpan>
        <StatusSpan style={{color: "lightgrey", background: "none"}}>{pastOptions.slice(-1).map((option)=><StatusSpan>{currentAction && option.action}</StatusSpan>)}</StatusSpan>
        <StatusSpan style={{color: "white", backgroundColor: "black"}}>{" >_"}</StatusSpan>
        <StatusSpan style={{color: "black", backgroundColor: "red"}}>{pastOptions.slice(-1).map((option)=><StatusSpan>{currentAction ? option.result : " "}</StatusSpan>)}</StatusSpan>
</FactsDiv>
</div>

  <span>
    <ResultsDiv >
      <span>
        <span style={{color: "white", backgroundColor: "black"}}>{">_result:"}</span>
        <span style={{color: "lightgrey", background: "none"}}>{pastOptions.slice(-1).map((option)=><span>{currentAction && option.action}</span>)}</span>
        <span style={{color: "white", backgroundColor: "black"}}>{" >_"}</span>
        <span style={{color: "black", backgroundColor: "red"}}>{pastOptions.slice(-1).map((option)=><span>{currentAction ? option.result : " "}</span>)}</span>
      </span> 
    </ResultsDiv>

    <FactsDiv>
      <div>
          <span style={{color: "white", backgroundColor: "black"}}>last_control:</span> 
          <div><span style={{color: "black", backgroundColor: "yellow"}}>{currentAction}</span></div>
      </div>    
      <div>
          <span style={{color: "white", backgroundColor: "black"}}>on_object:</span>
          <div><span style={{color: "black", backgroundColor: "yellow"}}> {chosenOption ? chosenOption.name : "choose with Eyes"}</span></div>
      </div>
    </FactsDiv>  
  </span>

*/

