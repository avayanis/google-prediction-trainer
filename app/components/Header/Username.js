import React, { Component, PropTypes } from 'react';

export default class Username extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired
  };

  render() {
    if (this.props.app.isLoggedIn) {
      return (
        <li ref={(node) => { this.node = node; }}>
          <a>{ this.props.app.user.email }</a>
        </li>
      );
    }

    return (
      <li><a>Not Logged In.</a></li>
    );
  }
}
