export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export function save(settings) {
  return {
    type: SAVE_SETTINGS,
    settings
  };
}
