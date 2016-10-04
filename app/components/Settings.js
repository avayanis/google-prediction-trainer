import React, { Component, PropTypes } from 'react';
import { shell } from 'electron';

class Settings extends Component {
  static propTypes = {
    save: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.updateInputValues(this.props.settings);
  }

  componentWillUpdate(props) {
    this.updateInputValues(props.settings);
  }

  updateInputValues(newValues) {
    const form = this.node.getElementsByTagName('form')[0];
    const inputItems = form.getElementsByTagName('input');

    for (let i = 0, length = inputItems.length; i < length; i++) {
      const item = inputItems[i];

      if (typeof newValues[item.id] !== 'undefined') {
        item.value = newValues[item.id];
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { save } = this.props;
    const form = e.target;
    const inputItems = form.getElementsByTagName('input');
    const newSettings = {};

    // grab all values to save
    for (let i = 0, length = inputItems.length; i < length; i++) {
      const item = inputItems[i];

      newSettings[item.id] = item.value;
    }

    save(newSettings);
  }

  openSupportLink(e) {
    e.preventDefault();
    shell.openExternal(e.target.href);
  }

  render() {
    return (
      <div className="container" ref={(node) => { this.node = node; }}>
        <div className="row">
          <div className="col-md-offset-3 col-md-5">
            <div className="alert alert-info">
              For instructions on creating your Google API credentials, <a href="https://support.google.com/cloud/answer/6158849?hl=en" onClick={this.openSupportLink}>click here</a>.
            </div>
            <form id="form-settings" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="googleClientId">Client ID</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="googleClientId"
                />
              </div>
              <div className="form-group">
                <label htmlFor="googleClientSecret">Client Secret</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="googleClientSecret"
                />
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
