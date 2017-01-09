import { UPDATE_MODELS, UPDATE_PROJECTS } from '../actions/home';

const initialState = {
  models: [],
  projects: []
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MODELS:
      return Object.assign({}, state, {
        models: action.payload
      });
    case UPDATE_PROJECTS:
      return Object.assign({}, state, {
        projects: action.payload
      });
    default:
      return state;
  }
}
