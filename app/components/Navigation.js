import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export default class Navigation extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
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
              <Link to="/">Dashboard</Link>
            </li>
            <li className={(activeTab === 'training') ? 'active' : ''}>
              <Link to="/training">Train</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
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
