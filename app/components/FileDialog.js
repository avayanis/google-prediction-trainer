import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import fs from 'fs';

const { dialog } = require('electron').remote;

class FileDialog extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  handleClick = () => {
    dialog.showOpenDialog((filenames) => {
      if (filenames === undefined) {
        return;
      }

      const filename = filenames[0];

      fs.statAsync(filename)
        .then(() => {
          this.props.onClick(filename);
        })
        .catch(() => {

        });
    });
  }

  render() {
    return (
      <div
        className={classnames('btn', this.props.className)}
        onClick={this.handleClick}
        ref={(node) => { this.node = node; }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default FileDialog;
