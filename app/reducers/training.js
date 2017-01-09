import {
  CLEAR_CSV,
  CSV_ADD_HEADER,
  CSV_ADD_ROW,
  NEW_MODEL_FORM,
  UPDATE_MODEL_FORM
} from '../actions/training';

const initialState = {
  headers: [],
  rows: {},
  counter: 0,
  formType: 'update'
};

export default function training(state = initialState, action) {
  switch (action.type) {
    case CSV_ADD_HEADER: {
      return Object.assign({}, state, {
        headers: action.payload
      });
    }
    case CSV_ADD_ROW: {
      const newRow = {};

      newRow[state.counter + 1] = action.payload;

      return Object.assign({}, state, {
        rows: Object.assign({}, state.rows, newRow),
        counter: state.counter + 1
      });
    }
    case CLEAR_CSV: {
      return Object.assign({}, state, {
        headers: [],
        rows: {}
      });
    }
    case NEW_MODEL_FORM: {
      return Object.assign({}, state, {
        formType: 'new'
      });
    }
    case UPDATE_MODEL_FORM: {
      return Object.assign({}, state, {
        formType: 'update'
      });
    }
    default:
      return state;
  }
}
