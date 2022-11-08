import {useState} from "react";
import styled from "styled-components";

import {organsArray} from "../db/organsArray"

function Organs({chosenOrgan, changeChosenOrgan, bodyAction}) {

    const handleChange = (e) => {
        const newChosenOrgan = organsArray.find((organ)=> organ.name===e.target.value)
        changeChosenOrgan(newChosenOrgan);
      };

return(
<OrganForm>
          <fieldset>
            <legend>SELECT_ORGAN</legend>
              {organsArray.map((organ, index) => 
                    <>
                    <input
                        type="radio"
                        id= {"contactChoice"+index}
                        name="organ"
                        value= {organ.name}
                        onChange={handleChange}
                    />
                    <label htmlFor={"contactChoice"+index} >{organ.name}</label>
                    </> 
                )}
            <p>{chosenOrgan ? chosenOrgan.name : "choose..."}</p>
            <FlexDiv>
                {chosenOrgan.content.map((organFunction)=> <button onClick={()=>bodyAction(organFunction)}> {organFunction} </button>) }
            </FlexDiv>

          </fieldset>
</OrganForm>)
}
export default Organs;

const OrganForm=styled.form`
background-color: lightgrey;
padding: 30px;
border: 3px solid hotpink;
color: hotpink;
`;

const FlexDiv = styled.div`
display: grid;
grid-template-columns: 100px 100px 100px;
grid-template-rows: 50px 50px 50px;
`;


