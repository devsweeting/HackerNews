import React from 'react';
import Comments from './Comments';

const wrapper = {
  display: 'grid',
  gridGap: '2px',
  gridTemplateColumns: '30% 70%',
  justifyContent: 'space-between',
};

const newForm = {
  gridColumn: '1',
  gridRow: '1',
  margin: '20px',
  border: '1px solid black'
};

const comments = {
  gridColumn: '2',
  gridRow: '1',
  color: ' slategrey',
  margin: '20px',
};

function Body () {
  return (
    <div style={wrapper}>
      <p style={newForm}>New Form Here</p>
      <p style={comments}><Comments /></p>
    </div>
  );
}

export default Body;
