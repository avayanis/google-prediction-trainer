import { SAVE_SETTINGS } from '../actions/settings';

let settings = null;

export default function counter(state, action) {
  switch (action.type) {
    case SAVE_SETTINGS:
      window.localStorage.setItem('settings', JSON.stringify(action.settings));

      return action.settings;
    default:
      settings = window.localStorage.getItem('settings');

      if (settings) {
        settings = JSON.parse(settings);
      }

      return settings;
  }
}
