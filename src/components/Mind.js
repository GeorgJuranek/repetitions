import styled from "styled-components";
import {css} from "styled-components";

function Mind({
    chosenOrgan,
    chosenOrganFunction,
    chosenOption,
    pastOptions,
    currentOptions,
    setChosenOption
}) {

    function switchOption(option) {
        if(option === chosenOption)
        {
            setChosenOption({name:"", interaction:"", content: {message:"start", leadsTo: ""}});
        }
        else
        {
            setChosenOption(option);
        }
    }

  return (
    <MindDiv>

        <LeftAside>
            <OptionsDiv>
                {currentOptions.map((option)=> 
                    <OptionButton isItOn={option===chosenOption && highlightedOption} 
                    onClick={()=>switchOption(option)}>
                        {option.name}
                    </OptionButton>) 
                }
            </OptionsDiv>
        </LeftAside>

        { pastOptions.length>1 && pastOptions.slice(-1).map((option)=><SubtitleP>{option.action + option.result}</SubtitleP>)}
        
        <MindUl>
        <p>mind craft</p>
            <li>{chosenOption && chosenOption.name}</li>
            <li>{chosenOrgan && chosenOrgan.name}</li>
            <li>{chosenOrganFunction && chosenOrganFunction}</li>
        </MindUl>

        <RightAside>
            {chosenOption &&    <OptionButton style={{width: "100%", border: "none", background: "none"}} isItOn={highlightedOption} 
                                onClick={()=>switchOption(chosenOption)}>
                                    {chosenOption.name}
                                </OptionButton>
            }
        </RightAside>

    </MindDiv>  
  );
}
export default Mind;

const MindDiv = styled.div`
display: flex;
justify-content: center;
flex-wrap: nowrap;
position: relative;
height: 40vh;
`;

const MindUl = styled.ul`
width: 10%;
border: 3px solid grey;
background-Color: grey;
color: white;
`;

const LeftAside = styled.aside`
border: 3px solid grey;
width: 45%;
border-radius: 5px;
overflow: scroll;
`;


const RightAside = styled.aside`
width: 45%;
border: 3px solid grey;
border-radius: 5px;
`;

const SubtitleP = styled.p`
position: absolute;
background-color: black;
color: white;
font-size: 1.5rem;
bottom: 0;
`;

//
const OptionsDiv= styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-coumns: 1fr 1fr 1fr 1fr;
grid-auto-flow: column;
justify-items: center;
gap: 8%;
width: auto;
`;

const OptionButton= styled.button`
color: white;
background-color: rgba(0, 0, 0, 0.2);
height: 100px;
width: 100px;
border: 1px solid white;
${(props) => props.isItOn}; //for animation
`;

const highlightedOption= css`
border: 2px solid orange;
`;