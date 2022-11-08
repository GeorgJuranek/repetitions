import styled from "styled-components";
import {keyframes} from "styled-components";
import {bodyParts} from "../db/bodyParts";

function BodyMachine({bodyPart, changeBodyPart, changeBodyFunction}) {

  const handleChange = (e) => {
    changeBodyFunction();
    let newBodyPart= bodyParts.find((part)=> part.value===e.target.value)
    changeBodyPart(newBodyPart);
    //changeBodyFunction(newBodyPart.functions);
  };

    return (
      <BodyNav>
        <form>
          <fieldset>
            <legend>Körperteil</legend>

              {bodyParts.map((bodyPart, index) => 
                <>
                  <input
                    type="radio"
                    id= {"contactChoice"+index}
                    name="part"
                    value= {bodyPart.value}
                    onChange={handleChange}
                  />
                  <label htmlFor={"contactChoice"+index} >{bodyPart.word}</label>
                </> 
              )}

          </fieldset>
        </form>
      {
        bodyPart && bodyPart.functions.map( (singleFunction)=> <button onClick={()=> changeBodyFunction(singleFunction)}>{singleFunction.word}</button>)
      }
      </BodyNav>
    );
  }

export default BodyMachine;

//ANIMATIONEN
const popUpAnimationBottom = keyframes`
  0%{transform: translateY(500px); opacity: 0.1; }
  100%{transform: translateY(0); opacity: 1; }
`;

// STYLED COMPONENTS
const BodyNav = styled.nav`
border: 5px double hotpink;
border-radius: 25px;
padding: 10px;
margin: 10px;
width: auto;
max-width: 500px;
min-height: 100px;
background-color: none;
color: hotpink;

transform: translateY(0);
opacity: 1;
animation-name: ${popUpAnimationBottom};
animation-duration: 2s;
animation-iteration-count: 1;
`;

