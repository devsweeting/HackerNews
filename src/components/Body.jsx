import React from 'react';
import NewCommentForm from './NewCommentForm';
import Comments from './Comments';
import { connect } from 'react-redux';

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

class Body extends React.Component {
  constructor(props) {
    super(props)
    console.log('super', props)
    // this.props.masterCommentList = {"1":{"text":"value", "id":"1"}}
  }

  componentDidUpdate() {
    console.log('swhoop', this.props.masterCommentList)
  }

  render() {
    const comments = this.props.masterCommentList ? <div style={comments}>
      {Object.keys(this.props.masterCommentList).map((commentId) =>{
      return <Comments text={this.props.masterCommentList[commentId].text}
      key={this.props.masterCommentList[commentId].id}
      />
      })}
    </div> : <p>no comments</p>
    console.log('body render', this.props)
    return (
      <div style={wrapper}>
        <div style={newForm}><NewCommentForm /></div>
        {comments}
      </div>
    );
  }
}

const mapStateToProps = state => {
  masterCommentList: state
}

export default connect(mapStateToProps)(Body);
