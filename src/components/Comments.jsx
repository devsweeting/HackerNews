import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
position: relative;
border: 1px solid black;
background-color: tomato;
`;

function Comments () {
  return (
    <Wrapper>
      <h3> Author</h3>
      <p> Comment </p>
    </Wrapper>
  )
}

export default Comments
