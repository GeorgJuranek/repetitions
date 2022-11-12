import styled from "styled-components";

import {organsArray} from "../db/organsArray";

function Organs({chosenOption, chosenOrgan, setChosenOrgan, setChosenOrganFunction}) {

    const handleChange = (e) => {
        const newChosenOrgan = organsArray.find((newOrgan)=> newOrgan.name===e.target.value);
        setChosenOrgan(newChosenOrgan);
      };

return(
<OrganForm style={chosenOption.name.length>0 ? {display: "grid"} : {display: "none"} }>
          <fieldset>
            <legend>SELECT_ORGAN</legend>
              {organsArray.map((organ, index) => 
                    <>
                      <input
                          type="radio"
                          id= {"contactChoice"+index}
                          name="organ"
                          value= {organ.name}
                          checked={chosenOrgan.name === organ.name}
                          onChange={handleChange}
                      />
                      <label style={organ.name===chosenOrgan.name ? {backgroundColor: "red"} : {backgroundColor: "pink"}} htmlFor={"contactChoice"+index} >{organ.name}</label>
                    </> 
                )}
            <FlexDiv>
                {chosenOrgan.content.map((organFunction)=> <button onClick={()=>setChosenOrganFunction(organFunction)}> {organFunction} </button>) }
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


