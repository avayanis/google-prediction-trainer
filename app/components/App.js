import React, { Component, PropTypes } from 'react';
import Navbar from '../components/Header/Navbar';
import styles from './Home.css';


export default class Home extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    app: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar
          app={this.props.app}
          location={this.props.location}
          logout={this.props.logout}
          settings={this.props.settings}
        />
        {this.props.children}
      </div>
    );
  }
}
