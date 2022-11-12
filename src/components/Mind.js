import styled from "styled-components";

function Mind({
    chosenOrgan,
    chosenOrganFunction,
    chosenOption,
    pastOptions
}) {


  return (
    <MindDiv>
        <LeftAside>
            <p>st-memory</p>
            <ul>
                <li>...</li>
            </ul>
        </LeftAside>
        <MindUl>
        <p>mind craft</p>
            <li>{chosenOption && chosenOption.name}</li>
            <li>{chosenOrgan && chosenOrgan.name}</li>
            <li>{chosenOrganFunction && chosenOrganFunction}</li>
        </MindUl>
        <RightAside>
            <p>lt-memory</p>
            <ul>
                {  pastOptions.length>1 && pastOptions.slice(1).map((option)=><li>{option}</li>)}
            </ul>
        </RightAside>
    </MindDiv>  
  );
}
export default Mind;

const MindDiv = styled.div`
display: flex;
justify-content: center;
flex-wrap: nowrap;

height: 50vh;
border: 3px solid black;
`;

const MindUl = styled.ul`
width: 20%;
border: 3px solid grey;
background-Color: grey;
color: white;
`;

const LeftAside = styled.aside`
border: 3px solid grey;
width: 40%;
border-radius: 5px;
`;


const RightAside = styled.aside`
width: 40%;
border: 3px solid grey;
border-radius: 5px;
`;