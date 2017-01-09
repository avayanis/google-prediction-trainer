import React, { Component, PropTypes } from 'react';

import ProjectSelectOption from './SelectOption';

import google from '../../utils/google';

export default class Home extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired,
    updateProjectList: PropTypes.func.isRequired,
    changeHandler: PropTypes.func
  }

  componentDidMount() {
    if (this.props.app.isLoggedIn) {
      const accessToken = this.props.app.oauthTokens.access_token;
      const updateProjectList = this.props.updateProjectList;

      google.getProjectList(accessToken)
        .then(res => updateProjectList(res.projects));
    }
  }

  changeHandler = (e) => {
    if (this.props.changeHandler) {
      this.props.changeHandler(e);
    }
  }

  render() {
    const projectOptions = [];

    this.props.projects.forEach(project => {
      projectOptions.push(
        <ProjectSelectOption name={project.name} id={project.projectId} key={project.projectId} />
      );
    });

    return (
      <div className="col-md-3" ref={(node) => { this.node = node; }}>
        <div className="form-group">
          <select
            className="form-control"
            id="projectSelector"
            onChange={this.changeHandler}
            value={this.props.app.project}
          >
            <option disabled label="Select a Project...">-1</option>
            {projectOptions}
          </select>
        </div>
      </div>
    );
  }
}
