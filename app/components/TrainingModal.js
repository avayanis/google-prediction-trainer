import React, { Component, PropTypes } from 'react';

export default class TrainingModal extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    models: PropTypes.array.isRequired,
    formType: PropTypes.string.isRequired,
    newModel: PropTypes.func.isRequired,
    updateModel: PropTypes.func.isRequired
  }

  newModalHandler = () => {
    this.props.newModel();
  }

  updateModalHandler = () => {
    this.props.updateModel();
  }

  render() {
    let modelNameInput;

    if (this.props.formType === 'update') {
      modelNameInput = (
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              id="modelName"
            />
          </div>
          <div className="col-md-2">
            <div className="btn btn-info" onClick={this.newModalHandler}>New</div>
          </div>
        </div>
      );
    } else {
      modelNameInput = (
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              id="modelName"
            />
          </div>
          <div className="col-md-2">
            <div className="btn btn-info" onClick={this.updateModalHandler}>Update</div>
          </div>
        </div>
      );
    }

    let dataOptions = [];

    this.props.columns.forEach((column, index) => {
      dataOptions.push(
        <option key={index} label={column}>{index}</option>
      );
    });

    return (
      <div
        className="modal fade bs-example-modal-lg"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <i className="fa fa-times" aria-hidden="true" />
              </button>
              <h4 className="modal-title" id="gridSystemModalLabel">Train Model</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-offset-4 col-md-4">
                  <form>
                    <div className="form-group">
                      <label htmlFor="modelName">Model Name</label>
                      {modelNameInput}
                    </div>
                    <div className="form-group">
                      <label htmlFor="modelType">Model Type</label>
                      <select id="modelType" className="form-control">
                        <option label="Classification">classification</option>
                        <option label="Regression">regression</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
