import React from 'react';
import Header from './header';
import Body from './body';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    console.log('app', this.props);
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default App;
