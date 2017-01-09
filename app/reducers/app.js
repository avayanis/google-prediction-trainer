import { APP_LOGIN, APP_LOGOUT } from '../actions/app';
import { SELECT_PROJECT } from '../actions/home';

const initialState = {
  isLoggedIn: false,
  user: null,
  oauthTokens: null,
  project: -1
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_LOGIN:
      return Object.assign({}, state, {
        user: action.user,
        oauthTokens: action.payload,
        isLoggedIn: true
      });
    case APP_LOGOUT:
      return Object.assign({}, initialState);
    case SELECT_PROJECT:
      return Object.assign({}, state, {
        project: action.payload
      });
    default:
      return state;
  }
}
