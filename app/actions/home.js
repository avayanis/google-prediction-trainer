export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';
export const SELECT_PROJECT = 'SELECT_PROJECT';
export const UPDATE_MODELS = 'UPDATE_MODELS';
export const CLEAR_ERROR = 'CLEAR_ERROR';
export const SET_ERROR = 'SET_ERROR';

export function clearError() {
  return {
    type: CLEAR_ERROR
  };
}

export function setError(msg) {
  return {
    type: SET_ERROR,
    payload: msg
  };
}

export function updateProjectList(projects) {
  return {
    type: UPDATE_PROJECTS,
    payload: projects
  };
}

export function updateModelList(models) {
  return {
    type: UPDATE_MODELS,
    payload: models
  };
}

export function updateSelectedProject(projectId) {
  return {
    type: SELECT_PROJECT,
    payload: projectId
  };
}
