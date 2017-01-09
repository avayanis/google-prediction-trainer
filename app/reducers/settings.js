import { SAVE_SETTINGS } from '../actions/settings';

let data = null;

export default function settings(state, action) {
  switch (action.type) {
    case SAVE_SETTINGS:
      window.localStorage.setItem('settings', JSON.stringify(action.settings));

      return action.settings;
    default:
      if (state) {
        return state;
      }

      data = window.localStorage.getItem('settings');

      if (data) {
        data = JSON.parse(data);
      } else {
        data = {};
      }

      return data;
  }
}
