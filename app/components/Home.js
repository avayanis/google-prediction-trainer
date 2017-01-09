import React, { Component, PropTypes } from 'react';

import ProjectSelector from './Project/Selector';
import google from '../utils/google';
import styles from './Home.css';

export default class Home extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
    home: PropTypes.object.isRequired,
    session: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    clearError: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    updateProjectList: PropTypes.func.isRequired,
    updateModelList: PropTypes.func.isRequired,
    updateSelectedProject: PropTypes.func.isRequired
  }

  changeProjectHandler = (e) => {
    const projectId = e.target.value;
    const accessToken = this.props.app.oauthTokens.access_token;
    const projectKey = this.props.settings.googleProjectKey;
    const updateModelList = this.props.updateModelList;

    this.props.updateSelectedProject(projectId);
    google.getModelList(projectId, accessToken, projectKey)
      .then(res => {
        this.props.clearError();
        updateModelList(res.items || []);
      })
      .catch((err) => {
        const message = err.error.error.message;
        this.props.setError(message);
      });
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

    let content;

    if (this.props.home.error) {
      content = (
        <div className="col-md-offset-4 col-md-4">
          <div className="alert alert-warning">{this.props.home.error}</div>
        </div>
      );
    } else {
      content = (
        <div>
          Test
        </div>
      );
    }

    return (
      <div className="container-fluid ">
        <div className="row">
          <ProjectSelector
            app={this.props.app}
            projects={this.props.session.projects}
            updateProjectList={this.props.updateProjectList}
            changeHandler={this.changeProjectHandler}
          />
        </div>
        <div className="row">
          {content}
        </div>
      </div>
    );
  }
}
