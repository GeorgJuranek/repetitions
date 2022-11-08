import { useEffect } from "react";
import styled from "styled-components";

function Compound({object, bodyPart, bodyFunction, changeBodyPart, changeBodyFunction, changeObject, changeOptions, changeLastAction}) {

    function assembleSentence() {

        if (bodyFunction && object)
        {
            return(`Du ${bodyFunction.present} ${bodyFunction.interaktion} ${ object[bodyFunction.interaktionFall] } ${object.name}.`)
        }
    }

    useEffect(()=>{
        if (object && bodyFunction && object.keyWord===bodyFunction.word)
        {
            changeOptions(object.content);
            changeLastAction(assembleSentence());
            changeObject();
            changeBodyPart();
            changeBodyFunction();
        }

        
    },[bodyFunction])

    return(
        <>
            <ResultDiv>
                {assembleSentence()}
            </ResultDiv>
        </>
    );
};

export default Compound;

const FlexDiv = styled.div`
display: grid;
grid-template-columns: 1fr  1fr 1fr;
grid-template-rows: 1fr;
padding: 10px 15px;
border: 3px solid lightgrey;
background-color: none;
margin-top: 20px;
`;

const CompoundDiv = styled.div`
border: 3px solid grey;
border-radius: 50px;
padding: 10px 40px;
margin: -5px -10px;
width:100px;
height:50px;
color: white;
background-color: darkgrey;
`;

const ResultDiv = styled.div`
border: 3px solid darkgrey;
border-radius: 30px;
padding: 25px;
background-color: rgba(0, 0, 49, 0.8);
color: white;
height: 30px;
width: 400px;
margin: -20px 20px;
margin-bottom: 3px;
`;

