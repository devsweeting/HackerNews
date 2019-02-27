import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewCommentForm(props) {
  let _text = null;

  function handleCommentCreation(event) {
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_COMMENT',
      id: v4(),
      text: _text.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _text.value = '';
  }

  return (
    <div>
      <form onSubmit={handleCommentCreation}>
        <input
          type='text'
          id='names'
          placeholder='Comment'
          ref={(input) => {_text = input;}}/>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewCommentForm);
