import React, { Component, PropTypes } from 'react';
import $ from 'jquery';
import csv from 'fast-csv';
import fs from 'fs';
import FileDialog from './FileDialog';
import TrainingModal from './TrainingModal';

class Training extends Component {
  static propTypes = {
    addHeader: PropTypes.func.isRequired,
    addRow: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    newModelForm: PropTypes.func.isRequired,
    updateModelForm: PropTypes.func.isRequired,
    // Component State
    app: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    training: PropTypes.object.isRequired,
  }

  fileDialogClickHandler = (filename) => {
    let counter = 0;

    this.props.clearData();
    fs.createReadStream(filename)
      .pipe(csv())
      .on('data', (data) => {
        if (counter++ === 0) {
          this.props.addHeader(data);
        } else {
          this.props.addRow(data);
        }
      })
      .on('error', (err) => {
        console.error(err);
      });
  }

  trainClickHandler = () => {
    if (this.props.training.headers.length === 0 ||
      this.props.training.rows.length === 0) {
      return;
    }

    $('.bs-example-modal-lg').modal({
      backdrop: 'static',
      show: true
    });
  }

  resetClickHandler = () => {
    this.props.clearData();
  }

  render() {
    if (!this.props.app.isLoggedIn) {
      return (
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-offset-4 col-md-4">
              <div className="alert alert-info loginAlert">You must first sign in.</div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid" ref={(node) => { this.node = node; }}>
        <div className="row">
          <div className="btn btn-success training-btn" onClick={this.trainClickHandler}>
            Train
          </div>
          <FileDialog
            className="btn-info training-btn"
            onClick={this.fileDialogClickHandler}
          >Import CSV</FileDialog>
          <div className="btn btn-danger training-btn" onClick={this.resetClickHandler}>
            Reset
          </div>
        </div>
        <div id="training-csv-preview" className="row">
          <table className="table table-bordered table-striped">
            <thead>
              <tr className="success">
                {this.props.training.headers.map(header => <th>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.training.rows).map(function (key) {
                const row = this.props.training.rows[key];

                return (
                  <tr>
                    {row.map(data => <td>{data}</td>)}
                  </tr>
                );
              }, this)}
            </tbody>
          </table>
        </div>
        <TrainingModal
          columns={this.props.training.headers}
          models={this.props.session.models}
          formType={this.props.training.formType}
          newModel={this.props.newModelForm}
          updateModel={this.props.updateModelForm}
        />
      </div>
    );
  }
}

export default Training;
