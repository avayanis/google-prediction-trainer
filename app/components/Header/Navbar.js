import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import AuthButton from './AuthButton';
import Username from './Username';

export default class Navbar extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired
  }

  render() {
    const pathname = this.props.location.pathname;
    const activeTab = (pathname === '/') ? 'index' : pathname.slice(1);

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">GPT</span>
          </div>
          <ul className="nav navbar-nav">
            <li className={(activeTab === 'index') ? 'active' : ''}>
              <Link to="/">Models</Link>
            </li>
            <li className={(activeTab === 'training') ? 'active' : ''}>
              <Link to="/training">Training</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <Username app={this.props.app} />
            <AuthButton
              app={this.props.app}
              logout={this.props.logout}
              settings={this.props.settings}
            />
            <li className={(activeTab === 'settings') ? 'active' : ''}>
              <Link to="/settings">
                <i className="fa fa-cog" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
