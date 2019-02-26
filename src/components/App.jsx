import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Body from './body';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default connect()(App);
