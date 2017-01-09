import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import app from './app';
import home from './home';
import session from './session';
import training from './training';
import settings from './settings';

const rootReducer = combineReducers({
  app,
  home,
  session,
  training,
  settings,
  routing
});

export default rootReducer;
