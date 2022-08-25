import React from "react";
import styled from "styled-components"
function PageTag({ main,name,subgrup }) {
const Pmain = styled.p`
font-family: Inter;
font-size: 1.8rem;
font-weight: 900;
letter-spacing: 0em;
text-transform: uppercase;
`
const Psubgrup = styled.p`
display: flex;
font-family: Inter;
font-size: 1.8rem;
text-transform: uppercase;
font-weight: 400;
line-height: 1.4rem;
letter-spacing: 0em;
text-align: left;
`
const Div = styled.div`
  display: flex;
  align-items:center;
`
  return main 
        ? 
        <Div><Pmain>{name}</Pmain></Div> 
        :
         <Div>
          <Psubgrup>{subgrup}<Pmain>/{name}</Pmain></Psubgrup>
         </Div>;
}

export default PageTag;
