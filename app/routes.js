import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import TrainingPage from './containers/TrainingPage';
import SettingsPage from './containers/SettingsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/training" component={TrainingPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/login" component={LoginPage} />
  </Route>
);
