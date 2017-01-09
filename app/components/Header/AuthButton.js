import React, { Component, PropTypes } from 'react';
import google from '../../utils/google';

export default class AuthButton extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired
  };

  handleLogin = () => {
    const authUrl = google.getAuthUrl(this.props.settings.googleClientId);

    window.location = authUrl;
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    if (this.props.app.isLoggedIn) {
      return (
        <li onClick={this.handleLogout} ref={(node) => { this.node = node; }}>
          <a>
            <i className="fa fa-sign-out" aria-hidden="true" />
          </a>
        </li>
      );
    }

    return (
      <li onClick={this.handleLogin} ref={(node) => { this.node = node; }}>
        <a>
          <i className="fa fa-sign-in" aria-hidden="true" />
        </a>
      </li>
    );
  }
}
