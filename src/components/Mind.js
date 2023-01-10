import {useState, useEffect, useRef} from 'react';
import styled from "styled-components";
import {css, keyframes} from "styled-components";

function Mind({
    chosenOrgan,
    chosenOrganFunction,
    chosenOption,
    pastOptions,
    currentOptions,
    setChosenOption,
    isWinking,
    setIsWinking,
    currentBackground,
    fullSize
}) {
    //
        const leftEyelid = useRef();
        const rightEyelid = useRef();
        const leftEyesight = useRef();
        const rightEyesight = useRef();
    //
        //
        useEffect(() => {
            rightEyelid.current.scrollTo(leftEyelid.current.scrollLeft+(leftEyelid.current.offsetWidth) , rightEyelid.current.scrollTop );
        });
        //

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
    
    //
    
    useEffect(() => {
        const handleScroll = event => {

            if (leftEyelid.current.scrollLeft<=1)
            {
                leftEyelid.current.scrollTo(event.currentTarget.scrollLeft+(10), event.currentTarget.scrollTop);
                //rightEyelid.current.scrollTo(leftEyelid.current.scrollLeft+(leftEyelid.current.offsetWidth) , rightEyelid.current.scrollTop );
                setIsWinking(true);
            }
            else if (leftEyelid.current.scrollLeft<rightEyelid.current.scrollLeft)
            {
                rightEyelid.current.scrollTo(event.currentTarget.scrollLeft+(leftEyelid.current.offsetWidth) , event.currentTarget.scrollTop);
            }
            else
            {
                ////leftEyelid.current.scrollTo(event.currentTarget.scrollLeft-(rightEyelid.current.offsetWidth), event.currentTarget.scrollTop);    
                rightEyelid.current.scrollTo(event.currentTarget.scrollLeft-(leftEyelid.current.offsetWidth) , event.currentTarget.scrollTop);
                leftEyelid.current.scrollTo(event.currentTarget.scrollLeft-(rightEyelid.current.offsetWidth), event.currentTarget.scrollTop);
                setIsWinking(true);
                
            }
        }; 
        const element = leftEyelid.current;
        element.addEventListener('scroll', handleScroll);
    
        return () => {
          element.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        const handleScroll = event => {
            
            if ( (rightEyelid.current.scrollLeft) > (rightEyesight.current.offsetWidth - rightEyelid.current.offsetWidth - 1) )
            {
                rightEyelid.current.scrollTo(event.currentTarget.scrollLeft-(100), event.currentTarget.scrollTop);
                setIsWinking(true);
            }
            else if (rightEyelid.current.scrollLeft>leftEyelid.current.scrollLeft)
            {
                leftEyelid.current.scrollTo(event.currentTarget.scrollLeft-(rightEyelid.current.offsetWidth), event.currentTarget.scrollTop);
            }
            else
            {    
                ////rightEyelid.current.scrollTo(event.currentTarget.scrollLeft+(leftEyelid.current.offsetWidth), event.currentTarget.scrollTop); 
                leftEyelid.current.scrollTo(event.currentTarget.scrollLeft+(rightEyelid.current.offsetWidth), event.currentTarget.scrollTop);
                rightEyelid.current.scrollTo(event.currentTarget.scrollLeft+(leftEyelid.current.offsetWidth), event.currentTarget.scrollTop);   
                setIsWinking(true);

            }
        }; 
        const element = rightEyelid.current;
        element.addEventListener('scroll', handleScroll);
    
        return () => {
          element.removeEventListener('scroll', handleScroll);
        };
      }, []);

    //

  return (
    <MindDiv>
        <LeftAside  ref={leftEyelid}  winking={isWinking && winking} onClick={ ()=>{setIsWinking(true)}} onAnimationEnd={()=>setIsWinking(false)}>
            <OptionsDiv>
                <EyeImg  style={{opacity: "0.5"}} ref={leftEyesight.fullSize}  src={currentBackground} alt="your flat"/>
                <OverlayDiv>
                    {currentOptions.map((option)=> 
                        <OptionButton isItOn={option===chosenOption && highlightedOption} 
                        onClick={ ()=>{switchOption(option);setIsWinking(true)} }>
                            {option.name}
                        </OptionButton>) 
                    }
                </OverlayDiv>
            </OptionsDiv>
        </LeftAside>

    { pastOptions.length>1 && pastOptions.slice(-1).map((option)=><SubtitleP>{option.action + option.result}</SubtitleP>)}

        <RightAside  ref={rightEyelid} winking={isWinking && winking} onClick={()=>{setIsWinking(true)}} onAnimationEnd={()=>setIsWinking(false)}>
            <OptionsDiv>  
                <EyeImg style={{opacity: "0.5"}} ref={rightEyesight} src={currentBackground} alt="your flat"/>
                <OverlayDiv>
                    {currentOptions.map((option)=> 
                            <OptionButton isItOn={option===chosenOption && highlightedOption} 
                            onClick={ ()=>{switchOption(option);setIsWinking(true)}}>
                                {option.name}
                            </OptionButton>) 
                    }
                </OverlayDiv>
            </OptionsDiv>
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
min-height: 300px;
height: 75%;
max-height: 750px;

`;

//
const winkAnim = keyframes`
    0% {height: 100%; transform: translateY(0); border-radius: 1px; border-width: 1px; opacity: 1}
    50% {height: 0; transform: translateY(25vh); border-radius: 50%; border-width: 10px; opacity: 0.1; width: 47%;}
    100% {height: 100%; transform: translateY(0); border-radius: 1px; border-width: 1px; opacity: 1}
`;
const winking = css`
    animation-name: ${winkAnim};
    animation-duration: 0.4s;
    animation-iteration-count: 1;
`;

const LeftAside = styled.aside`
width: 51%;
position: absolute;
height: 100%;
left: 5%;

border-radius: 5px;
overflow: scroll;
${(props) => props.winking}; //for animation
z-index: 2;
`;

const RightAside = styled.aside`
width: 51%;
position: absolute;
height: 100%;
right: 5%;

border-radius: 5px;
overflow: scroll;
${(props) => props.winking}; //for animation
z-index: 1;
`;

//

const EyeImg = styled.img`
overflow: scroll;
height: auto;
width: auto;
margin: auto;
`;

//
const OptionsDiv= styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-coumns: 1fr 1fr 1fr 1fr;
grid-auto-flow: column;
justify-items: center;
gap: 8%;
width: 100%;
height:100%;
position: relative;
`;

const OptionButton= styled.button`
color: white;
background-color: rgba(0, 0, 0, 0.1);
height: 100px;
width: 100px;
border: 1px inset white;
${(props) => props.isItOn}; //for animation
margin: 10px;

transform: translate(700%, 400%);
@media (orientation: landscape) {
    transform: translate(600%, 400%);
  }
`;

const highlightedOption= css`
border: 3px groove orange;
transform: scale(1.1);
font-size: 1em;
background-color: rgba(0, 0, 0, 0.3);
`;

const OverlayDiv = styled.div`
position: absolute;
`;

//
const SubtitleP = styled.p`
position: absolute;

font-size: 1.5rem;
bottom: 0;
z-index: 0;
margin: 5% 10%;

color: white;
text-shadow: 0 0 10px white;

background-color: rgba(0,0,0,0.5);
box-shadow: 0 0 30px black;

`;

//
/*
    const MindUl = styled.ul`
    border: 3px solid grey;
    background-Color: grey;
    color: white;
    `;

    <MindUl>
    <p>mind craft</p>
        <li>{chosenOption && chosenOption.name}</li>
        <li>{chosenOrgan && chosenOrgan.name}</li>
        <li>{chosenOrganFunction && chosenOrganFunction}</li>
    </MindUl>
*/