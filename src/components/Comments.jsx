import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
position: relative;
border: 1px solid black;
background-color: tomato;
`;

function Comments (props) {
  return (
    <Wrapper>
      <h3> {props.text} </h3>
    </Wrapper>
  )
}

export default Comments
