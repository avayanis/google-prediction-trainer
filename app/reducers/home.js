import { CLEAR_ERROR, SET_ERROR } from '../actions/home';

const initialState = {
  error: null
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ERROR:
      return Object.assign({}, state, {
        error: null
      });
    case SET_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      });
    default:
      return state;
  }
}
