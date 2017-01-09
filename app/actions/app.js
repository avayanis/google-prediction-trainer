export const APP_LOGIN = 'APP_LOGIN';
export const APP_LOGOUT = 'APP_LOGOUT';

export function login(user, payload) {
  return {
    type: APP_LOGIN,
    user,
    payload
  };
}

export function logout() {
  return {
    type: APP_LOGOUT
  };
}
