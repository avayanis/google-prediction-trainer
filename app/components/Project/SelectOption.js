import React, { Component, PropTypes } from 'react';

export default class SelectOption extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <option
        key={this.props.id}
        label={`${this.props.name} - ${this.props.id}`}
      >{this.props.id}</option>
    );
  }
}
