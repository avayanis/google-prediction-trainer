module.exports = {
  clear: () => {
    window.localStorage.removeItem('settings');
  },

  get: () => {
    const settings = window.localStorage.getItem('settings') || {};

    if (settings) {
      return JSON.parse(settings);
    }

    return settings;
  },

  save: (settings) => {
    window.localStorage.setItem('settings', JSON.stringify(settings));
  }
};
