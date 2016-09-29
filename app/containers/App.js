import React, { Component, PropTypes } from 'react';
import Navigation from '../components/Navigation';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <Navigation location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}
